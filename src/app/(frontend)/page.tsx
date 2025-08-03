import { Search } from "~/components/search";

export default function HomePage() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 6,
        width: "100%",
        maxWidth: "xl",
        flexGrow: 1,
      }}>
      <Search />
    </div>
  );
}
