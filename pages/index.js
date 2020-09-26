import styles from "../styles/SharedStyles.module.css";

export default function Home({ router }) {
  return (
    <section>
      <article className={styles.article}>
        In 2019
        <br />
        <br />
        <a
          href="https://www.instagram.com/alfarom70/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesco Romero
        </a>
        <br />
        <a
          href="https://www.instagram.com/francesca.gotti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesca Gotti
        </a>
        <br />
        and
        <br />
        <a
          href="https://www.instagram.com/omer_pekji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Omer Ipekci
        </a>
        <br />
        <br />
        talked to each other extensively about something without resorting to
        words, and with barriers of distance, language, medium and confusion
        between them. The only agreed upon concept was disconnection.
        <br />
        <br />
        Parts of the process can be seen at{" "}
        <a
          href="https://www.instagram.com/disconnect_box/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dis-connect_box
        </a>
      </article>
      <style jsx>{`
        article {
          width: 220px;
        }
      `}</style>
    </section>
  );
}
