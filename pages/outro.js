const francescaGotti = ({ router, device }) => {
  return (
    <section>
      <article>
        DIS- can also be found at @darklands_berlin & @avant_ist &
        @stefanosaccani
        <br />
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
            @Francesca_Gotti
            <br />
            @Gottistudio
          </p>
          <p>
            <b>Omer Ipekci</b>
            <br />
            <br />
            Artist & Perfumer
            <br />
            Istanbul
            <br />
            @Omer pekji
            <br />
            @PEKJI_PARFUM
          </p>
          <p>
            <b>Francesco Romero</b>
            <br />
            <br />
            Artist & Photographer
            <br />
            Somewhere in Italy
            <br />
            @alfarom70
            <br />
            @romeroimages_official
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
            margin: 5rem auto;
            min-height: 100vh;
            box-sizing: border-box;
          }

          div {
            display: block;
          }

          p {
            margin: 2rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
