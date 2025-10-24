"use client";
import ProfileCard, { type Person } from "./components/ProfileCard";

const BRAND = { name: "Gymnase Saint Giniez" };

const people: Person[] = [
  { id: "anthony", name: "Anthony", role: "Co-gérant & Coach", initials: "AN",
    desc: "Passionné de préparation physique et de force, Anthony supervise la programmation et l'expérience globale des adhérents." },
  { id: "alicia", name: "Alicia", role: "Co-gérante & Coach", initials: "AL",
    desc: "Spécialiste bien-être et accueil, Alicia veille au suivi des membres et à la qualité du service." },
  { id: "deborah", name: "Déborah", role: "Co-gérante & Coach", initials: "DB",
    desc: "Organisation, plannings et accompagnement : Déborah s'assure que tout roule côté opérationnel et sportif." },
  { id: "anis", name: "Anis", role: "Co-gérant & Coach", initials: "AS",
    desc: "Coach diplômé et co-gérant, Anis encadre les séances techniques et les parcours de progression des adhérents." },
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
            <h1>Bienvenue au <span className="hero__brand">{BRAND.name}</span></h1>
            <p className="muted">
              Salle de sport de quartier — esprit bleu-blanc, entraînement sérieux, ambiance conviviale.
            </p>
            <div className="chips">
              <span className="chip">Coaching</span>
              <span className="chip">Préparation physique</span>
              <span className="chip">Remise en forme</span>
            </div>
          </div>
          <div className="hero__card" />
        </div>
      </section>

      <section id="equipe" className="section">
        <div className="section__head">
          <h2>L'équipe dirigeante</h2>
          <p className="muted">Cliquez sur un profil pour afficher sa description. Les cartes s’agrandissent et dévoilent le texte.</p>
        </div>
        <div className="grid">
          {people.map((p) => <ProfileCard key={p.id} person={p} />)}
        </div>
      </section>

      <section id="contact" className="section section--tint">
        <h2>Contact</h2>
        <div className="contact">
          <a className="contact__item" href="tel:+33000000000">📞 04 00 00 00 00</a>
          <a className="contact__item" href="mailto:contact@gymnase-saint-giniez.fr">✉️ contact@gymnase-saint-giniez.fr</a>
          <div className="contact__item">📍 13008 Marseille</div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.
      </footer>
    </div>
  );
}