"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

function EggLogo({ className }: Props) {
  const [state, setState] = useState("inactive");

  useEffect(() => {
    console.log("state changed", state);
  }, [state]);

  const variantsTop = {
    active: {
      scale: 1.1,
      y: -10,
    },
    inactive: {
      scale: 1,
      y: 0,
    },
  };
  const variantsBot = {
    active: {
      scale: 1.1,
      y: 10,
    },
    inactive: {
      scale: 1,
      y: 0,
    },
  };

  return (
    <motion.svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      className={cn("cursor-pointer", className)}
      onHoverStart={() => setState("active")}
      onHoverEnd={() => setState("inactive")}
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotateZ: [0, 7, 0, -7, 0, 7, 0, -7, 0, 7, 0, -7, 0],
        transition: { 
          duration: 1,       // Total shake duration of 1 second
          repeat: Infinity,
          repeatDelay: 3,    // 5-second pause between shakes
          ease: "linear",
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] // Control timing of rotation keyframes
        }
      }}
    >
      <motion.path
        d="M48 27C56.9703 27 64.1933 38.8531 66.3438 48.3994C64.022 50.8426 60.205 51.0974 57.5811 48.9873L57.3232 48.7686L56.1484 47.7207C52.5411 44.5021 47.0578 44.7486 43.75 48.1982L43.4365 48.542C41.8701 50.3526 39.2405 50.7723 37.1963 49.5684L37.001 49.4463L30.5322 45.2227C33.397 36.4162 40.0047 27 48 27Z"
        fill="#FF5F1F"
        variants={variantsTop}
        animate={state}
      />
      <motion.path
        d="M34.8145 52.7959L35.1689 53.0156C38.8685 55.1943 43.627 54.4359 46.4619 51.1592L46.6348 50.9688C48.4624 49.0629 51.4922 48.9269 53.4854 50.7051L54.6602 51.7529L55.0762 52.1064C58.5472 54.8982 63.3087 55.1274 66.9814 52.9551C66.9921 53.2116 67 53.4637 67 53.7109C66.9999 63.3843 57.8838 70 48 70C38.1162 70 29.0001 63.3843 29 53.7109C29 52.3629 29.1601 50.8717 29.4648 49.3037L34.8145 52.7959Z"
        fill="black"
        variants={variantsBot}
        animate={state}
      />
    </motion.svg>
  );
}

export default EggLogo;
