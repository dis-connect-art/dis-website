import styles from "../styles/SharedStyles.module.css";
import { useState, useRef, useEffect } from "react";

const PRODUCTS = {
  korvSingle: "Single scent inside basic Korrvu circular packaging = 140 Eur",
  korvCombo:
    "All three scents inside basic Korrvu circular packaging = 400 Eur",
  glebCombo: "All three scents inside the handmade Glebanite box = 480 Eur",
  book: "DIS- book = 65 Eur",
  fullCombo: "Glebanite box including all the scents and the book = 520 Eur",
};

const Connect = ({ router }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState(PRODUCTS.gleb);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

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
      {clickedImage ? (
        <div className="big-image">
          <img
            src={clickedImage.replace(".jpg", "-big.jpg")}
            alt={clickedImage.replace(".jpg", "").replace("/assets/products/")}
            onClick={() => setClickedImage(null)}
          />
        </div>
      ) : (
        <>
          <article className={styles.article}>connect</article>

          <div className="product-pics">
            <div>
              <img
                src="/assets/products/pr1.jpg"
                alt="product one"
                onClick={(e) => setClickedImage(e.target.src)}
              />
              <img
                src="/assets/products/bundle.jpg"
                alt="bundle"
                onClick={(e) => setClickedImage(e.target.src)}
              />
              <img
                src="/assets/products/book.jpg"
                alt="book"
                onClick={(e) => setClickedImage(e.target.src)}
              />
            </div>
            <div>
              <img
                src="/assets/products/discard.jpg"
                alt="discard"
                onClick={(e) => setClickedImage(e.target.src)}
              />
              <img
                src="/assets/products/discount.jpg"
                alt="discount"
                onClick={(e) => setClickedImage(e.target.src)}
              />
              <img
                src="/assets/products/glebanite.jpg"
                alt="glebanite"
                onClick={(e) => setClickedImage(e.target.src)}
              />
            </div>
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
                <option value="korvSingle">{PRODUCTS.korvSingle}</option>
                <option value="korvCombo">{PRODUCTS.korvCombo}</option>
                <option value="glebCombo">{PRODUCTS.glebCombo}</option>
                <option value="book">{PRODUCTS.book}</option>
                <option value="fullCombo">{PRODUCTS.fullCombo}</option>
              </select>
            </div>
            <textarea
              name="message"
              id="message"
              cols="1"
              rows="5"
              placeholder="type your message."
              onChange={(e) => setMessage(e.target.value.trim())}
            ></textarea>
            <button type="submit" disabled={isProcessing || isSuccess}>
              {isProcessing ? "Processing..." : "Make A Request"}
            </button>
            {error && <div className="error-box">{error}</div>}
          </form>
        </>
      )}

      <style jsx>{`
        .success-box {
          position: absolute;
          z-index: 1;
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
          flex-direction: column;
          margin-top: -2.5rem;
        }

        .product-pics div {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 1rem;
          width: 100%;
          height: 160px;
        }

        .product-pics img {
          width: 32%;
          object-fit: contain;
          border: 1px solid lightgray;
        }

        .big-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          z-index: 2;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .big-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        form {
          width: 60%;
          margin: 0 auto;
        }

        form * {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin-bottom: 1rem;
          font-size: 1rem;
          font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
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
          background: white;
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
          display: block;
          margin-left: auto;
          margin-right: 0;
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
            margin: 0.5rem auto;
          }

          .product-pics {
            margin-top: -0.5rem;
            margin-bottom: 0;
          }

          .product-pics div {
            margin-bottom: 0.5rem;
            height: 80px;
          }

          form * {
            width: 100%;
            font-size: 0.6rem;
            margin-bottom: 0.6rem;
          }

          input,
          textarea,
          select {
            padding: 0.5rem;
          }

          input,
          .select-wrapper {
            height: 2rem;
          }

          .select-wrapper::after {
            font-size: 0.5rem;
            right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Connect;
