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
        created three wearable scents:
        <br />
        <br />
        DIS-1 (Decay)
        <br />
        Notes: Angelica root absolute, costus root co2 extract, synthetic
        saffron, synthetic jasmine, castoreum, vanilla, plastic accord, ...
        <br /> <br />
        DIS-2 (Concrete) Notes: <br />
        Violet, lily-of-the-valley, galbanum, mushroom alcohol, ozone, sheer
        woods, musk
        <br /> <br />
        DIS-3 (Paradox) <br />
        Notes: Nagarmotha, Geranium, Camphor, Patchouli, Vetiver, Iris, Ozone
        <br />
        <br />
        These are available for purchase in a limited amount of handmade
        glebanite cases designed by{" "}
        <a
          href="https://www.instagram.com/francesca.gotti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Francesca Gotti
        </a>{" "}
        or simple Korrvu cardboard packaging.
      </article>
      <style jsx>{`
        article {
          width: 200px; /* needs to be thinner than styles.article */
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
