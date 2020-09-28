import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Circle from "../components/Circle";
import Navigation from "../components/Navigation";
import getConfig from "next/config";

// TODO: Connect-mobile
// TODO: Tablet styling
// TODO: Links
// TODO: Arrows?

const bgImageVars = {
  enter: (direction) => {
    let x = 0;
    if (direction === "back") x = "-100%";
    if (direction === "next") x = "100%";
    return {
      x: x,
    };
  },
  center: {
    x: 0,
  },
  exit: (direction) => {
    let x = 0;
    if (direction === "back") x = "100%";
    if (direction === "next") x = "-100%";
    return {
      x: x,
    };
  },
};

const mainVars = {
  enter: (direction) => {
    let x = 0;
    if (direction === "next") x = -5;
    if (direction === "back") x = 5;
    return {
      x: x,
    };
  },
  center: {
    x: 0,
  },
  exit: (direction) => {
    let x = 0;
    if (direction === "next") x = 5;
    if (direction === "back") x = -5;

    return {
      x: x,
      opacity: 0,
    };
  },
};

const { allRoutes, breakpoints } = getConfig().publicRuntimeConfig;

let bgColors = {
  [allRoutes[0]]: "#e1e1e1",
  [allRoutes[1]]: "#e1e1e1",
  [allRoutes[2]]: "#e3e839",
  [allRoutes[3]]: "#ff8cab",
  [allRoutes[4]]: "#ffffff",
  [allRoutes[5]]: "#e1e1e1",
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function MyApp({ Component, pageProps, router }) {
  const [routeIndex, setRouteIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const windowSize = useWindowSize();
  const [device, setDevice] = useState("mobile");
  const yScrollContainer = useRef();

  useEffect(() => {
    if (windowSize.width < breakpoints.mobile) {
      setDevice("mobile");
    } else if (windowSize.width < breakpoints.tablet) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  }, [windowSize]);

  useEffect(() => {
    setRouteIndex(allRoutes.indexOf(router.route));
  }, [router.route]);

  let bgImgFolder = device === "mobile" ? "/mobile-bg" : "/bg";
  let bgImgName = "/i-" + router.route.replace("/", "") + ".png";
  let bgImgSrc = "assets" + bgImgFolder + bgImgName;
  return (
    <div ref={yScrollContainer}>
      <Head>
        <title>Disproof</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Circle draggable={false} direction={direction} route={router.route} />

      <motion.main
        style={{ backgroundColor: bgColors[router.route] }}
        className="main"
        pan="y"
        onPan={(e, { offset }) => {
          document.body.scrollBy(0, -offset.y);
        }}
        drag="true"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onPanEnd={(e, { offset }) => {
          let newDirection;
          let swipeThreshold = 80;

          if (offset.x < -swipeThreshold && routeIndex < allRoutes.length - 1) {
            newDirection = +1;
            setDirection("next");
          } else if (offset.x > swipeThreshold && routeIndex > 0) {
            newDirection = -1;
            setDirection("back");
          }

          if (newDirection) {
            let newRouteIndex = routeIndex + newDirection;
            router.push(allRoutes[newRouteIndex]);
          }
        }}
      >
        <Navigation draggable={false} route={router.route}></Navigation>

        <AnimatePresence>
          <motion.div
            key={router.route}
            className="background-div"
            draggable={false}
            custom={direction}
            variants={bgImageVars}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween" }}
          >
            <img
              draggable={false}
              className={router.route === "/outro" ? "bg-cover" : "bg-contain"}
              src={bgImgSrc}
              alt="background image"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            draggable={false}
            custom={direction}
            variants={mainVars}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween" }}
          >
            <Component {...pageProps} router={router} />
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

export default MyApp;
