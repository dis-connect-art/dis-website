import Link from "next/link";
import getConfig from "next/config";
import { motion } from "framer-motion";

const { allRoutes } = getConfig().publicRuntimeConfig;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "tween",
    },
  },
};

const item = {
  hidden: { x: "-100%" },
  show: { x: 0 },
};

const Navigation = ({ route }) => {
  return (
    <nav>
      <motion.ul variants={container} initial="hidden" animate="show">
        <Link href={allRoutes[0]}>
          <motion.li variants={item}>
            <div
              className={
                route === allRoutes[0] ? "intro dot active-dot" : "intro dot"
              }
            ></div>
          </motion.li>
        </Link>
        <Link href={allRoutes[1]}>
          <motion.li
            variants={item}
            className={route === allRoutes[1] && "active"}
          >
            1
          </motion.li>
        </Link>
        <Link href={allRoutes[2]}>
          <motion.li
            variants={item}
            className={route === allRoutes[2] && "active"}
          >
            2
          </motion.li>
        </Link>
        <Link href={allRoutes[3]}>
          <motion.li
            variants={item}
            className={route === allRoutes[3] && "active"}
          >
            3
          </motion.li>
        </Link>
        <Link href={allRoutes[4]}>
          <motion.li
            variants={item}
            className={route === allRoutes[4] && "active"}
          >
            +
          </motion.li>
        </Link>
        <Link href={allRoutes[5]}>
          <motion.li variants={item}>
            <div
              className={
                route === allRoutes[5] ? "outro dot active-dot" : "outro dot"
              }
            ></div>
          </motion.li>
        </Link>
      </motion.ul>
      <style>{`
        nav {
          position: absolute;
          z-index: 1;
        }

        ul {
          margin: 1rem 0;
        }

        li {
          cursor: pointer;
          font-size: 2rem;
          display: flex;
          flex-direction: column;
          padding: 0.5rem 2rem;
        }

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .intro {
          background: yellow;
        }

        .outro {
          background: pink;
        }

        .active {
          color: red;
        }

        .active-dot {
          background: red;
        }

        @media screen and (max-width: 480px) {
          nav {
            width: 100%;
            text-align: center;
          }

          ul {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }

          li {
            font-size: 1.5rem;
            display: inline-block;
            padding: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
