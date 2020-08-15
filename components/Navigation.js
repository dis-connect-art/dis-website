import Link from "next/link";
import getConfig from "next/config";

const { allRoutes } = getConfig().publicRuntimeConfig;

const Navigation = ({ route }) => {
  return (
    <nav>
      <ul>
        <Link href={allRoutes[0]}>
          <li>
            <div
              className={
                route === allRoutes[0]
                  ? "intro circle active-dot"
                  : "intro circle"
              }
            ></div>
          </li>
        </Link>
        <Link href={allRoutes[1]}>
          <li className={route === allRoutes[1] && "active"}>1</li>
        </Link>
        <Link href={allRoutes[2]}>
          <li className={route === allRoutes[2] && "active"}>2</li>
        </Link>
        <Link href={allRoutes[3]}>
          <li className={route === allRoutes[3] && "active"}>3</li>
        </Link>
        <Link href={allRoutes[4]}>
          <li className={route === allRoutes[4] && "active"}>+</li>
        </Link>
        <Link href={allRoutes[5]}>
          <li>
            <div
              className={
                route === allRoutes[5]
                  ? "outro circle active-dot"
                  : "outro circle"
              }
            ></div>
          </li>
        </Link>
      </ul>
      <style jsx>{`
        nav {
          position: absolute;
          z-index: 1;
        }

        li {
          cursor: pointer;
          font-size: 2rem;
          display: flex;
          flex-direction: column;
          padding: 0.25rem 2rem;
        }

        .circle {
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
          border: 3px solid red;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
