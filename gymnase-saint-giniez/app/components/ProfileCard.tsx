"use client";
import { useState } from "react";

// --- Type pour le profil ---
export type Person = {
  id: string;
  name: string;
  role: string;
  initials?: string;
  email?: string;
  desc?: string;
  color?: string;
  photo?: string;
};

// --- Composant ---
export default function ProfileCard({ person }: { person: Person }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className={`card ${open ? "card--open" : ""}`}
      aria-expanded={open}
    >
      <div className="card__header">
        <div
          className={`avatar ${person.photo ? "avatar--img" : "avatar--placeholder"}`}
          style={!person.photo ? { background: person.color } : undefined}
        >
          {person.photo ? (
            <img src={person.photo} alt={person.name} />
          ) : (
            <span aria-hidden>{person.initials}</span>
          )}
        </div>

        <div>
          <div className="card__name">{person.name}</div>
          <div className="card__role">{person.role}</div>
        </div>
      </div>

      <div className="card__content" style={{ maxHeight: open ? 340 : 0 }}>
        <p>{person.desc}</p>

        {person.email && (
          <div className="email-row">
            <a href={`mailto:${person.email}`} className="email-link">
              ✉️ {person.email}
            </a>
          </div>
        )}
      </div>
    </button>
  );
}
