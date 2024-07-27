"use client";
import { Grid, Box, Chip, Typography, Stack } from "@mui/material";
import CustomButton from "../components/CustomButton";
import vectorImage2 from "../../images/ArrowVectorLeft.png";
import { HeroAnimationComponent } from "../components/HeroAnimation/Animation";
import heroImage from "../../images/heroImage3.jpg";
import Image from "next/image";
import Modals from "../components/Modals";
import { useState } from "react";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        id="home"
        width={"100%"}
        sx={{
          position: "relative",
          backgroundColor: "#0D5D8C",
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
                    border: "2px solid green",
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
                  marginY: "3rem",
                  paddingX: "2rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  Bellamaris is your number one choice for making standout
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
                    title="Get a free quote"
                    variant="contained"
                    sx={{ backgroundColor: "green" }}
                    onClick={openModal}
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
        <Modals title={"Quote"} isOpen={isOpen} handleClose={closeModal}>
          <form action="https://formspree.io/f/mrgnpkqk" method="POST">
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                name="name"
                placeholder="Please Enter Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please Enter Your E-mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Phone Number</label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Please Enter Your Preferred Contact Number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Location</label>
              <input
                id="location"
                name="location"
                placeholder="Location"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Kindly describe the event in details for us to give you the best quote..."
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modals>
      </Box>
    </>
  );
};
