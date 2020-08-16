import styles from "../styles/SharedStyles.module.css";

export default function Home({ router }) {
  return (
    <section>
      <article className={styles.article}>
        In 2019
        <br />
        <br />
        @Francesco Romero
        <br />
        @Francesca Gotti
        <br />
        and
        <br />
        @Omer Ipekci
        <br />
        <br />
        talked to each other extensively about something without resorting to
        words, and with barriers of distance, language, medium and confusion
        between them. The only agreed upon concept was disconnection.
        <br />
        <br />
        Parts of the process can be seen at @disconnect_box
      </article>
      <style jsx>{`
        article {
          width: 220px;
        }
      `}</style>
    </section>
  );
}
