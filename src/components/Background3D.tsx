"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Background3D — "Ascending Index"
 *
 * A cinematic, full-viewport WebGL scene built specifically around
 * marketing / finance / investment / startup-growth iconography:
 *
 *  1. GROWTH BARS — a row of animated bar-chart columns (market index /
 *     revenue growth), each breathing on its own offset so the whole
 *     row reads like a live trading terminal.
 *  2. INDEX LINE — a glowing curve traced across the top of the bars,
 *     redrawn every frame from live bar heights, like a stock index
 *     overlay chart.
 *  3. MOMENTUM PULSE — a bright point that continuously travels along
 *     the index line, reading as "capital in motion" / live momentum.
 *  4. DEAL NODES — orbiting icosahedra above the bars representing
 *     investment rounds / partnerships / marketing channels, each
 *     linked to the index line by a faint "signal" thread.
 *  5. MOUSE PARALLAX — camera eases toward the pointer for a subtle
 *     boardroom-tilt, never intercepting DOM clicks.
 *
 * Fully client-only (mounted via SceneCanvas with ssr:false).
 */
export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---------- Core scene setup ----------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060913, 0.032);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.6, 12.5);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---------- 1. GROWTH BARS (market index / revenue columns) ----------
    const BAR_COUNT = 28;
    const BAR_SPACING = 0.62;
    const BAR_WIDTH = 0.34;
    const totalWidth = (BAR_COUNT - 1) * BAR_SPACING;

    type Bar = {
      mesh: THREE.Mesh;
      baseHeight: number;
      phase: number;
      speed: number;
      x: number;
    };

    const bars: Bar[] = [];
    const barGroup = new THREE.Group();
    barGroup.position.set(0, -2.4, -2.5);
    scene.add(barGroup);

    const barGeo = new THREE.BoxGeometry(BAR_WIDTH, 1, BAR_WIDTH);
    barGeo.translate(0, 0.5, 0); // pivot at base so scale.y grows upward

    const colorLow = new THREE.Color(0x1b3f8f); // steel deep blue (#1b3f8f)
    const colorHigh = new THREE.Color(0x8fb4e8); // steel cyan/blue (#8fb4e8)

    for (let i = 0; i < BAR_COUNT; i++) {
      // Ascending growth trend across the row with realistic market wobble
      const trend = 1.1 + (i / BAR_COUNT) * 2.6;
      const baseHeight = trend + Math.sin(i * 0.9) * 0.35;

      const t = i / (BAR_COUNT - 1);
      const color = colorLow.clone().lerp(colorHigh, t);

      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.40,
      });
      const mesh = new THREE.Mesh(barGeo, mat);
      const x = i * BAR_SPACING - totalWidth / 2;
      mesh.position.x = x;
      mesh.scale.y = baseHeight;
      barGroup.add(mesh);

      // Thin edge outline per bar for crisp terminal chart lines
      const edges = new THREE.EdgesGeometry(barGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0x8fb4e8,
        transparent: true,
        opacity: 0.12,
      });
      const outline = new THREE.LineSegments(edges, edgeMat);
      outline.scale.y = baseHeight;
      outline.position.x = x;
      barGroup.add(outline);

      bars.push({
        mesh,
        baseHeight,
        phase: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.4,
        x,
      });
    }

    // ---------- 2. INDEX LINE (glowing trend curve above the bars) ----------
    const indexPoints: THREE.Vector3[] = bars.map(
      (b) => new THREE.Vector3(b.x, b.baseHeight + 0.35, 0)
    );
    const indexGeo = new THREE.BufferGeometry().setFromPoints(indexPoints);
    const indexMat = new THREE.LineBasicMaterial({
      color: 0x8fb4e8,
      transparent: true,
      opacity: 0.45,
    });
    const indexLine = new THREE.Line(indexGeo, indexMat);
    barGroup.add(indexLine);

    // Soft duplicate underneath for glow-halo effect
    const indexGlowMat = new THREE.LineBasicMaterial({
      color: 0x2f5fb8,
      transparent: true,
      opacity: 0.10,
    });
    const indexGlow = new THREE.Line(indexGeo.clone(), indexGlowMat);
    indexGlow.position.y = -0.03;
    barGroup.add(indexGlow);

    // ---------- 3. MOMENTUM PULSE (traveling point along the index) ----------
    const pulseGeo = new THREE.SphereGeometry(0.07, 16, 16);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.60,
    });
    const pulse = new THREE.Mesh(pulseGeo, pulseMat);
    barGroup.add(pulse);

    const pulseTrailGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const pulseTrailMat = new THREE.MeshBasicMaterial({
      color: 0x8fb4e8,
      transparent: true,
      opacity: 0.08,
    });
    const pulseTrail = new THREE.Mesh(pulseTrailGeo, pulseTrailMat);
    barGroup.add(pulseTrail);

    // ---------- 4. DEAL NODES (investment / marketing-channel markers) ----------
    type DealNode = {
      mesh: THREE.LineSegments;
      link: THREE.Line;
      angle: number;
      radius: number;
      height: number;
      speed: number;
      targetIndex: number;
    };

    const dealNodes: DealNode[] = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const icoGeo = new THREE.IcosahedronGeometry(0.28, 0);
    const icoEdges = new THREE.EdgesGeometry(icoGeo);

    const NODE_COUNT = 9;
    for (let i = 0; i < NODE_COUNT; i++) {
      const nodeMat = new THREE.LineBasicMaterial({
        color: 0x8fb4e8,
        transparent: true,
        opacity: 0.25,
      });
      const mesh = new THREE.LineSegments(icoEdges, nodeMat);

      const linkMat = new THREE.LineBasicMaterial({
        color: 0x2f5fb8,
        transparent: true,
        opacity: 0.07,
      });
      const linkGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]);
      const link = new THREE.Line(linkGeo, linkMat);

      nodeGroup.add(mesh);
      nodeGroup.add(link);

      dealNodes.push({
        mesh,
        link,
        angle: (i / NODE_COUNT) * Math.PI * 2,
        radius: 4.5 + Math.random() * 3.5,
        height: 2.5 + Math.random() * 2.2,
        speed: 0.06 + Math.random() * 0.05,
        targetIndex: Math.floor((i / NODE_COUNT) * BAR_COUNT),
      });
    }

    // ---------- Mouse dynamics (boardroom parallax tilt) ----------
    const pointer = { x: 0, y: 0 };
    const targetCamOffset = { x: 0, y: 0 };
    const currentCamOffset = { x: 0, y: 0 };

    function onPointerMove(e: PointerEvent) {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
      targetCamOffset.x = pointer.x * 1.1;
      targetCamOffset.y = -pointer.y * 0.5;
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // ---------- Resize handling ----------
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener("resize", onResize);

    // ---------- Visibility handling (pause when tab hidden) ----------
    let isVisible = true;
    function onVisibility() {
      isVisible = document.visibilityState === "visible";
    }
    document.addEventListener("visibilitychange", onVisibility);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();
    let rafId = 0;
    const linkPos = new Float32Array(6);

    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      const speedMul = prefersReducedMotion ? 0 : 1;

      // --- Animate growth bars: breathing heights around an upward trend ---
      const indexPos = indexGeo.attributes.position as THREE.BufferAttribute;
      const glowPos = indexGlow.geometry.attributes
        .position as THREE.BufferAttribute;

      bars.forEach((b, i) => {
        const wobble =
          Math.sin(elapsed * b.speed + b.phase) * 0.28 * speedMul;
        const h = Math.max(0.3, b.baseHeight + wobble);
        b.mesh.scale.y = h;
        // matching outline is the next child after the mesh (2 per bar)
        const outline = barGroup.children[i * 2 + 1] as THREE.LineSegments;
        outline.scale.y = h;

        indexPos.setXYZ(i, b.x, h + 0.35, 0);
        glowPos.setXYZ(i, b.x, h + 0.35, 0);
      });
      indexPos.needsUpdate = true;
      glowPos.needsUpdate = true;

      // --- Momentum pulse traveling along the index line ---
      const cycle = 6; // seconds per full pass
      const t = speedMul === 0 ? 0.5 : (elapsed % cycle) / cycle;
      const floatIdx = t * (BAR_COUNT - 1);
      const i0 = Math.floor(floatIdx);
      const i1 = Math.min(i0 + 1, BAR_COUNT - 1);
      const frac = floatIdx - i0;
      const p0 = new THREE.Vector3(
        indexPos.getX(i0),
        indexPos.getY(i0),
        indexPos.getZ(i0)
      );
      const p1 = new THREE.Vector3(
        indexPos.getX(i1),
        indexPos.getY(i1),
        indexPos.getZ(i1)
      );
      const pulsePos = p0.lerp(p1, frac);
      pulse.position.copy(pulsePos);
      pulseTrail.position.copy(pulsePos);
      const pulseScale = 1 + Math.sin(elapsed * 4) * 0.15;
      pulseTrail.scale.setScalar(pulseScale);

      // --- Deal nodes: slow orbit above the index, linked by signal threads ---
      dealNodes.forEach((n) => {
        n.angle += n.speed * 0.01 * speedMul;
        const x = Math.cos(n.angle) * n.radius;
        const z = Math.sin(n.angle) * n.radius - 2.5;
        const y = n.height + Math.sin(elapsed * 0.5 + n.angle) * 0.3;
        n.mesh.position.set(x, y, z);
        n.mesh.rotation.x += 0.003 * speedMul;
        n.mesh.rotation.y += 0.004 * speedMul;

        // link line to its target bar tip on the index
        const targetX = indexPos.getX(n.targetIndex);
        const targetY = indexPos.getY(n.targetIndex);
        linkPos[0] = x;
        linkPos[1] = y;
        linkPos[2] = z;
        linkPos[3] = targetX;
        linkPos[4] = targetY;
        linkPos[5] = 0;
        const linkAttr = n.link.geometry.attributes.position as THREE.BufferAttribute;
        linkAttr.copyArray(linkPos);
        linkAttr.needsUpdate = true;
      });

      // --- Mouse-reactive boardroom camera tilt ---
      currentCamOffset.x += (targetCamOffset.x - currentCamOffset.x) * 0.035;
      currentCamOffset.y += (targetCamOffset.y - currentCamOffset.y) * 0.035;
      camera.position.x = currentCamOffset.x * 1.6;
      camera.position.y = 2.6 + currentCamOffset.y * 0.9;
      camera.lookAt(currentCamOffset.x * -0.5, 0.6, -2);

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
      barGeo.dispose();
      icoGeo.dispose();
      icoEdges.dispose();
      pulseGeo.dispose();
      pulseTrailGeo.dispose();
      indexGeo.dispose();
      indexGlow.geometry.dispose();
      bars.forEach((b) => (b.mesh.material as THREE.Material).dispose());
      dealNodes.forEach((n) => {
        (n.mesh.material as THREE.Material).dispose();
        n.link.geometry.dispose();
        (n.link.material as THREE.Material).dispose();
      });
      indexMat.dispose();
      indexGlowMat.dispose();
      pulseMat.dispose();
      pulseTrailMat.dispose();
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
