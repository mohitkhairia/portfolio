import React, { useEffect, useState } from "react";
import AnimatedLettersFast from "./AnimatedlettersFast";
import "./scss/about.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "01. About Me".split("");

  useEffect(() => {
    const t = setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="about" id="about_id">
      <div className="about__left">
        <span className="sectiontag">&lt;section&gt;</span>

        <h1 className="about__headingPrimary">
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>

        <div className="about__description">
          Hello! I&apos;m <span className="about__link">Mohit</span> — a{" "}
          <span className="about__link">Principal Engineer</span> and Team Lead at{" "}
          <span className="about__link">Stakehub</span>, building production-grade
          fintech systems where correctness, security, and performance are
          non-negotiable. I operate end-to-end across architecture, delivery, and
          operations — from defining system contracts and execution strategy, to
          mentoring engineers and keeping services reliable under real traffic.
          <br />
          <br />
          My work centers on high-integrity transaction flows and scalable
          backends. I design systems with explicit transactional boundaries,
          Postgres-managed transactions, and disciplined locking strategies to
          eliminate race conditions and guarantee consistency. I also focus
          heavily on database optimization — query plans, indexing, data
          consistency patterns, and operational tooling — so performance remains
          predictable as the platform scales.
          <br />
          <br />
          At Stakehub, I&apos;ve helped deliver core trading workflows (including
          order processing/matching, reconciliation-oriented cron jobs, and
          structured logging pipelines) while driving security and operational
          hardening. This includes secure SSH-based operations, rate limiting and
          abuse prevention, and cryptography-backed authentication (RSA token
          implementation and secure key handling) for sensitive flows.
          <br />
          <br />
          Beyond backend systems, I&apos;ve shipped and supported user-facing
          products across web and mobile — including Android and iOS apps — with
          CI/CD pipelines that keep delivery fast, repeatable, and safe. I build
          native mobile experiences with <span className="about__link">Swift</span>{" "}
          and <span className="about__link">Kotlin</span>, and also deliver
          cross-platform apps using{" "}
          <span className="about__link">React Native</span> when it’s the right
          trade-off for speed and maintainability.
          <br />
          <br />
          Here are a few areas I work in deeply:
          <ul className="about__skillsList">
            <li className="about__skillsItems">
              Systems design &amp; leadership: architecture ownership, execution,
              mentoring, delivery quality
            </li>
            <li className="about__skillsItems">
              Postgres optimization: indexing, query tuning, locking, managed
              transactions, consistency guarantees
            </li>
            <li className="about__skillsItems">
              Correctness &amp; reliability: idempotency, race-condition elimination,
              observability, incident debugging via logs/metrics
            </li>
            <li className="about__skillsItems">
              Security by design: RSA-based auth/token flows, secure key handling,
              SSH hardening, rate limiting &amp; abuse prevention
            </li>
            <li className="about__skillsItems">
              Production delivery: CI/CD, release discipline, environment parity,
              operational readiness
            </li>
            <li className="about__skillsItems">
              Product engineering: scalable web apps, native &amp; cross-platform
              mobile apps, high-performance UX
            </li>
          </ul>
          <br />
          Technologies I use frequently:
          <ul className="about__skillsList">
            <li className="about__skillsItems">TypeScript / JavaScript (ES6+)</li>
            <li className="about__skillsItems">Node.js / Express</li>
            <li className="about__skillsItems">PostgreSQL (transactions, locking, tuning)</li>
            <li className="about__skillsItems">Python / Django</li>
            <li className="about__skillsItems">Java</li>
            <li className="about__skillsItems">Rust (systems &amp; performance work)</li>
            <li className="about__skillsItems">React / Next.js</li>
            <li className="about__skillsItems">React Native</li>
            <li className="about__skillsItems">Swift (iOS)</li>
            <li className="about__skillsItems">Kotlin (Android)</li>
            <li className="about__skillsItems">AWS (EC2, RDS, S3)</li>
            <li className="about__skillsItems">CI/CD (automation &amp; releases)</li>
            <li className="about__skillsItems">Apache / Server Ops</li>
            <li className="about__skillsItems">SSH / Linux operations</li>
            <li className="about__skillsItems">Git / GitHub</li>
          </ul>
        </div>

        <span className="sectiontag">&lt;/section&gt;</span>
      </div>

      <div className="about__right">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <svg className="about__icon">
                <use href="icons/symbol-defs.svg#icon-express"></use>
              </svg>
            </div>
            <div className="face2">
              <svg className="about__icon">
                <use href="icons/symbol-defs.svg#icon-redux"></use>
              </svg>
            </div>
            <div className="face3">
              <svg className="about__icon">
                <use href="icons/symbol-defs.svg#icon-javascript"></use>
              </svg>
            </div>
            <div className="face4">
              <svg className="about__icon">
                <use href="icons/symbol-defs.svg#icon-mongodb"></use>
              </svg>
            </div>
            <div className="face5">
              <svg className="about__icon">
                <use href="icons/symbol-defs.svg#icon-node-dot-js"></use>
              </svg>
            </div>
            <div className="face6">
              <svg className="about__icon">
                <use href="icons/symbol-defs.svg#icon-react"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;