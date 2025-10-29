"use client";

import React from "react";

export default function Star({ size = 8, color = "rgba(0,150,255,0.8)", top = "50%", left = "50%" }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 4}px ${size / 2}px ${color}`,
        filter: "blur(0.1px)",
      }}
    />
  );
}
