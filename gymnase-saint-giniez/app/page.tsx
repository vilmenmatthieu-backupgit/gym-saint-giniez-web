"use client";
import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

const BRAND = { name: "Gymnase Saint Giniez" };

/** Images du carrousel (mets tes fichiers dans /public/hero/) */
const heroImages = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];

function HeroCarousel() {
  const [i, setI] = useState(0);

  const next = () => setI((v) => (v + 1) % heroImages.length);
  const prev = () => setI((v) => (v - 1 + heroImages.length) % heroImages.length);

  // (Optionnel) auto-play
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {heroImages.map((src, idx) => (
          <div className="carousel__slide" key={idx}>
            <img src={src} alt={`Photo ${idx + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Image précédente">‹</button>
      <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Image suivante">›</button>

      <div className="carousel__dots">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            className={`carousel__dot ${i === idx ? "is-active" : ""}`}
            onClick={() => setI(idx)}
            aria-label={`Aller à l’image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const people = [
  {
    id: "anthony",
    name: "Anthony",
    role: "Co-gérant & Coach",
    initials: "AN",
    email: "anthony.cristin@gmail.com",
    color: "linear-gradient(135deg,#3b82f6,#60a5fa)",
    // photo: "/team/anthony.jpg",
    desc:
      "Passionné de préparation physique et de force, Anthony supervise la programmation et l'expérience globale des adhérents.",
  },
  {
    id: "alicia",
    name: "Alicia",
    role: "Co-gérante & Coach",
    initials: "AL",
    email: "alicia.taleb@gmail.com",
    color: "linear-gradient(135deg,#2563eb,#7dd3fc)",
    // photo: "/team/alicia.jpg",
    desc:
      "Spécialiste bien-être et accueil, Alicia veille au suivi des membres et à la qualité du service.",
  },
  {
    id: "deborah",
    name: "Déborah",
    role: "Co-gérante & Coach",
    initials: "DB",
    email: "coachdoukhanovic@gmail.com",
    color: "linear-gradient(135deg,#1d4ed8,#60a5fa)",
    // photo: "/team/deborah.jpg",
    desc:
      "Organisation, plannings et accompagnement : Déborah s'assure que tout roule côté opérationnel et sportif.",
  },
  {
    id: "anis",
    name: "Anis",
    role: "Co-gérant & Coach",
    initials: "AS",
    email: "aniskhiat@gmail.com",
    color: "linear-gradient(135deg,#3b82f6,#93c5fd)",
    // photo: "/team/anis.jpg",
    desc:
      "Coach diplômé et co-gérant, Anis encadre les séances techniques et les parcours de progression des adhérents.",
  },
];

export default function Page() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__inner">
          <a href="#accueil" className="brand">
            <span className="brand__logo">🏋️</span>
            <span>{BRAND.name}</span>
          </a>
          <nav className="nav">
            <a href="#equipe">Équipe</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn" href="#contact">Nous contacter →</a>
        </div>
      </header>

      <section id="accueil" className="hero">
        <div className="hero__inner">
          <div>
            <h1>
              Bienvenue au <span className="hero__brand">{BRAND.name}</span>
            </h1>
            <p className="muted">
              Salle de sport de quartier — esprit bleu-blanc, entraînement sérieux, ambiance conviviale.
            </p>
            <div className="chips">
              <span className="chip">Coaching</span>
              <span className="chip">Préparation physique</span>
              <span className="chip">Remise en forme</span>
            </div>
          </div>

          {/* Carrousel d’images */}
          <HeroCarousel />
        </div>
      </section>

      <section id="equipe" className="section">
        <div className="section__head">
          <h2>L'équipe dirigeante</h2>
          <p className="muted">
            Cliquez sur un profil pour afficher sa description. Les cartes s’agrandissent et dévoilent le texte.
          </p>
        </div>
        <div className="grid">
          {people.map((p) => (
            <ProfileCard key={p.id} person={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="section section--tint">
        <h2>Contact</h2>
        <div className="contact">
          <a className="contact__item" href="tel:+33491222615">📞 04 91 22 26 15</a>
          <div className="contact__item">📍 167 avenue de Mazargues 13008 Marseille</div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.
      </footer>
    </div>
  );
}
