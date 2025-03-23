export interface ILink {
  name: string
  url: string
}

export interface ILogo {
  name: string
  preview: string
  links: Array<ILink>
}

export interface ICollection {
  name: string
  logos: Array<ILogo>
}

export const collections: Array<ICollection> = [
  {
    name: "bme",
    logos: [
      {
        name: "BME",
        preview: "/preview/BMEKicsi_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=11tpui0gbuc6TpSK6EQRTTKEQyP9BWUjG",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1P4DOjblMInvbOlN6FXHRGvssAukcfdRu",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1bKuy2Ad2K5ZlnQvCg9lKEejy-nBZJhST",
          },
        ],
      },
      {
        name: "EMK",
        preview: "/preview/EMK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1Dn16_XbQK2L33ls4OsLY0xvnVVedCXDA",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1kuo4RdZ27mdGcTOdBhQGxodzGs3JGyQK",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1pMV-1kxu6yp5VVPQaTIf79CNejULczwf",
          },
        ],
      },
      {
        name: "EPK",
        preview: "/preview/EPK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=13riSzHY8uT4e5YKYMQ0YlJKBg3nmP9p5",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=17svck7dps4VJ__YfKlMZ0DZZG-su5Kb_",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1sXFpBBQmmXI7XoIN5tz3ffaIX6c5ZNu0",
          },
        ],
      },
      {
        name: "GPK",
        preview: "/preview/GPK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1gFoRgK5359PPjmr8xu6iZ7s5HL6ZgSSP",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1tzxRWyDTk3gB3apUl1X3VBf-DrKlQa2J",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1ClkzSvrEdM4GFjER0e8WlxcNO396ie2T",
          },
        ],
      },
      {
        name: "GTK",
        preview: "/preview/GTK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1d474nPShj16sk1OAZ7v9YppyxtCJP8ni",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1fXEtIjBCLt2k-cumNyUQF-Dokxzp6G6M",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1PtfyrwHTnU_Xi3qQs9vBoGzv1Zb4v2ye",
          },
        ],
      },
      {
        name: "KJK",
        preview: "/preview/KJK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1Mty0jmb8oYMA4NyJR3QQyKeN_gJfoDqX",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1U1_QMulmqroi5CpS8Ii5hgs6BFpn5cLh",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1cegrDZ6sLgPfwOhznyhhmWAebqu8y5lr",
          },
        ],
      },
      {
        name: "TTK",
        preview: "/preview/TTK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1gvhjIKQXIRT0q1-jZFFy_QmFe8NFYsQ7",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1vAnnse43PKZ73gmjvMvzs9BjThKjg7sd",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1LwAv7OJo7Rt8Yf0BIuJFrSodinW0kdU4",
          },
        ],
      },
      {
        name: "VBK",
        preview: "/preview/VBK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1uTRNMIjIP9XgSUDmKECYaxRNm5EY5gxj",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1i_CtgFATOA4He11IZG3APiyaKcgGndR3",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=13AWEdEI2R9Sg7-hcWeGwGgI2DcQEH5ya",
          },
        ],
      },
      {
        name: "VIK",
        preview: "/preview/VIK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1iQ7535NWsqG_QMHW9knsfqGhEs_TTihs",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1pNBLs-cgk9lj094AF6QU0MEZz82yOcCt",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1qgMPbBeElgoEZaD_vp8sgLH7ne5b5zJE",
          },
        ],
      },
    ],
  },
  {
    name: "bulis",
    logos: [
      {
        name: "Bulis Reszort",
        preview: "/preview/BulisReszort_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1xIUi1-vbOK-Yi6YF-k9P2kguQr7RdwNl",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1l9Dj06QhoH8ZZgsoo3Q_92Qk6ZAqfDWq",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Gfy9QoQE7OjUGn5ud3Uc172Qn9IMXr00",
          },
        ],
      },
      {
        name: "Dezső Buli",
        preview: "/preview/DezsőBuli_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1m1tMC_F1B3FZhDXVTR_RyOzqs2EHfFZA",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1NLjZ8EB5FjhZu-LAF1n8D5hzHJLDLJ2z",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1a-3zv9al4yW_FknpMLC95eww4wrErrBu",
          },
        ],
      },
      {
        name: "Just Dance",
        preview: "/preview/JustDance_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1eA-U7K7NTnRL_cOg5qMht4qm0YBVgpWE",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1box15ivAD_H5I8zlPFXYpvT1Dhg0d_0y",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1wXlLxPkU8pbecyTIS8DJBRUF2soPaGAR",
          },
        ],
      },
      {
        name: "Lanosch",
        preview: "/preview/Lanosch_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1Ci6t7_5Cl2PkL2BqEsEJs5VxfZuvcEVP",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1i2TYmueI14mQ1D0zKJrs-BTu81wH4ST8",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1CYwHPHjkq8FAOY41-YX3AdSlbAjcXTnv",
          },
        ],
      },
      {
        name: "LevelUp",
        preview: "/preview/LevelUp_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1QbvrtmFaR7hWOhtJkxGVzHsmXpIcAHRo",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=167CEtW7sG3gEhoUMmBaEvdUSEqClqI-E",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1PJJwR6UbCLeZxh6mO0O74jiezTVxt7Uh",
          },
        ],
      },
      {
        name: "Schörpong",
        preview: "/preview/Schorpong_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=10lM06n-EMazQssvrQoqFS0gfLb5qNLuc",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1vc5WJASZDgYBceqn3iwlEkkh6pU0M_J1",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1t0_rqZwM7mcunH1mO-UA4Isx9Fv5vBke",
          },
        ],
      },
      {
        name: "VIK Szakestély",
        preview: "/preview/Szakest_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1ukqg90ZX4rWz9i7lKWyo5NsT2a0833vE",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1bLEELlH_tJC2OX_uTCuVWte-57Lyj5MQ",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1poOq4ngcS4GNbaic-YPocXpyDnoHG0Nq",
          },
        ],
      },
    ],
  },
  {
    name: "falatozó",
    logos: [
      {
        name: "Americano",
        preview: "/preview/Americano_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1gmw4iiWcUwuPk2Jg6LVde2D4uakn2nDR",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=12ZkqTZU99qFXf5zqo6LyIxyt1BtWQ21U",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=12A3N7AcKNQxxbzcStUWqOqG88S_ApweZ",
          },
        ],
      },
      {
        name: "FoodEx",
        preview: "/preview/FoodEx_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1o0uSuFTb5M5_IUDlNtSQGT-vUZvENaZf",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1RRsKj3bycG_kyq44zf81Uua6YfU1J2Km",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Zcl1J6Ual6l6pfGu1Y7PCzkvZwsYpwfD",
          },
        ],
      },
      {
        name: "Vörös Kakas Fogadó",
        preview: "/preview/Kakas_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1NdoKNG9yRtLUvWkFDkHROc2g-yARLIac",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1-PGekrSwqlos-mgZmhGkPHhCWwgLu3Ck",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1iUaKjffn9q-OnBgUuQm25G5e6WwEdfJ_",
          },
        ],
      },
      {
        name: "LángoSCH",
        preview: "/preview/Lángosch_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1BiwJezx6n97nYoYU-dQLT4WE_yfi6kf5",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1IO5YGvn8fzuPlK8x4HaCMt378JwuZzmo",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1We1XlWDXBlJFGmXlJl_SDDiYmGJgPXLH",
          },
        ],
      },
      {
        name: "Palacsintázó",
        preview: "/preview/Palacsintázó_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1lkb2y1DVNAVhlo8fTecONGCtwNfCT2Rq",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1TB57f225RruUwRg2CmK4U1MzZnOP5ZeW",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=18vx0x2nEc95Y63Z1PP50yb3rjMRPCHgG",
          },
        ],
      },
      {
        name: "Pizzásch",
        preview: "/preview/Pizzásch_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1z_qG9TGZrJwyzEjekPx9mF_k_uNPJGI3",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1KgpxA3w_9E7zQVzZvYJpveFg0HO5dh2q",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1PjZuAksOXM5V8SVm3GOQSTEvgrX2T7Ql",
          },
        ],
      },
      {
        name: "ReggeliSCH",
        preview: "/preview/ReggeliSCH_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1LpInx41S5jIGTUClRuw91eQeEj1J5Vrn",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1-xOsN68aRqKZSWST6Ml8_htZKjtziStL",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1bK9WrHsrDJz6uoDfw-2Cbx-6DcwSagCc",
          },
        ],
      },
      {
        name: "Vödörkör",
        preview: "/preview/Vödör_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1NY0lHZlCU5nvtUJKbanJxyIQKjycevu8",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1Rm1f594QSus_YXmemIvipCRPtY-msFwV",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1-lvr1KGQC3SKM07ek4F9U9O_jWjz3-uS",
          },
        ],
      },
    ],
  },
  {
    name: "kszk",
    logos: [
      {
        name: "DevTeam",
        preview: "/preview/DevTeam_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1EA14GMs_g77SFmmesxS-L7kadfgs5IPY",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1QQL2O0_g0Vj7SwV_-LvmiGsSdLXxTNNc",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1tglFCT27o9EVcmcsV_4wY9wiDfKRPZPN",
          },
        ],
      },
      {
        name: "Hallgatói Tudásbázis",
        preview: "/preview/HallgatóiTudásbázis_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1pmDrvhsm1b4jh0YNg6FENNbAhGMtbdGb",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1kUe1ItGAeZU80ZBWkyVOhvHpUxJuf1DF",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1IVfJVwCXW-AoSYsy7ByFQaVaiEw4jQL6",
          },
        ],
      },
      {
        name: "KSZK Reszort",
        preview: "/preview/KSZKReszort_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1D2NTpKNm_2YJjUsuyW2RQ2Eiwizc4xpw",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1yUnKyrrXLinYkWU4K1Wy7VvauynYhAQH",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1aotmgwDvIS9V1liDCiQ9ciz-GzSQ3V8-",
          },
        ],
      },
      {
        name: "NETeam",
        preview: "/preview/NETeam_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1Uy9FoufO8v1IWS9splZT1mERQ-BRxYPb",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1A4paeQftuagDlsgpaIFbvaP-aTfdrP16",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1eUuqRKaJxuErCY9wwrggbPPLX-w1Md5s",
          },
        ],
      },
      {
        name: "SecurITeam",
        preview: "/preview/SecurITeam_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=18uEdUNZqwn-JrVVlFhSJ5JjoDqOA8ya0",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1V8cD7_ED-PtUB73HQPaIlymnFxOuMJn_",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Ua8tA8WdkwWwi_RSOvSRr9FkAP9QijdO",
          },
        ],
      },
      {
        name: "Sysadmin",
        preview: "/preview/Sysadmin_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1J0akkx0QuTImelcdb9ttqGQf_QynX31O",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1Dyjfl3yqaJCvteWikN5WN1u343xfcwxw",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Ehxo3-EQL5cC5UqmInfpip_e5Bp688Hz",
          },
        ],
      },
      {
        name: "VIKWiki",
        preview: "/preview/VIKWiki_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1IfqYFLhRRD_3mjsB_9OGNPXky5iIl8r6",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1xpS4-2D3H2nHvqpRPaMdyY7A64a56-sx",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Nj9Az9GiGFCF6S6BC29eG9sFfUOB928b",
          },
        ],
      },
    ],
  },
  {
    name: "kultúr",
    logos: [
      {
        name: "BBK",
        preview: "/preview/BBK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1W2bmfR4Fjs4xW_G0ud7fyrhosxwjeQzW",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1XkPCV_xyNege7EocNGWyAexuAnMB2vQq",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1dwmEGR49jzmmIFwUqDJ8HKDIlJiYOhc8",
          },
        ],
      },
      {
        name: "Impulzus",
        preview: "/preview/Impulzus-új_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1-JzRWCqwzHYlk9H2jfk1fEsfBdcKqUzg",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1qzvv--kxFRw0fN3MImieA7dtUvnOfIqG",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=13ZnoFPyojc0nVG40MIdwJtuHE6X8r_Vp",
          },
        ],
      },
      {
        name: "Játszóház",
        preview: "/preview/Játszóház_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1-0GDKPqih9K1H1thxwxT5EajsBgFQly9",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1rGSi8nuUvbniPg7l2h3JNymprP39t3Ab",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1oB3JkI95jdCsn3aIemWXTB4hxqn8EhpH",
          },
        ],
      },
      {
        name: "Kultúr Reszort",
        preview: "/preview/KultúrReszort_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1WfK2mnYs14JwcJfzomSlCK5qcH8hb-Y9",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1SSFRIPnZVe711IcElwl5ZPxpJJOfEJEt",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1qCp8yI36byrDjdDyhgMc1Zsx2InJKNx-",
          },
        ],
      },
      {
        name: "La'Place Café",
        preview: "/preview/LaPlace_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1pQwKkcY6XKsG1KOoOJVh8lPjWGtqs-cC",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1tgvm7sIHoKtdqaNQBPDhHT6ANhaqkPrY",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1ZobFXkDBUG8r_JEh8XKe0dbSbwbzWWpG",
          },
        ],
      },
      {
        name: "Local Heroes",
        preview: "/preview/LocalHeroes_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1fDxFg367OkmAe16Be4OIzc0R70Nejjrw",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1aY1NGcyTPubL9U_VplrkvQcoqC5n07HW",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1eXx_kQwPbVzudAqcKObAvYfKVHBiE1w4",
          },
        ],
      },
      {
        name: "MMMK",
        preview: "/preview/MMMK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1POkiqPr11TZaw6MZ2L5drPPyUB2SB8ha",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=119PDjVui7u3Y0jPV8tymNEuJalKrkW0-",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1yo0PLWK0xME8mQSvIJX3HAvOKZwg6GVl",
          },
        ],
      },
    ],
  },
  
  {
    name: "schönherz",
    logos: [
      {
        name: "Homar",
        preview: "/preview/Homar_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1lDxo4rmk6O2ipfu0ubote6L204iXH8TL",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1g62g7D4QHL3tIPQAVGy--9qkOEenh5iu",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1sbR_tPfrFXzxLEQ8T93w-3TH43yxJ3SS",
          },
        ],
      },
      {
        name: "SSSL",
        preview: "/preview/SSSL_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1lK0kClSNsxUI1vF40iPHNnhmihzsVk-V",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=18onVi7YJaWeR0GmSzaQJkNVpOpoeaBij",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1_8bLScmeUWvuNTEyqAm60SOWD0QcQfvM",
          },
        ],
      },
      {
        name: "SVK",
        preview: "/preview/SVK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1XaoCVFtJbhh4CmqQ5hlzYhgbAuzmxID0",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1WKZ5Cy_dzj24K8fRS3R7Si1lLIndymsz",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1nEDA6zBAQdEo5kCeQ9OF19_pTb7s6I9w",
          },
        ],
      },
      {
        name: "Schönherz",
        preview: "/preview/Schönherz_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1R96EqK6rbh-r-UizpG4gOMFhGnHQUxnF",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1WplIGOvraMUq3iy2LcaogMzIJYdV2Nl8",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1HnXJ6pUcilHke1uuIYQ2imWMer5DwAbj",
          },
        ],
      },
      {
        name: "Schönherz alsó szöveges",
        preview: "/preview/Schönherz_also_szoveg_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1BAzzEjrE8F3lIV69Ol6cvQkNIJdukn24",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1kOE0kj0aW0RcB6skVekjN2M8iPj55jb0",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=17pLKjoWYCGJ_cgrqE_Yi1x82LqBFogGt",
          },
        ],
      },
      {
        name: "Schönherz Bázis",
        preview: "/preview/SchönherzBázis_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1X0PPsvyGz4YzuNBPUx2C2xJlL7VVKJgX",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1cM4_E7kTPRyl3gU0m7Tsqldv6H_36F9Y",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=18vCriheLgk4fb4T0yJEbxGGGmlhXqd8q",
          },
        ],
      },
      {
        name: "Schönherz Iskolaszövetkezet",
        preview: "/preview/SchönherzIskolaszövetkezet_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1JzPuSlu15kQE8G09p94e5q3zALzUhA88",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1bqhzRHOsRyyNsdHk-vHrUGpYyQ9e_OIH",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=13esyhazDSBscCel7hfb-mkLOj2tbcazr",
          },
        ],
      },
      {
        name: "VIK HK",
        preview: "/preview/VIKHK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1InPmhnNhIvr4ROtQGsMhnvAhkv-b7U6J",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1zIPTFiEXT36W7ujrDwNwD6J_2c9Vk6rD",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1QU9ZfV3qaBiLv4vlY4mniv7WM5QI5e2w",
          },
        ],
      },
    ],
  },
  {
    name: "simonyi",
    logos: [
      {
        name: "AC",
        preview: "/preview/AC_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1vXjj2d7uRBZecevUvZQ6Ys-tjHHs0TaG",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=12xay6amfSP1vrWQrHwFodO2GXq0T7606",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1OlRojBXJGTDS3aIV_qhHQs2Sx44s6kQW",
          },
        ],
      },
      {
        name: "BSS",
        preview: "/preview/BSS_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=18MA7u_KXMIvZbM1myNpBcYeJjQR0Zl5j",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1HyL9-H6tEnB7msr28yB9PlY9Dm66bEdq",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1c1QqMXjeqjagI2_wwwDJrxac7tnVkL0E",
          },
        ],
      },
      {
        name: "HA5KFU",
        preview: "/preview/HA5KFU_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1CbC68SD5KXuWiZQXE-kwS63ZEPgdOI-f",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=19SU2zIpnqg4i6ETyw2P9waUE5a4LM9xk",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=182FC3wNeqvAOWCaaSLRaroIgBhkwlPf1",
          },
        ],
      },
      {
        name: "Kir-Dev",
        preview: "/preview/Kir-Dev_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1bbN-H7Ov9C1dg7KNuibgxlgmsHw3cBjt",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=15AhiDE02qm4in7sP5j3mYIpfHHro04Po",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1LoiLlMdPOM06Hw4eKFKu_0j4zjj7WVoA",
          },
        ],
      },
      {
        name: "LEGO Kör",
        preview: "/preview/LEGO_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1_vyMYgTTRPE3PY6EWI74EcXOH4i3MtIe",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=11id_GvyQOJG2GoQcugzG0TpvVbcxHCHL",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1n5gxflkTBVgXM921t8ZVIZUDjz0vzHZx",
          },
        ],
      },
      {
        name: "MGMT",
        preview: "/preview/MGMT_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1LqhWQBrpyPIf1xCywFS38UGyLr8UuYUB",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=16iqcL7TSkGRsBP5joKihqj3QrwPygX5X",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1PRfmgLPafH5Kavuy8pW8Vjfsa-JnUHym",
          },
        ],
      },
      {
        name: "SEM",
        preview: "/preview/SEM_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=15hPHaQmc7Z_zYogmSR8paUwhG3H9jl2A",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=11IznujKSogESlcXICvki5SPOTe05GUYx",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1PAuhkNk8-f8I0BJBbblYL5okmZcJy97A",
          },
        ],
      },
      {
        name: "SPOT",
        preview: "/preview/SPOT_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1tvbTjgBkGrnTLpIbcAFjUpXpj1M1jy2n",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=10xqbYcNyvWbQUwZBQQfoz-bR-fk53r88",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1GqVW6-GK-rDJplg8nJA8kEJyvcmBoBla",
          },
        ],
      },
      {
        name: "Simonyi",
        preview: "/preview/Simonyi_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1_LmYPRJMrzwFpwfYOX15kilklF1Ko98Y",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1U3Ld-ZqERDDu90VDGiqSAtoIFG6Eysal",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Za83Q_NK_pjFRfHG_R2k3lbnBfBhwrAj",
          },
        ],
      },
      {
        name: "schdesign",
        preview: "/preview/schdesign-szürke-rózsaszín_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1frh_OPkTAbkbsrle1EHyLg6NZK6nYbbW",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1zEbWcv4nx7zt_1EHkGqiGjM0yvoardBJ",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1VlG6-uNGOM3NwRxQjlnwmNY7rLi64ksD",
          },
        ],
      },
    ],
  },
  {
    name: "sport",
    logos: [
      {
        name: "DSK",
        preview: "/preview/DSK_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=11zFoksSC7BbVk-7cHX8BsYkV_9kipIS_",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1nKZQkKw9I2v1oi2PhAO9WS6jWtVOdGRw",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1jFLBy2TMYelw6IQf9ZcN1Si1Gsej7Gk-",
          },
        ],
      },
      {
        name: "Schönherz Airsoft Team",
        preview: "/preview/SchönherzAirsoftTeam_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1Zn8DC5KTXPdwVFUA2uVbjjGgAUc9gZtL",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1a3A2AMtNKBXVZEqdcaM6G2ngjdLYS-nU",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1Qbm0IVk2H724Re2mEZhf2wZWZq2MUVXn",
          },
        ],
      },
      {
        name: "Schönherz Body",
        preview: "/preview/SchönherzBody_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1yD0Lxf2nzRsUm_D0UUYbQNpoK2YwGK75",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1WlhZT3W_PPe5xS8-ScGY2hoeKlpcgzgI",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1sl28oA8QnbLcyxf839k9jxHKyJM6hJRc",
          },
        ],
      },
      {
        name: "Általános szertár",
        preview: "/preview/Általánosszertár_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1IA-7Vhu-ZUfZCgzUziaCd54guut8swr4",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1iDqsG8LyHo-kW3QQ9SM317IpHEdzPOKH",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1QXiibe5lSS7RWBH3Qir3ICd4NVXnoi0V",
          },
        ],
      },
    ],
  },
  {
    name: "széf",
    logos: [
      {
        name: "Edénykölcsönző",
        preview: "/preview/Edénykölcsönző_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1PkVnN0uA3MNIrFTDjyA55gDLb6F9_Tco",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=16NCxJHGoWA3QCYPzzNvElI6qMpGWEiGc",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1IMITxg6FGeh-beXgSsVln_yTe5GEG70z",
          },
        ],
      },
      {
        name: "Hajvágósch",
        preview: "/preview/Hajvágósch_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1vODnJmlZKyL16czgoTxl_s9O9obXhaHT",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1jnJopUoDA0JaI68cHXF1cWGOLRDw-3oI",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1DAKVLWhJd7TTka9bBh8E3WZ3FUWujHRM",
          },
        ],
      },
      {
        name: "KB PR",
        preview: "/preview/KB_PR_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1_I4nvOlSfYfChIh68IrYGAjaHSs_uV4Z",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1LcrWwSE7LoKwKpMTEelJy-B1VitwTomY",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1nj2BFIferVi2AdfSirLMMgtdZ4fOls_3",
          },
        ],
      },
      {
        name: "KFB",
        preview: "/preview/KFB_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1by23iPhcZfzBIRmZTc1yYpBkEfq2jFd4",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1cO-GaDThZHF0wk6aKPWpYmUIOt1n_fjo",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1SCgkI-BPDxwIwpUdRGM5UuuKA35Nz7xw",
          },
        ],
      },
      {
        name: "Pulcsi és FoltMékör",
        preview: "/preview/PulcsiésFoltmékör_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1heFmsgHYmuX1Nz9tiGUxsZhk9LKDrCHq",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1X4R-KQT9l7W2eiY5Mkvg-9KZdNccEiTx",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1fHhuKLQkcGMFxGf0y0xB9TQ8Y--Klt23",
          },
        ],
      },
      {
        name: "Sternenschau",
        preview: "/preview/SternenSchau_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1bmCN-3S4HcgbtE7E5SvKuM4cf9Af20eU",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1BZFaDwgoh8aW89eF0ElXL3gFDWf99qce",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1phaXo-Vg8U1UzbyWvziX3QXcWr5s_K0n",
          },
        ],
      },
      {
        name: "Szauna kör",
        preview: "/preview/Szauna_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1ALcOHLI8UIa2UeysQS0NtTBDk_Ap6euh",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1leqQKR8HqHBI3m0Mtga6k33_VhFca5vq",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1CExrHv4Y331ToSMA0SGK2QzP0CsQWE18",
          },
        ],
      },
      {
        name: "Széf Reszort",
        preview: "/preview/Szef_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1bCS9IJQnhnPz3TvXoDW8cz4qM2ZRfPN3",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1Pc6lCI3qpQrvwkXLyarE_LvQp7ecJtPo",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=188JBTEA6aIUh_Hy9FsNo033L_99L1T2k",
          },
        ],
      },
      {
        name: "SziTa",
        preview: "/preview/Szita_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1Trt4X8ZyYQSlyMu7F5DGH3pA-ZLKQQ-n",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1uX3XqLg_jIDdc8Smoj3RwESAAMpnqckn",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1-0y-lTDM2yKM0sbQ3x1UjDmDYNELEADJ",
          },
        ],
      },
      {
        name: "WTF",
        preview: "/preview/WTF_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1jSCZTDVumxEeq1e2Yxo6cjWQWVhvCO9s",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1p6r9m5NOurtiXvEU6cAlDn7Cd3FSdvCu",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=15MBbqKViayCSYW1DvBJeWHyvIkuxTs0B",
          },
        ],
      },
    ],
  },
  {
    name: "régi logók",
    logos: [
      {
        name: "BMEME",
        preview: "/preview/BMEME_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1WmFyWXWAZLvgfj-UByqLmd6Bq7FVEw9a",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1THdAE7d7D71z2P1cUSeFuzFpmxLJOwP2",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1uBf7vVjKAvkxQYBj-xaAed8qPxicFY1X",
          },
        ],
      },
      {
        name: "Bűvész Kör",
        preview: "/preview/BűvészKör_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1UQhOemXM4te6o5zo2YVKrd5AAQM6vp6j",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1MVHyL-CrP5QTJOoLoaEdSI-kebKrvCwl",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1y-sQps0iwI0jGi9UocVXDFmTRrjMHlKc",
          },
        ],
      },
      {
        name: "Dzsájrosz",
        preview: "/preview/Dzsájrosz_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1tkyAsDcH77qM1ixry9B8bVFkhIbii7cW",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=19dnT4UWfmEuL35hctO1B8NivMZXFnqUR",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1d_Vimj5aYgd0s3mZs6i6m5v8T38IzVnn",
          },
        ],
      },
      {
        name: "Hajvágósch régi",
        preview: "/preview/Hajvágósch_regi_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1kJ1B9vgRlThsq_ywlHuliLfkZ6_Mme62",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=14AdRz1O6F7r6TusfHa2PUHy0eofPaZH4",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1ny6ZSu8W_AJDXqzGeWFdrP_zviQvTxEU",
          },
        ],
      },
      {
        name: "KOFER",
        preview: "/preview/KOFER_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1JCbctI1x0KoLcYDbhbAlhUZlQd8zdo8N",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1pRJOGca-Rlvl4xGLKHFbMJC_HnUuSvFW",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1AstGevtng0hgbmQFeXMTm19ZKaBzggs1",
          },
        ],
      },
      {
        name: "Parkett",
        preview: "/preview/Parkett_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=1wVvoDCKvhXiJMpfgmo1SLuVLyKbhNPwA",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=1Cwq0_-PZ0dxRQR5jzdBXCZR9CG-E08gU",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=1DTfUFXFdKspYLFBQ349suRIxC6IFaZ_F",
          },
        ],
      },
      {
        name: "SZOR Reszort",
        preview: "/preview/SZORReszort_preview.png",
        links: [
          {
            name: "ai",
            url: "https://drive.google.com/uc?export=download&id=16F95v1c1-XFGf1NB1AZMRiIsCy0Kxv0y",
          },
          {
            name: "png",
            url: "https://drive.google.com/uc?export=download&id=15VdjCfVUPRFriFXuQ-8Iz36l5bPh0ZZq",
          },
          {
            name: "svg",
            url: "https://drive.google.com/uc?export=download&id=18M8ouBx4UJIDl-LCgKvaIc78WZO5dG4m",
          },
        ],
      },
    ],
  },
]
