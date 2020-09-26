import styles from "../styles/SharedStyles.module.css";
import Link from "next/link";
// TODO: Buy

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>
        <a
          href="https://www.instagram.com/omer_pekji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Omer Ipekci
        </a>{" "}
        created three “perfumes”:
        <br />
        <br />
        DIS-1 (Decay)
        <br />
        DIS-2 (Concrete)
        <br />
        DIS-3 (Paradox)
        <br />
        <br />
        These are available for purchase as:
        <br />
        <br />
        <b>Display box</b>
        <br />
        All three perfumes in handmade case designed by{" "}
        <a
          href="https://www.instagram.com/francesca.gotti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesca Gotti
        </a>
        .
        <br />
        <br />
        650Eur, 15 Pieces
        <br />
        <Link href="/connect">
          <a>
            <span>BUY</span>
          </a>
        </Link>
        <br />
        <br />
        <b>Discount box</b>
        <br />
        All three perfumes in circular Korrvu packaging
        <br />
        <br />
        400 Eur, 30 Pieces
        <br />
        <Link href="/connect">
          <a>
            <span>BUY</span>
          </a>
        </Link>
        <br />
        <br />
        <b>Discard box</b>
        <br />
        One perfume in circular Korrvu packaging.
        <br />
        <br />
        160 Eur, 30 Pieces
        <br />
        <Link href="/connect">
          <a>
            <span>BUY</span>
          </a>
        </Link>
      </article>
      <style jsx>{`
        article {
          width: 220px;
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
