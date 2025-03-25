import { Alert, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 16,
          paddingY: 16,
        }}
      >
        <Typography variant="h1">
          Logók + tárolás = Logótár
        </Typography>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Typography variant="h2">
              Új funkciók:
            </Typography>
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Alert severity="success">CMS</Alert>
              <Alert severity="success">Logók tárolása</Alert>
              <Alert severity="success">Logók verzió követése</Alert>
              <Alert severity="success">Logók rendszerezése variánsok és kollekciók alapján</Alert>
              <Alert severity="success">Igényvezérelt megjelenítés, elrejtés</Alert>
            </div>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Typography variant="h2">
              Hamarosan:
            </Typography>
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Alert severity="warning">Logók megosztása linken keresztül</Alert>
              <Alert severity="warning">Keresés</Alert>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
