"use client";
import { Box, Typography, Grid } from "@mui/material";
import { ResponsiveSlider, ResponsiveSlider2 } from "../components/Reels";
import CustomButton from "../components/CustomButton";
import Modals from "../components/Modals";
import { useState } from "react";

export const OurPoposalSection = () => {
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
        <Grid item container justifyContent={"center"} marginY={4}>
          <CustomButton
            title="Get a free quote"
            variant="contained"
            onClick={openModal}
          />
        </Grid>
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
