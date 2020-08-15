import { motion, AnimatePresence } from "framer-motion";

const circleVariants = {
  initial: (direction) => {
    let y = 0;
    if (direction > 0) y = 100;
    if (direction < 0) y = -100;
    return {
      y: y,
      opacity: 0,
    };
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    let y = 0;
    if (direction > 0) y = -100;
    if (direction < 0) y = 100;
    return {
      y: y,
      opacity: 0,
    };
  },
};

const Circle = ({ direction, route }) => {
  console.log("circle direction ", direction);
  let DIS = <h3>DIS-</h3>;
  if (route === "/francesco-romero") DIS = <img src="/assets/fg-3" />;

  let bgColor;
  switch (route) {
    case "/":
      bgColor = "transparent";
      break;
    case "/omer-ipekci":
      bgColor = "pink";
      break;
    case "/francesca-gotti":
    case "/francesco-romero":
    default:
      bgColor = "yellow";
  }

  return (
    <div id="circle" style={{ backgroundColor: bgColor }}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={route}
          custom={direction}
          variants={circleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="circle-text"
        >
          {DIS}
        </motion.div>
      </AnimatePresence>

      <style>{`
        #circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;

        }

        h3, img {
            position: absolute;
            top: -25px;
            left: 0%;
        }

        h3 {
            width: 100%;
            text-align: center;
            font-size: 5rem;
          }
      `}</style>
    </div>
  );
};

export default Circle;
