import { Box, Typography, Grid } from "@mui/material";
import CustomCard from "../components/CustomCard";
import userImage from "../../images/userImage.png";
import mrAda from "../../images/mrAda.avif";
import mrsblake from "../../images/mrsblake.avif";
import mrslong from "../../images/mrslong.avif";

export const HowSection = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "90%",
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              container
              xs={12}
              md={6}
              sx={{ width: "100%", marginY: "2rem" }}
            >
              <Typography
                fontWeight={"700"}
                sx={{
                  paddingX: { xs: "4rem", md: "3rem", lg: "6rem" },
                  paddingY: "2rem",
                  fontSize: { xs: "3rem", md: "3rem", lg: "3rem" },
                }}
              >
                Clients{" "}
                <Box component="span" sx={{ color: "#6674CC" }}>
                  Love &
                </Box>{" "}
                <Box component="span" sx={{ color: "#6674CC" }}>
                  Trust
                </Box>{" "}
                Our Services
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  color: "#5F5E63",
                  textAlign: "center",
                }}
              >
                Dont just take my word for it, read from below what my clients
                have had to say about my service. client satisfaction is our
                pirority
              </Typography>
            </Grid>
          </Box>
          <Grid
            item
            container
            spacing={2}
            sx={{
              padding: "1rem",
              paddingBottom: "3rem",
            }}
          >
            <Grid item xs={12} md={4}>
              <CustomCard
                typographySx={{
                  textAlign: "justify",
                  fontSize: 14,
                  fontWeight: "400",
                }}
                src={mrAda}
                title="Mr Taofeeq"
                content="Bellamaris catering service made our wedding day unforgettable, with every bite a taste of perfection."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomCard
                typographySx={{
                  textAlign: "justify",
                  fontSize: 14,
                  fontWeight: "400",
                }}
                src={mrslong}
                title="Mrs Oyindamola"
                content="Bellamaris birthday catering was a hit! Every dish was delightful, making our celebration truly special."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomCard
                typographySx={{
                  textAlign: "justify",
                  fontSize: 14,
                  fontWeight: "400",
                }}
                src={mrsblake}
                title="Mrs Banjo"
                content="Bellamaris corporate catering service impressed everyone at our event. Each bite was exquisite, leaving a lasting impression."
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
