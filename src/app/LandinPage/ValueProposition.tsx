import { Box, Grid, IconButton, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import swiftnessImage from "../../images/swiftImage.png";
import safetyImage from "../../images/safetyImage.png";
import supportImage from "../../images/supportImage.png";
import Image from "next/image";
import { WhatsApp, Facebook, Instagram, Twitter } from "@mui/icons-material";

export const ValuePropositionSection = () => {
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
          <Grid
            item
            container
            sx={{
              paddingTop: "2rem",
            }}
          >
            <Grid item container>
              <Grid item xs={12} md={6} padding={"4rem"}>
                <Box
                  sx={{
                    background: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "3rem", md: "4rem" },
                      fontWeight: "800",
                    }}
                  >
                    Swift{" "}
                    <Box component="span" sx={{ color: "#6674CC" }}>
                      delivery
                    </Box>{" "}
                    to event
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      marginY: "1rem",
                      fontWeight: "400",
                      fontSize: "1.3rem",
                    }}
                  >
                    Bella Maris confectionaries ensures that you receive your
                    products on time and in perfect condition.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <CustomButton title="Get free quote" variant="contained" />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/fast-delivery-scooter-rides-out-smartphone-delivery-concept-online-ordering-food-delivery-last-mile-template-banner-3d-illustration-3d-render_99433-7143.jpg?w=1800"
                  }
                  width={500}
                  height={500}
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
            <Grid
              item
              container
              sx={{
                marginY: "2rem",
              }}
            >
              <Grid item xs={12} md={6}>
                <Image
                  src={
                    "https://img.freepik.com/free-vector/enthusiastic-concept-illustration_114360-3726.jpg?t=st=1720363948~exp=1720367548~hmac=2a6d8e4c83a9cf64a8b7d49aae8b2a411b72c4940820ec016c2d170e2ab192a0&w=1060"
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
              <Grid item xs={12} md={6} padding={"4rem"}>
                <Box
                  sx={{
                    background: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3rem", md: "4rem" },
                      fontWeight: "800",
                    }}
                  >
                    <Box component="span" sx={{ color: "#6674CC" }}>
                      Easy Access,
                    </Box>{" "}
                    accross all digital platform
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      marginY: "1rem",
                      fontWeight: "400",
                      fontSize: "1.3rem",
                    }}
                  >
                    find us across all social media platforms
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <CustomButton title="Get free quote" variant="contained" />
                  </Box>
                  <Box sx={{ marginY: "1rem" }}>
                    <IconButton>
                      <Facebook sx={{ fontSize: "3rem", color: "blue" }} />
                    </IconButton>
                    <IconButton>
                      <Twitter sx={{ fontSize: "3rem" }} />
                    </IconButton>
                    <IconButton>
                      <WhatsApp sx={{ fontSize: "3rem", color: "green" }} />
                    </IconButton>
                    <IconButton>
                      <Instagram sx={{ fontSize: "3rem", color: "red" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            sx={{
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize={"4rem"}
                sx={{
                  textAlign: "center",
                  paddingTop: "15rem",
                  paddingBottom: "5rem",
                  fontWeight: 800,
                }}
              >
                Your{" "}
                <Box component="span" sx={{ color: "#6674CC" }}>
                  number 1 stop
                </Box>{" "}
                for all of your confectionaries services
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                color={"#5F5E63"}
                sx={{
                  lineHeight: "3rem",
                }}
              >
                Top-notch delivery of confectionaries at affordable prices,
                offering reliable service that assures a job well done.
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: "3rem",
                marginBottom: "10rem",
              }}
            >
              <Grid item container>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      gap: "2rem",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                    >
                      <Image
                        src={swiftnessImage}
                        alt="image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        padding: "1rem",
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={600}
                        color={"#1A1A1A"}
                      >
                        Swiftness
                      </Typography>
                      <Typography variant="h6" color={"#5F5E63"}>
                        Get your service delivered to you on time and in good
                        shape
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      gap: "2rem",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                    >
                      <Image
                        src={safetyImage}
                        alt="image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        padding: "1rem",
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={600}
                        color={"#1A1A1A"}
                      >
                        Safety
                      </Typography>
                      <Typography variant="h6" color={"#5F5E63"}>
                        All our deliverables are prepared in a clean and
                        germ-free environment, ensuring your peace of mind.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      gap: "2rem",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                    >
                      <Image
                        src={supportImage}
                        alt="image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        padding: "1rem",
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={600}
                        color={"#1A1A1A"}
                      >
                        Support
                      </Typography>
                      <Typography variant="h6" color={"#5F5E63"}>
                        We are committed to working with you from start to
                        finish, ensuring smooth ceremonies without any hiccups
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "6rem",
            }}
          >
            <CustomButton title="Get a free quote" variant="contained" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
