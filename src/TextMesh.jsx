import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TextMesh = ({ position, text, ...props }) => {
  const textRef = useRef();

  // Use useEffect to create and update the text geometry
  useFrame(() => {
    const fontLoader = new THREE.FontLoader();
    fontLoader.load('path-to-your-font.json', (font) => {
      const textGeometry = new THREE.TextGeometry(text, {
        font: font,
        size: 0.3,
        height: 0.05,
        curveSegments: 12,
        bevelEnabled: false,
      });

      textGeometry.center();

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

      const mesh = new THREE.Mesh(textGeometry, textMaterial);
      mesh.position.set(position[0], position[1], position[2]);

      if (textRef.current) {
        textRef.current.geometry.dispose();
        textRef.current.material.dispose();
        textRef.current.geometry = textGeometry;
        textRef.current.material = textMaterial;
        textRef.current.needsUpdate = true;
      } else {
        textRef.current = mesh;
        props.parent.add(textRef.current);
      }
    });
  });

  return null; // Return null as we're managing the mesh in the three.js scene
};

export default TextMesh;
