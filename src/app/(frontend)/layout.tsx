import type { Metadata } from "next";

export const metadata = {
  title: "Logótár",
  description: "Az schdesign Logótár tartalmazza a Schönherz kollégium köreinek logóit.",
} satisfies Metadata;

export default function RootLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        {children}
      </body>
    </html>
  );
}
