import styles from "../styles/SharedStyles.module.css";
import Link from "next/link";

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>
        <a
          href="https://www.instagram.com/alfarom70/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesco Romero
        </a>{" "}
        created a photo book during this disconnected process as the visual
        layer of the collaboration.
        <br />
        <br />
        The book contains 82 images in 128 pages. Some of these images can be
        seen in{" "}
        <a
          href="https://www.instagram.com/disconnect_box/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dis-connect_box
        </a>
        <br />
        <br />
        Soft cover
        <br />
        Limited to 200 Pieces
      </article>
    </section>
  );
};

export default francescaGotti;
