import { Grid, Box, Typography, Avatar } from "@mui/material";
import egypt from "../../images/flags/egypt.png";
import nigeria from "../../images/flags/nigeria.png";
import england from "../../images/flags/england.png";
import india from "../../images/flags/india.png";
import ghana from "../../images/flags/ghana.png";
import senegal from "../../images/flags/senegal.png";
import usa from "../../images/flags/usa.png";
import NextImage from "next/image";

const flags = [
  { name: "Nigeria", url: nigeria },
  { name: "USA", url: usa },
  { name: "England", url: england },
  { name: "Ghana", url: ghana },
  { name: "Egypt", url: egypt },
  { name: "India", url: india },
  { name: "Senegal", url: senegal },
  { name: "+others", url: null },
];

export const CountryListSection = () => {
  const getFlagName = (flag: any) => {
    const matchedFlag = flags.find((f) => f.url === flag);
    return matchedFlag ? matchedFlag.name : "";
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "80%",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginY: "6rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "2rem",
            }}
          >
            Auditors, Organisations from 7+ countries around the globe
          </Typography>

          <Grid
            container
            sx={{
              marginY: "5rem",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#F7F8FC",
              borderRadius: "1.5rem",
            }}
          >
            {flags.map((flag, index) => (
              <Grid
                key={index}
                item
                xs={3}
                sm={1}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column" },
                  alignItems: { xs: "center", sm: "center" },
                  padding: "0.5rem",
                  gap: { xs: "5rem", sm: "1rem" },
                }}
              >
                {flag.url === null ? (
                  <Typography
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {flag.name}
                  </Typography>
                ) : (
                  <>
                    <Box
                      sx={{
                        borderRight: { xs: "none", sm: "1px solid #C6CBEC" },
                        padding: { xs: "none", sm: "1rem", md: "0.1rem" },
                        paddingX: { xs: "none", sm: "1rem", md: "2.3rem" },
                      }}
                    >
                      <NextImage
                        src={flag.url}
                        alt={`Flag ${index + 1}`}
                        width={40}
                        height={40}
                      />
                      <Typography
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {getFlagName(flag.url)}
                      </Typography>
                    </Box>
                  </>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
