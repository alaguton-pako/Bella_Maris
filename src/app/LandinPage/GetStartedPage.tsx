"use client";
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Modals from "../components/Modals";
import { useState } from "react";
import Image from "next/image";
export const GetStartedPage = () => {
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
                    title="Get a free quote"
                    variant="outlined"
                    sx={{
                      background: "inherit",
                      color: "#fff",
                      borderColor: "#E0B85C",
                    }}
                    onClick={openModal}
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
