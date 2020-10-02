import styles from "../styles/SharedStyles.module.css";

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>
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
        </a>
        <br />
        =
        <br />
        An evidence of DIS to be isolated forever
        <br />
        <br />
        .
        <br />
        <br />
        Francesca also created 15 glebanite homes for the fragrances, complete
        with a huge roll of paper.
      </article>
      <style jsx>{`
        article {
          width: 150px; /* needs to be thinner than styles.article */
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
