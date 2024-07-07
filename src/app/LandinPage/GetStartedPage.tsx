import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import getStartedImage from "../../images/getStartedImage.png";
import Image from "next/image";
export const GetStartedPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box sx={{}}>
          <Grid item container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              sx={{
                background: "#1A1A1A",
              }}
            >
              <Box
                sx={{
                  padding: "8rem",
                }}
              >
                <Typography
                  color={"#fff"}
                  fontWeight={600}
                  sx={{
                    paddingRight: "1rem",
                    fontSize: { xs: "3rem", md: "4rem" },
                  }}
                >
                  Let Make Your Event a Memorable One
                </Typography>
                <Typography
                  variant="h5"
                  color={"#fff"}
                  sx={{
                    paddingY: "3rem",
                    paddingRight: "2rem",
                  }}
                >
                  we will handle all of your confectionaries need while giving
                  you time to immerse your self in the experience of the event
                </Typography>
                <Box>
                  <CustomButton
                    title="Get free quote"
                    variant="outlined"
                    sx={{
                      background: "inherit",
                      color: "#fff",
                      borderColor: "#E0B85C",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={8}
              sx={{ maxHeight: "100%" }}
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/happy-african-american-man-listening-music-cellphone-home_116547-26296.jpg?w=1800"
                }
                height={500}
                width={500}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
