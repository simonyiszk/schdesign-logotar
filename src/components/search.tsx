"use client";

import { Alert, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import type { Logo } from "~/@generated/payload-types";
import { LogoCard } from "./logo-card";

export function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [logos, setLogos] = useState<Logo[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLogos = useCallback(async (term: string) => {
    setLoading(true);
    setError(null);

    try {
      const page = (1).toString();
      const limit = (12).toString();

      if (0 < term.length && term.length < 1) {
        setLogos([]);
        return;
      }

      const encodedTerm = encodeURIComponent(term.trim());
      const query = term
        ? `page=${page}&limit=${limit}&where[or][0][and][0][name][like]=${encodedTerm}&where[or][1][and][0][slug][like]=${encodedTerm}&sort=name`
        : `page=${page}&limit=${limit}&sort=name`;

      const response = await fetch(`/api/logos?${query}`);

      if (!response.ok) {
        const status = response.status.toString();

        throw new Error(`HTTP error! status: ${status}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setLogos(data.docs as Logo[]);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to fetch logos:", error);
        setError(`Failed to load logos: ${error.message}`);
      }
    } finally {
      setLoading(false);
      localStorage.setItem("searchTerm", term);
    }
  }, []);

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("searchTerm");

    setSearchTerm(savedSearchTerm ?? "");
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {

      void fetchLogos(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, fetchLogos]);

  return (
    <>
      <TextField
        label="Keresés"
        variant="outlined"
        sx={{ width: "100%" }}
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(event.target.value); }}
      />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        columns={4}
        paddingY={4}
        width="100%"
        flexGrow="1"
      >
        { loading
          ? (
            <Grid>
              <CircularProgress />
            </Grid>
          )
          : error
            ? (
              <Alert severity="error">
                {error}
              </Alert>
            )
            : logos?.length === 0
              ? (
                <Typography variant="h3">Nincs találat 😿</Typography>
              )
              : logos?.map((logo) => (
                <LogoCard
                  key={logo.slug}
                  logos={[logo]}
                />
              ))
        }
      </Grid>

    </>
  );
}
