'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Background3D
 * A full-viewport, fixed, pointer-events-none Three.js scene that renders
 * continuously behind every section of the site.
 *
 * Visual language:
 *  - A liquidity grid: a wireframe plane that undulates like a market
 *    surface / financial terrain, built from a sine-wave displaced
 *    PlaneGeometry rendered as points + a fine wireframe.
 *  - Corporate node clusters: icosahedra and torus "rings" that drift
 *    slowly, representing startup ecosystems and marketing funnels.
 *  - Data streams: thin line segments connecting nearby nodes, redrawn
 *    each frame from live node positions.
 *  - Mouse parallax: camera eases toward the pointer position for a
 *    subtle parabolic tilt, without ever intercepting DOM events.
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
    scene.fog = new THREE.FogExp2(0x060913, 0.028);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.2, 11);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---------- Liquidity / financial data mesh ----------
    const gridWidth = 40;
    const gridDepth = 40;
    const gridSegX = 48;
    const gridSegY = 48;
    const planeGeo = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridSegX,
      gridSegY
    );
    planeGeo.rotateX(-Math.PI / 2.3);

    const basePositions = ((planeGeo.attributes.position as THREE.BufferAttribute).array as Float32Array).slice();

    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x2451c9,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const gridMesh = new THREE.Mesh(planeGeo, gridMaterial);
    gridMesh.position.y = -3.4;
    gridMesh.position.z = -4;
    scene.add(gridMesh);

    // A second, sparser point layer on the mesh for a "data point" feel
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(basePositions.slice(), 3)
    );
    const pointsMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const gridPoints = new THREE.Points(pointsGeo, pointsMat);
    gridPoints.rotation.copy(gridMesh.rotation);
    gridPoints.position.copy(gridMesh.position);
    scene.add(gridPoints);

    // ---------- Corporate node clusters ----------
    type Node = {
      mesh: THREE.Mesh | THREE.LineSegments;
      speed: number;
      radius: number;
      angle: number;
      axis: THREE.Vector3;
      baseY: number;
    };

    const nodes: Node[] = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const icoGeo = new THREE.IcosahedronGeometry(0.42, 0);
    const icoEdges = new THREE.EdgesGeometry(icoGeo);
    const ringGeo = new THREE.TorusGeometry(0.5, 0.012, 8, 48);

    const nodeCount = 16;
    for (let i = 0; i < nodeCount; i++) {
      const isRing = i % 3 === 0;
      let mesh: THREE.Mesh | THREE.LineSegments;

      if (isRing) {
        const mat = new THREE.MeshBasicMaterial({
          color: 0x3b82f6,
          transparent: true,
          opacity: 0.35,
        });
        mesh = new THREE.Mesh(ringGeo, mat);
      } else {
        const mat = new THREE.LineBasicMaterial({
          color: 0x60a5fa,
          transparent: true,
          opacity: 0.5,
        });
        mesh = new THREE.LineSegments(icoEdges, mat);
      }

      const radius = 3.2 + Math.random() * 5.5;
      const angle = Math.random() * Math.PI * 2;
      const baseY = (Math.random() - 0.5) * 4.5;

      mesh.position.set(
        Math.cos(angle) * radius,
        baseY,
        Math.sin(angle) * radius - 3
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = 0.6 + Math.random() * 1.1;
      mesh.scale.setScalar(scale);

      nodeGroup.add(mesh);
      nodes.push({
        mesh,
        speed: 0.05 + Math.random() * 0.08,
        radius,
        angle,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        baseY,
      });
    }

    // ---------- Data stream connectors ----------
    const maxConnections = 22;
    const streamGeo = new THREE.BufferGeometry();
    const streamPositions = new Float32Array(maxConnections * 2 * 3);
    streamGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(streamPositions, 3)
    );
    const streamMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.12,
    });
    const streamLines = new THREE.LineSegments(streamGeo, streamMat);
    scene.add(streamLines);

    function updateStreams() {
      const posAttr = streamGeo.attributes.position as THREE.BufferAttribute;
      let idx = 0;
      for (let i = 0; i < nodes.length && idx < maxConnections; i++) {
        const a = nodes[i].mesh.position;
        const b = nodes[(i + 3) % nodes.length].mesh.position;
        const dist = a.distanceTo(b);
        if (dist < 6.5) {
          posAttr.setXYZ(idx * 2, a.x, a.y, a.z);
          posAttr.setXYZ(idx * 2 + 1, b.x, b.y, b.z);
          idx++;
        }
      }
      // zero out unused slots
      for (let i = idx; i < maxConnections; i++) {
        posAttr.setXYZ(i * 2, 0, 0, 0);
        posAttr.setXYZ(i * 2 + 1, 0, 0, 0);
      }
      posAttr.needsUpdate = true;
    }

    // ---------- Mouse dynamics ----------
    const pointer = { x: 0, y: 0 };
    const targetCamOffset = { x: 0, y: 0 };
    const currentCamOffset = { x: 0, y: 0 };

    function onPointerMove(e: PointerEvent) {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
      targetCamOffset.x = pointer.x * 0.9;
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

    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      const speedMul = prefersReducedMotion ? 0 : 1;

      // Animate liquidity grid vertices (financial waveform)
      const posAttr = planeGeo.attributes.position as THREE.BufferAttribute;
      const ptsAttr = pointsGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < posAttr.count; i++) {
        const bx = basePositions[i * 3];
        const bz = basePositions[i * 3 + 2];
        const by = basePositions[i * 3 + 1];
        const wave =
          Math.sin(bx * 0.35 + elapsed * 0.6) * 0.35 +
          Math.cos(bz * 0.3 + elapsed * 0.45) * 0.3;
        const y = by + wave * speedMul;
        posAttr.setY(i, y);
        ptsAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;
      ptsAttr.needsUpdate = true;

      // Animate nodes: slow orbit + self rotation (startup ecosystem drift)
      nodes.forEach((n) => {
        n.angle += n.speed * 0.004 * speedMul;
        n.mesh.position.x = Math.cos(n.angle) * n.radius;
        n.mesh.position.z = Math.sin(n.angle) * n.radius - 3;
        n.mesh.position.y = n.baseY + Math.sin(elapsed * 0.4 + n.angle) * 0.4;
        n.mesh.rotateOnAxis(n.axis, 0.002 * speedMul);
      });
      updateStreams();

      // Mouse-reactive parabolic camera tilt (smooth easing)
      currentCamOffset.x += (targetCamOffset.x - currentCamOffset.x) * 0.03;
      currentCamOffset.y += (targetCamOffset.y - currentCamOffset.y) * 0.03;
      camera.position.x = currentCamOffset.x * 1.4;
      camera.position.y = 3.2 + currentCamOffset.y * 0.8;
      camera.lookAt(currentCamOffset.x * -0.6, 0, -2);

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
      planeGeo.dispose();
      pointsGeo.dispose();
      icoGeo.dispose();
      icoEdges.dispose();
      ringGeo.dispose();
      streamGeo.dispose();
      gridMaterial.dispose();
      pointsMat.dispose();
      streamMat.dispose();
      nodes.forEach((n) => {
        const mat = (n.mesh as THREE.Mesh).material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else (mat as THREE.Material)?.dispose();
      });
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
