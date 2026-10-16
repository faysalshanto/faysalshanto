"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Background3D — "Interactive Ambient Cosmic Mesh & Studio Glow Orbs"
 * Inspired by MZ Media (mzmedia.digital) high-end digital agency aesthetic.
 *
 * Architecture:
 *  1. Deep Obsidian Void: Canvas background (#06070a) with subtle exponential fog.
 *  2. Soft Ambient Radial Light Flares: 2 deep, blurred luminous glow spots
 *     (deep royal blue #1d4ed8 and electric cyan #06b6d4) positioned off-center
 *     to give cinematic depth without obstructing typography.
 *  3. Interactive Constellation Field: 140 micro-points interconnected with
 *     faint hairline dynamic lines (opacity ~0.18) that gently drift and react
 *     subtly to cursor movement.
 *  4. 60fps Optimization: Strictly pointer-events-none, capped DPR at 2,
 *     and full WebGL resource disposal on unmount.
 */
export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---------- Core Scene Setup ----------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070a, 0.024);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const initialZ = window.innerWidth < 768 ? 12.5 : 10.0;
    camera.position.set(0, 0, initialZ);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x06070a, 1);
    mount.appendChild(renderer.domElement);

    // Dynamic Glow Dot Texture (Crisp core with soft ambient falloff)
    function createGlowDotTexture(): THREE.Texture {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(6, 182, 212, 0.9)");
        gradient.addColorStop(0.55, "rgba(29, 78, 216, 0.35)");
        gradient.addColorStop(1, "rgba(6, 7, 10, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    }

    // Large Soft Radial Flare Texture (Glow Orbs)
    function createOrbTexture(innerColor: string, outerColor: string): THREE.Texture {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, innerColor);
        gradient.addColorStop(0.45, outerColor);
        gradient.addColorStop(0.85, "rgba(6, 7, 10, 0.05)");
        gradient.addColorStop(1, "rgba(6, 7, 10, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);
      }
      return new THREE.CanvasTexture(canvas);
    }

    const dotTexture = createGlowDotTexture();
    const blueOrbTexture = createOrbTexture("rgba(29, 78, 216, 0.45)", "rgba(29, 78, 216, 0.15)");
    const cyanOrbTexture = createOrbTexture("rgba(6, 182, 212, 0.40)", "rgba(6, 182, 212, 0.12)");

    // ---------- 1. Soft Ambient Radial Light Flares (Glow Orbs) ----------
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // Orb 1: Deep Royal Blue (#1d4ed8) - Upper Left Field
    const blueOrbGeo = new THREE.PlaneGeometry(16, 16);
    const blueOrbMat = new THREE.MeshBasicMaterial({
      map: blueOrbTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const blueOrb = new THREE.Mesh(blueOrbGeo, blueOrbMat);
    blueOrb.position.set(-6.5, 3.5, -4.5);
    orbGroup.add(blueOrb);

    // Orb 2: Electric Cyan (#06b6d4) - Lower Right Field
    const cyanOrbGeo = new THREE.PlaneGeometry(14, 14);
    const cyanOrbMat = new THREE.MeshBasicMaterial({
      map: cyanOrbTexture,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cyanOrb = new THREE.Mesh(cyanOrbGeo, cyanOrbMat);
    cyanOrb.position.set(6.8, -3.2, -4.0);
    orbGroup.add(cyanOrb);

    // ---------- 2. Interactive Constellation Field ----------
    const POINT_COUNT = 140;
    const CONNECT_DIST = 2.2;
    const MAX_LINES = 320;

    interface CosmicParticle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      vx: number;
      vy: number;
      vz: number;
      phase: number;
      speed: number;
      amp: number;
    }

    const particles: CosmicParticle[] = [];
    const pointPositions = new Float32Array(POINT_COUNT * 3);
    const pointColors = new Float32Array(POINT_COUNT * 3);

    const colCyan = new THREE.Color(0x06b6d4);
    const colBlue = new THREE.Color(0x1d4ed8);
    const colWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < POINT_COUNT; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 8 - 1;

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;

      // Color variation: cyan, blue, focal white
      const rand = Math.random();
      const col = rand < 0.55 ? colCyan : rand < 0.85 ? colBlue : colWhite;
      pointColors[i * 3] = col.r;
      pointColors[i * 3 + 1] = col.g;
      pointColors[i * 3 + 2] = col.b;

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.003,
        vy: (Math.random() - 0.5) * 0.003,
        vz: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2,
        speed: 0.25 + Math.random() * 0.45,
        amp: 0.18 + Math.random() * 0.22,
      });
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(pointPositions, 3)
    );
    pointsGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(pointColors, 3)
    );

    const isMobile = window.innerWidth < 768;
    const pointsMat = new THREE.PointsMaterial({
      size: isMobile ? 0.22 : 0.28,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    scene.add(pointsMesh);

    // Hairline Connecting Lines
    const linePositions = new Float32Array(MAX_LINES * 6);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const linesMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18, // Clean, non-intrusive hairline opacity (~0.15 - 0.25)
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    scene.add(linesMesh);

    // ---------- Mouse Parallax & Dynamic Reactivity ----------
    const pointer = { x: 0, y: 0 };
    const mouse3D = new THREE.Vector3(0, 0, 0);
    const targetCam = { x: 0, y: 0 };
    const currentCam = { x: 0, y: 0 };

    function onPointerMove(e: PointerEvent) {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;

      targetCam.x = pointer.x * 0.75;
      targetCam.y = -pointer.y * 0.45;

      // Approximate mouse position in world coordinates for particle reaction
      mouse3D.set(pointer.x * 8.5, -pointer.y * 5.0, 0);
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // ---------- Window Resize Handling ----------
    function onResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mobile = width < 768;

      camera.aspect = width / height;
      camera.position.z = mobile ? 12.5 : 10.0;
      camera.updateProjectionMatrix();

      pointsMat.size = mobile ? 0.22 : 0.28;

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener("resize", onResize);

    // ---------- Visibility Handling (Pause offscreen) ----------
    let isVisible = true;
    function onVisibility() {
      isVisible = document.visibilityState === "visible";
    }
    document.addEventListener("visibilitychange", onVisibility);

    // ---------- Animation Loop (60fps) ----------
    const clock = new THREE.Clock();
    let rafId = 0;

    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      const speedMul = prefersReducedMotion ? 0 : 1;

      // 1. Subtle Camera Parallax with Smooth Damping
      currentCam.x += (targetCam.x - currentCam.x) * 0.04;
      currentCam.y += (targetCam.y - currentCam.y) * 0.04;
      camera.position.x = currentCam.x;
      camera.position.y = currentCam.y;
      camera.lookAt(0, 0, 0);

      // 2. Slow Ambient Breathing of the Glow Orbs
      const orbPulse = Math.sin(elapsed * 0.8) * 0.05;
      blueOrb.scale.setScalar(1 + orbPulse);
      cyanOrb.scale.setScalar(1 - orbPulse);
      blueOrb.position.y = 3.5 + Math.sin(elapsed * 0.4) * 0.3;
      cyanOrb.position.y = -3.2 + Math.cos(elapsed * 0.45) * 0.3;

      // 3. Particle Drift & Mouse Proximity Interaction
      const posAttr = pointsGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < POINT_COUNT; i++) {
        const p = particles[i];

        // Harmonic drift
        p.x = p.baseX + Math.sin(elapsed * p.speed + p.phase) * p.amp * speedMul;
        p.y = p.baseY + Math.cos(elapsed * (p.speed * 0.8) + p.phase) * p.amp * speedMul;
        p.z = p.baseZ + Math.sin(elapsed * 0.3 + p.phase) * (p.amp * 0.5) * speedMul;

        // Subtle mouse push/repulsion
        const dx = p.x - mouse3D.x;
        const dy = p.y - mouse3D.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 3.2) {
          const force = (1 - distToMouse / 3.2) * 0.45 * speedMul;
          p.x += (dx / (distToMouse || 1)) * force;
          p.y += (dy / (distToMouse || 1)) * force;
        }

        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;
      }
      posAttr.needsUpdate = true;

      // 4. Update Dynamic Interconnecting Constellation Lines
      const linePosAttr = linesGeo.attributes.position as THREE.BufferAttribute;
      const linePosArray = linePosAttr.array as Float32Array;
      let lineIdx = 0;

      for (let i = 0; i < POINT_COUNT && lineIdx < MAX_LINES; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < POINT_COUNT && lineIdx < MAX_LINES; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dSq = dx * dx + dy * dy + dz * dz;

          if (dSq < CONNECT_DIST * CONNECT_DIST) {
            const baseIdx = lineIdx * 6;
            linePosArray[baseIdx] = p1.x;
            linePosArray[baseIdx + 1] = p1.y;
            linePosArray[baseIdx + 2] = p1.z;
            linePosArray[baseIdx + 3] = p2.x;
            linePosArray[baseIdx + 4] = p2.y;
            linePosArray[baseIdx + 5] = p2.z;
            lineIdx++;
          }
        }
      }

      // Zero out unused line segments
      for (let k = lineIdx * 6; k < MAX_LINES * 6; k++) {
        linePosArray[k] = 0;
      }

      linePosAttr.needsUpdate = true;
      linesGeo.setDrawRange(0, lineIdx * 2);

      renderer.render(scene, camera);
    }
    animate();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);

      renderer.dispose();
      blueOrbGeo.dispose();
      blueOrbMat.dispose();
      cyanOrbGeo.dispose();
      cyanOrbMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      dotTexture.dispose();
      blueOrbTexture.dispose();
      cyanOrbTexture.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
