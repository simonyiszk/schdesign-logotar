"use client";

import { Alert, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <div>
      <Typography variant="h1">
        A manóba...
      </Typography>
      <Alert severity="error">
        <Typography>
          Ennek nem lett volna szabad megtörténnie.
        </Typography>
      </Alert>
    </div>
  );
}
