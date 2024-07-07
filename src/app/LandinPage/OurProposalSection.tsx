import { Box, Typography, colors } from "@mui/material";
import { ResponsiveSlider, ResponsiveSlider2 } from "../components/Reels";

export const OurPoposalSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "90%",
            marginX: "auto",
          }}
        >
          <Typography
            fontWeight={500}
            color="#1A1A1A"
            sx={{
              fontSize: { xs: "1.6rem", md: "4rem" },
              marginY: "1rem",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            We Are{" "}
            <span
              style={{
                color: "green",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
              }}
            >
              Available
            </span>{" "}
            For All Event Type
          </Typography>
          <Typography
            alignItems={"center"}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              paddingY: "1rem",
              color: "#1A1A1A",
              fontSize: { xs: "0.9rem", md: "1.6rem" },
            }}
          >
            These are just few of our event list, contact us to get more
            information
          </Typography>
        </Box>
        <Box
          sx={{
            width: "98%",
            marginX: "auto",
          }}
        >
          <ResponsiveSlider />
          <ResponsiveSlider2 />
        </Box>
      </Box>
    </>
  );
};
