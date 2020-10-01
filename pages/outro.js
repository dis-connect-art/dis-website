const francescaGotti = ({ router, device }) => {
  return (
    <section>
      <article>
        DIS- was created by:
        <div>
          <p>
            <b>Francesca Gotti</b>
            <br />
            <br />
            Artist & Designer
            <br />
            Parma
            <br />
            <a
              href="https://www.instagram.com/francesca.gotti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @francesca.gotti
            </a>
            <br />
            <a
              href="https://www.instagram.com/gottistudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @gottistudio
            </a>
          </p>
          <p>
            <b>Omer Ipekci</b>
            <br />
            <br />
            Artist & Perfumer
            <br />
            Istanbul
            <br />
            <a
              href="https://www.instagram.com/omer_pekji/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @omer_pekji
            </a>
            <br />
            <a
              href="https://www.instagram.com/pekji_parfum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pekji_parfum
            </a>
          </p>
          <p>
            <b>Francesco Romero</b>
            <br />
            <br />
            Artist & Photographer
            <br />
            Somewhere in Italy
            <br />
            <a
              href="https://www.instagram.com/alfarom70/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alfarom70
            </a>
            <br />
            <a
              href="https://www.instagram.com/romeroimages_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              @romeroimages_official
            </a>
          </p>
        </div>
      </article>
      <style jsx>{`
        article {
          padding: 3rem 0 0 10rem;
          width: 800px;
        }

        div {
          margin-top: 1em;
          display: flex;
          justify-content: space-between;
        }

        @media screen and (max-width: 480px) {
          article {
            width: 100%;
            padding: 0 2.5rem;
            margin: 4rem auto;
            font-size: 0.8rem;
            line-height: 1rem;
          }

          div {
            display: block;
          }

          p {
            margin: 1rem 0;
          }
        }

        @media screen and (min-height: 620px) {
          article {
            width: 100%;
            padding: 0 2.5rem;
            margin: 5rem auto;
            font-size: 0.9rem;
            line-height: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
