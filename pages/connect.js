import styles from "../styles/SharedStyles.module.css";
import { useState, useRef, useEffect } from "react";

const PRODUCTS = {
  gleb: "DIS-1,2,3 perfumes, (Glebanite) = X Eur",
  korv: "DIS-1,2,3 perfumes (Korrvu) = Z Eur",
  glebcombo: "DIS-1,2,3 perfumes, (Glebanite) + DIS Book = Y Eur",
  korvcombo: "DIS-1,2,3 perfumes (Korrvu) + DIS book = T Eur",
  perfone: "DIS-1 perfume = a Eur",
  perftwo: "DIS-2 perfume = b Eur",
  perfthree: "DIS-3 perfume = c Eur",
  book: "DIS Book = d Eur",
};

const francescaGotti = ({ router }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState(PRODUCTS.gleb);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    nameRef.current.style.border = "1px solid lightgray";
    setError("");
  }, [name]);

  useEffect(() => {
    emailRef.current.style.border = "1px solid lightgray";
    setError("");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!name) {
      setIsProcessing(false);
      setError("Name Required");
      nameRef.current.style.border = "1px solid red";
      return;
    }

    if (!email) {
      setIsProcessing(false);
      setError("Email Required");
      emailRef.current.style.border = "1px solid red";
      return;
    }

    fetch("/api/make-request", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ name, email, order, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setIsProcessing(false);
          setIsSuccess(true);
        } else {
          alert(
            "The request failed for an unknown reason! We are sorry for this. Please feel free to send us a message via dis.connect.art@fmail.com if you continue to experience this issue"
          );
          setIsProcessing(false);
        }
      })
      .catch((e) =>
        alert(
          "There was an error in sending your request! We are sorry for this. Please feel free to send us a message via dis.connect.art@fmail.com if you continue to experience this issue"
        )
      );
  };

  return (
    <section>
      <article className={styles.article}>connect</article>

      <div className="product-pics">
        <img src="/assets/product-book.jpg" alt="" />
        <img src="/assets/product-glebanite.jpg" alt="" />
        <img src="/assets/product-korrvu.jpg" alt="" />
      </div>

      {isSuccess && (
        <div className="success-box">
          <span
            onClick={() => {
              setIsSuccess(false);
              window.location.href = "/connect"; // refresh the page to reset all state
            }}
          >
            ✖︎
          </span>
          <h4>SUCCESS!</h4>
          <p>
            Thanks! Your request has been sent to{" "}
            <a href="mailto:dis.connect.art@gmail.com">
              dis.connect.art@gmail.com
            </a>
            ! We will get in touch soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value.trim())}
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
        />
        <div className="select-wrapper">
          <select
            className="select"
            name="order"
            id="order"
            onChange={(e) => setOrder(PRODUCTS[e.target.value])}
          >
            <option value="gleb">{PRODUCTS.gleb}</option>
            <option value="glebcombo">{PRODUCTS.glebcombo}</option>
            <option value="korv">{PRODUCTS.korv}</option>
            <option value="korvcombo">{PRODUCTS.korvcombo}</option>
            <option value="perfone">{PRODUCTS.perfone}</option>
            <option value="perftwo">{PRODUCTS.perftwo}</option>
            <option value="perfthree">{PRODUCTS.perfthree}</option>
            <option value="book">{PRODUCTS.book}</option>
          </select>
        </div>
        <textarea
          name="message"
          id="message"
          cols="1"
          rows="8"
          placeholder="type your message."
          onChange={(e) => setMessage(e.target.value.trim())}
        ></textarea>
        <button type="submit" disabled={isProcessing || isSuccess}>
          {isProcessing ? "Processing..." : "Make A Request"}
        </button>
        {error && <div className="error-box">{error}</div>}
      </form>

      <style jsx>{`
        .success-box {
          position: absolute;
          z-index: 1000;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          max-width: 90%;
          text-align: center;
          background: #fafafa;
          border: 1px solid black;
          padding: 2rem;
        }

        .success-box a {
          color: indianred;
        }

        .success-box h4 {
          margin-top: 0;
        }

        .success-box span {
          cursor: pointer;
          width: 20px;
          height: 20px;
          color: indianred;
          border: 1px solid indianred;
          border-radius: 50%;
          position: absolute;
          right: 1rem;
          top: 1rem;
        }

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
          font-size: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        input {
          width: calc(50% - 0.5rem);
          height: 2.5rem;
          padding: 1rem;
          border: 1px solid lightgray;
        }

        input[type="email"] {
          text-transform: lowercase;
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
          padding: 1rem;
        }

        button {
          cursor: pointer;
          width: calc(50% - 0.5rem);
          height: 2.5rem;
          border: none;
          background-color: black;
          color: white;
          float: right;
        }

        button:disabled {
          background-color: lightgray; /* lightpink */
          color: darkgray;
        }

        .error-box {
          font-weight: 600;
          color: indianred;
        }

        @media screen and (max-width: 480px) {
          article {
            margin: 4.5rem 0 1.5rem 0;
          }

          .product-pics,
          form {
            width: 90%;
            margin: 1rem auto;
          }

          form * {
            width: 100%;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default francescaGotti;
