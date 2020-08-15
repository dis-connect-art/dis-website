import { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Circle from "../components/Circle";
import Navigation from "../components/Navigation";
import getConfig from "next/config";

const mainVariants = {
  enter: (direction) => {
    let x = 0;
    if (direction > 0) x = 100;
    if (direction < 0) x = -100;
    return {
      x: x,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    let x = 0;
    if (direction > 0) x = 1000;
    if (direction < 0) x = -1000;
    return {
      x: x,
      opacity: 0,
    };
  },
};

const { allRoutes } = getConfig().publicRuntimeConfig;

// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
// const swipeConfidenceThreshold = 5000;
// const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

function MyApp({ Component, pageProps, router }) {
  const [history, setHistory] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setHistory((prevHistory) => [...prevHistory, router.route]);
  }, [router.route]);

  useEffect(() => {
    let currentRouteIndex = allRoutes.indexOf(router.route);
    let lastRouteIndex = currentRouteIndex;
    if (history.length > 1)
      lastRouteIndex = allRoutes.indexOf(history[history.length - 2]);

    if (currentRouteIndex === lastRouteIndex) setDirection(0);
    if (currentRouteIndex > lastRouteIndex) setDirection(1);
    if (currentRouteIndex < lastRouteIndex) setDirection(-1);

    setRouteIndex(currentRouteIndex);
  }, [history]);

  console.log("main direction ", direction);
  return (
    <motion.main
      className="main"
      drag="true"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset }) => {
        let newDirection;
        let swipeThreshold = 100;

        if (offset.y < -swipeThreshold && routeIndex < allRoutes.length - 1) {
          newDirection = +1;
        } else if (offset.y > swipeThreshold && routeIndex > 0) {
          newDirection = -1;
        }

        if (newDirection) {
          let newRouteIndex = routeIndex + newDirection;
          router.push(allRoutes[newRouteIndex]);
        }
      }}
    >
      <Head>
        <title>Disproof</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation route={router.route}></Navigation>

      <Circle direction={direction} route={router.route} />

      <AnimatePresence initial={false}>
        <motion.img
          key={router.route}
          className="background-img"
          draggable="false"
          src={"assets/bg-" + router.route.replace("/", "") + ".jpg"}
          custom={direction}
          variants={mainVariants}
          initial="enter"
          animate="center"
          exit="exit"
          // transition={{
          //   x: { type: "spring", stiffness: 300, damping: 200 },
          //   opacity: { duration: 1 },
          //   duration: 1,
          // }}
        ></motion.img>
        <Component {...pageProps} router={router} />
      </AnimatePresence>
    </motion.main>
  );
}

export default MyApp;
