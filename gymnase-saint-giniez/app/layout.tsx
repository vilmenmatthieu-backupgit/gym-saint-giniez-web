import "./globals.css";

export const metadata = {
  title: "Gymnase Saint Giniez",
  description: "Salle de sport — esprit bleu-blanc, entraînement sérieux, ambiance conviviale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
