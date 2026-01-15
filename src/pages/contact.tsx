import AnimatedLetters from "components/AnimatedLetters";
import React, { useState, useEffect, useRef } from "react";
import "styles/contact.scss";
import Map, { Marker } from "react-map-gl";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "Contact me".split("");

  const formRef = useRef(null);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); // success | error

  useEffect(() => {
    const t = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      // Build a lightweight, safe form payload (works with emailjs.sendForm)
      const tmpForm = document.createElement("form");

      const fullNameInput = document.createElement("input");
      fullNameInput.setAttribute("type", "text");
      fullNameInput.setAttribute("name", "user_name");
      fullNameInput.setAttribute("value", inputRef1.current?.value || "");

      const emailInput = document.createElement("input");
      emailInput.setAttribute("type", "email");
      emailInput.setAttribute("name", "user_email");
      emailInput.setAttribute("value", inputRef2.current?.value || "");

      const messageInput = document.createElement("textarea");
      messageInput.setAttribute("name", "message");
      messageInput.innerText = inputRef3.current?.value || "";

      tmpForm.appendChild(fullNameInput);
      tmpForm.appendChild(emailInput);
      tmpForm.appendChild(messageInput);

      await emailjs.sendForm(
        "service_n9df2c9",
        "template_69scyjd",
        tmpForm,
        "Zvmly1ZZ2GET0jjOx"
      );

      setStatus({
        type: "success",
        message: "Thanks — your message has been sent. I’ll get back to you soon.",
      });

      if (inputRef1.current) inputRef1.current.value = "";
      if (inputRef2.current) inputRef2.current.value = "";
      if (inputRef3.current) inputRef3.current.value = "";
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong while sending. Please try again in a moment.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact__left">
        <span className="tag" style={{ padding: "0rem" }}>
          &lt;body&gt;
        </span>

        <h1 className="about__headingPrimary">
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>

        <p className="contact__description">
          I’m currently open to <strong>full-time</strong> as well as{" "}
          <strong>part-time</strong> opportunities — including high-impact roles
          where I can own systems end-to-end, lead engineering execution, and ship
          production-grade products. If you have a role, a project, or a
          collaboration in mind, feel free to reach out using the form below.
        </p>

        {/* small pro section (keeps overall style, adds clarity) */}
        <div className="contact__description" style={{ marginTop: "1.2rem" }}>
          <strong>Fastest ways to collaborate:</strong>
          <ul className="about__skillsList" style={{ marginTop: "0.75rem" }}>
            <li className="about__skillsItems">Full-time / Part-time engineering roles</li>
            <li className="about__skillsItems">Consulting on backend scale, Postgres, infra &amp; security</li>
            <li className="about__skillsItems">Mobile + web delivery (Android/iOS + React/Next.js)</li>
          </ul>
        </div>

        <div className="form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form__group">
              <input
                name="user_name"
                ref={inputRef1}
                type="text"
                className="form__input"
                id="name"
                placeholder="Full Name"
                required
                autoComplete="name"
              />
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
            </div>

            <div className="form__group">
              <input
                type="email"
                ref={inputRef2}
                name="user_email"
                className="form__input"
                id="email"
                placeholder="Email Address"
                required
                autoComplete="email"
              />
              <label htmlFor="email" className="form__label">
                Email Address
              </label>
            </div>

            <div className="form__group">
              <textarea
                name="message"
                ref={inputRef3}
                className="form__input"
                id="message"
                placeholder="Message"
                required
              />
              <label htmlFor="message" className="form__label">
                Message
              </label>
            </div>

            {/* status line (no major style changes, just helpful UX) */}
            {status.message ? (
              <p
                className="contact__description"
                style={{
                  marginTop: "0.75rem",
                  marginBottom: "0.75rem",
                  opacity: 0.95,
                }}
              >
                {status.type === "success" ? "✅ " : "⚠️ "}
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              value="Send"
              className="intro__button"
              disabled={isSending}
              aria-busy={isSending}
              style={isSending ? { opacity: 0.8, cursor: "not-allowed" } : undefined}
            >
              {isSending ? "Sending..." : "Send Mail"}
            </button>
          </form>
        </div>

        <span className="tag" style={{ padding: "0rem" }}>
          &lt;/body&gt;
        </span>
      </div>

      <div className="contact__right">
        <Map
          mapboxAccessToken="pk.eyJ1IjoieWFzaGZhbGtlNzciLCJhIjoiY2t1MjQ2Z2cwMmxjazJvbXI2OGk5b2V0dSJ9.BGnMIJbpa2OzthfRTtTP6w"
          initialViewState={{
            longitude: 77.2090, // Delhi
            latitude: 28.6139, // Delhi
            zoom: 9.8,
          }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <Marker latitude={28.6139} longitude={77.2090} anchor="bottom">
            <button className="map__button" aria-label="Delhi, India">
              <svg
                width="40"
                height="132"
                viewBox="0 0 420 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_405_4)">
                  <path
                    d="M235 473C173.283 420.483 127.188 371.704 96.7125 326.663C66.2375 281.621 51 239.933 51 201.6C51 144.1 69.4958 98.2917 106.487 64.175C143.479 30.0583 186.317 13 235 13C283.683 13 326.521 30.0583 363.512 64.175C400.504 98.2917 419 144.1 419 201.6C419 239.933 403.763 281.621 373.288 326.663C342.812 371.704 296.717 420.483 235 473Z"
                    fill="#0A192F"
                  />
                </g>
                <path
                  d="M324.275 124L243.706 279.334V362.293H195.91V279.334L115 124H168.94L220.149 232.905L271.017 124H324.275Z"
                  fill="#FFD700"
                />
                <path
                  d="M355 124L274.431 279.334V362.293H226.636V279.334L145.726 124H199.666L250.875 232.905L301.743 124H355Z"
                  fill="#115173"
                />
                <defs>
                  <filter
                    id="filter0_d_405_4"
                    x="0"
                    y="0"
                    width="420"
                    height="512"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-25" dy="13" />
                    <feGaussianBlur stdDeviation="13" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_4" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_4" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>
          </Marker>
        </Map>

        {/* optional: small label overlay (keeps design, adds polish) */}
        <div
          className="contact__description"
          style={{
            position: "absolute",
            right: "1.2rem",
            bottom: "1.2rem",
            background: "rgba(10, 25, 47, 0.65)",
            padding: "0.8rem 1rem",
            borderRadius: "10px",
            backdropFilter: "blur(6px)",
            maxWidth: "260px",
          }}
        >
          <strong>Delhi, India</strong>
          <br />
          Open to remote roles &amp; global collaboration.
        </div>
      </div>
    </div>
  );
};

export default Contact;