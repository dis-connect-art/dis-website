import styles from "../styles/SharedStyles.module.css";

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>
        @Francesco Romero created a photo book during this disconnected process
        as the visual layer of the collaboration.
        <br />
        <br />
        The book contains 82 images in 128 pages. Some of these images can be
        seen in @dis-connect_box
        <br />
        <br />
        DIS-BOOK
        <br />
        <br />
        A4, 100gsm, archival offset printing.
        <br />
        <br />
        120 Eur, 200 Pieces
        <br />
        <br />
        <span>BUY</span>
      </article>
      <style jsx>{`
        article {
          width: 260px; /* overwrite stdArticle width */
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
