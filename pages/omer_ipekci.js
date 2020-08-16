import styles from "../styles/SharedStyles.module.css";

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>
        @Omer Ipekci created three “perfumes”:
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
        All three perfumes in handmade case designed by @Francesca Gotti.
        <br />
        <br />
        650Eur, 15 Pieces
        <br />
        <span>BUY</span>
        <br />
        <br />
        <b>Discount box</b>
        <br />
        All three perfumes in circular Korrvu packaging
        <br />
        <br />
        400 Eur, 30 Pieces
        <br />
        <span>BUY</span>
        <br />
        <br />
        <b>Discard box</b>
        <br />
        One perfume in circular Korrvu packaging.
        <br />
        <br />
        160 Eur, 30 Pieces
        <br />
        <span>BUY</span>
      </article>
      <style jsx>{`
        article {
          width: 220px;
        }

        @media screen and (max-width: 480px) {
          article {
            box-sizing: border-box;
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
