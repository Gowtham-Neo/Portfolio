import React from "react";
import profile from "../assets/Me3.jpg";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function IdCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotatey = useTransform(y, [-100, 100], [30, -30]);
  const rotatex = useTransform(x, [100, -100], [-30, 30]);

  return (
    <div className="flex items-center justify-center md:mr-10 md:ml-40">
      <div style={{ perspective: 2000 }}>
        <motion.div
          style={{ x, y, rotatex, rotatey, z: 100 }}
          drag
          dragElastic={0.12}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="relative items-center justify-center w-11/12 py-2 ml-3 border-2 border-black rounded-lg cursor-grab min-h-80 bg-zinc-300 md:w-full"
        >
          <div className="w-full h-auto px-4">
            <h1 className="flex justify-around font-serif text-xl font-bold text-violet-600">
              HINDUSTHAN
            </h1>
            <p className="flex justify-center text-xs font-semibold">
              COLLEGE OF ENGINEERING & TECH.
            </p>
            <p className="flex justify-center text-xs font-semibold">
              COIMBATORE -641 032
            </p>
            <p className="flex justify-center text-xs italic text-green-700">
              (An Autonomous Institution)
            </p>
          </div>
          <div className="mt-2">
            <h2 className="font-mono text-center text-white border border-none rounded bg-amber-500 rounded-ss-full rounded-ee-full ">
              STUDENT ID CARD
            </h2>
          </div>
          <div className="flex items-center justify-center px-4 m-2 mb-2">
            <img
              src={profile}
              alt="Image"
              className="w-1/2 border-2 border-black"
            />
          </div>
          <div className="px-4 md:mb-10">
            <h2 className="flex justify-center mt-1 font-serif text-base font-bold text-violet-500">
              GOWTHAM S
            </h2>
            <p className="flex justify-center text-base font-semibold">
              720721110069
            </p>
            <p className="flex justify-center text-sm font-semibold">
              B.TECH - IT
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
