import { Grid, Box, Chip, Typography, Stack } from "@mui/material";
import CustomButton from "../components/CustomButton";
import vectorImage2 from "../../images/ArrowVectorLeft.png";
import { HeroAnimationComponent } from "../components/HeroAnimation/Animation";
import heroImage from "../../images/heroImage3.jpg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <Box
        id="home"
        width={"100%"}
        sx={{
          position: "relative",
          backgroundColor: "#0D5D8C"
        }}
      >
        <Box>
          <Grid item container sx={{ maxHeight: "100%" }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginTop: "5rem",
                padding: { xs: "1rem", md: "6rem" },
              }}
            >
              <Box
                sx={{
                  height: "40%",
                  width: "10%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <Image
                  src={vectorImage2}
                  alt="arrow"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>

              <Box>
                <Chip
                  label="Superb opportunities for all kind of events "
                  sx={{
                    "& .MuiChip-label": {
                      padding: "0.5rem, 0.5rem",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                    },
                    border: "4px solid green",
                    borderRadius: "1rem",
                    backgroundColor: "inherit",
                    color: "#fff",
                    marginY: "1rem",
                  }}
                />
              </Box>

              <HeroAnimationComponent />

              <Box
                sx={{
                  marginY: "6rem",
                  paddingX: "2rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    fontWeight: "500",
                    textAlign: "justify",
                    color:"#fff"
                  }}
                >
                  Bella Maris is your number one choice for making standout
                  events and creating memorable experiences. We provide all the
                  essentials for a successful event, ensuring a great outing
                  every time.
                </Typography>
              </Box>
              <Box
                sx={{
                  marginY: "1rem",
                  paddingX: "2rem",
                }}
              >
                <Stack spacing={2} direction={"column"}>
                  <CustomButton
                    title="Get a quote for free"
                    variant="contained"
                    sx={{ backgroundColor: "green" }}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                maxHeight: "100%",
                marginLeft: { xs: "4rem", md: "0rem" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                src={heroImage}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  animation: "slide-top 1s ease forwards",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
