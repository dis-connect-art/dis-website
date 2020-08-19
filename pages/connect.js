import styles from "../styles/SharedStyles.module.css";

const francescaGotti = ({ router }) => {
  return (
    <section>
      <article className={styles.article}>connect</article>

      <div className="product-pics">
        <img src="/assets/product-book.jpg" alt="" />
        <img src="/assets/product-glebanite.jpg" alt="" />
        <img src="/assets/product-korrvu.jpg" alt="" />
      </div>

      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <div className="select-wrapper">
          <select className="select" name="order" id="order">
            <option value="">
              DIS-1,2,3 perfumes, (Glebanite) = [ X Eur ]
            </option>
            <option value="">
              DIS-1,2,3 perfumes, (Glebanite) + DIS Book = [ Y Eur ]
            </option>
            <option value="">DIS-1,2,3 perfumes (Korrvu) = [ Z Eur ]</option>
            <option value="">
              DIS-1,2,3 perfumes (Korrvu) + DIS book = [ T Eur ]
            </option>
            <option value="">DIS-1 perfume = [ a Eur ]</option>
            <option value="">DIS-2 perfume = [ b Eur ]</option>
            <option value="">DIS-3 perfume = [ c Eur ]</option>
            <option value="">DIS Book = [ d Eur ]</option>
          </select>
        </div>
        <textarea name="message" id="message" cols="1" rows="15"></textarea>
        <button>Make A Request</button>
      </form>

      <style jsx>{`
        .product-pics {
          width: 60%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          margin-top: -2.5rem;
        }

        .product-pics img {
          width: 32%;
          border: 1px solid lightgray;
        }

        form {
          width: 60%;
          margin: 2rem auto;
        }

        form * {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin-bottom: 1rem;
        }

        input {
          width: calc(50% - 0.5rem);
          height: 2.5rem;
          padding: 1rem;
          border: 1px solid lightgray;
        }

        input:first-of-type {
          margin-right: 1rem;
        }

        .select-wrapper {
          width: 100%;
          height: 2.5rem;
          border: 1px solid lightgray;
          position: relative;
        }

        .select-wrapper::after {
          content: "▼";
          font-size: 1rem;
          position: absolute;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
        }

        select {
          border: none;
          width: 100%;
          height: 100%;
          padding: 0 1rem;
        }

        textarea {
          width: 100%;
          border: 1px solid lightgray;
        }

        button {
          width: calc(50% - 0.5rem);
          height: 2.5rem;
          border: none;
          background-color: black;
          color: white;
          float: right;
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
