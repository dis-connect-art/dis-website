import styles from "../styles/SharedStyles.module.css";

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>
        DIS-PROOF
        <br />
        <br />
        <a
          href="https://www.instagram.com/francesca.gotti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesca Gotti
        </a>{" "}
        created an object of proof. A sealed double glazed window containing:{" "}
        <br />
        <br /> Archival prints of the three photos by{" "}
        <a
          href="https://www.instagram.com/alfarom70/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesco Romero
        </a>{" "}
        that served as a starting point for the project. <br />+ <br />
        The sketches of the three scents made by{" "}
        <a
          href="https://www.instagram.com/omer_pekji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Omer Ipekci
        </a>{" "}
        inspired by these photos <br />=<br />
        DIS-PROOF An evidence to be stored in Boros Berlin.
        <br />
        <br />
        <span>NEVER BEEN IN STOCK</span>
      </article>
      <style jsx>{`
        article {
          width: 150px;
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
