import { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Circle from "../components/Circle";
import Navigation from "../components/Navigation";
import getConfig from "next/config";

const bgImageVars = {
  enter: (direction) => {
    let x = 0;
    if (direction === "next") x = "-100%";
    if (direction === "back") x = "100%";
    return {
      x: x,
    };
  },
  center: {
    x: 0,
  },
  exit: (direction) => {
    let x = 0;
    if (direction === "next") x = "100%";
    if (direction === "back") x = "-100%";
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

const { allRoutes } = getConfig().publicRuntimeConfig;

function MyApp({ Component, pageProps, router }) {
  const [routeIndex, setRouteIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    setRouteIndex(allRoutes.indexOf(router.route));
  }, [router.route]);

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
          setDirection("next");
        } else if (offset.y > swipeThreshold && routeIndex > 0) {
          newDirection = -1;
          setDirection("back");
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

      <AnimatePresence>
        <motion.img
          key={router.route}
          className="background-img"
          draggable="false"
          src={"assets/bg-" + router.route.replace("/", "") + ".jpg"}
          custom={direction}
          variants={bgImageVars}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween" }}
        ></motion.img>
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          draggable="false"
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
  );
}

export default MyApp;
