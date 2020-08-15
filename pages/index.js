import Link from "next/link";
import Navigation from "../components/Navigation";

// TODO: Change the icon in the head

export default function Home({ router }) {
  return (
    <section>
      <article>
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
          font-weight: 500;
          margin: 1rem 6rem;
        }
      `}</style>
    </section>
  );
}
