import { motion, AnimatePresence } from "framer-motion";
import getConfig from "next/config";

const { allRoutes } = getConfig().publicRuntimeConfig;

const circleVariants = {
  initial: (direction) => {
    let y = 0;
    if (direction === "back") y = 200;
    if (direction === "next") y = -200;
    return {
      y: y,
    };
  },
  animate: {
    y: 0,
  },
  exit: (direction) => {
    let y = 0;
    if (direction === "back") y = -200;
    if (direction === "next") y = 200;
    return {
      y: y,
    };
  },
};

const legitRoutes = [allRoutes[0], allRoutes[1], allRoutes[2], allRoutes[3]];

const Circle = ({ direction, route }) => {
  let DIS = <h3>DIS-</h3>;
  if (route === allRoutes[3]) DIS = <img src="/assets/fg-3.png" />;

  let bgColor;
  switch (route) {
    case allRoutes[0]:
      bgColor = "transparent";
      break;
    case allRoutes[2]:
      bgColor = "pink";
      break;
    default:
      bgColor = "#e3e839";
  }

  return (
    <div
      className="circle"
      style={{
        display: legitRoutes.indexOf(route) != -1 ? "block" : "none",
        backgroundColor: bgColor,
      }}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={route}
          custom={direction}
          variants={circleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="circle-text"
          transition={{ type: "tween" }}
        >
          {DIS}
        </motion.div>
      </AnimatePresence>

      <style>{`
        .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          overflow: hidden;
        }
        
        .circle h3 {
          position: absolute;
          top: -25px;
          left: 0%;
          width: 100%;
          text-align: center;
          font-size: 5rem;
        }
        
        .circle img {
          position: absolute;
          width: 200px;
          height: 200px;
        }
        
        @media screen and (max-width: 480px) {
          .circle {
            position: fixed;
            /* top: calc(100vh - 80px - 1rem);
                left: calc(100vw - 80px - 1rem); */
            top: auto;
            left: auto;
            right: 1rem;
            bottom: 1rem;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            transform: translate(0, 0);
            z-index: 1;
            overflow: hidden;
          }
        
          .circle h3 {
            top: -0.7rem;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 2rem;
          }
        
          .circle img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Circle;
