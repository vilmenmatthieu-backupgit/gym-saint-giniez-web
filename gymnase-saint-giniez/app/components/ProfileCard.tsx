"use client";
import { useState } from "react";

export type Person = {
  id: string;
  name: string;
  role: string;
  initials: string;
  desc: string;
};

export default function ProfileCard({ person }: { person: Person }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className={`card ${open ? "card--open" : ""}`}
      aria-expanded={open}
    >
      <div className="card__header">
        <div className="avatar">{person.initials}</div>
        <div>
          <div className="card__name">{person.name}</div>
          <div className="card__role">{person.role}</div>
        </div>
      </div>

      <div className="card__content" style={{ maxHeight: open ? 300 : 0 }}>
        <p>{person.desc}</p>
      </div>
    </button>
  );
}
