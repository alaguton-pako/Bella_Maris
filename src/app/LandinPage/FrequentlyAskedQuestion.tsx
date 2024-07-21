"use client";
import { Box, Grid, Typography } from "@mui/material";
import BasicAccordion from "../components/Accordion";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Modals from "../components/Modals";

export const FrequentlyAskedQuestionSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "90%",
          marginX: "auto",
          marginY: "10rem",
        }}
      >
        <Grid item container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "1rem",
            }}
          >
            <Typography
              fontSize={"4rem"}
              sx={{
                paddingY: "1rem",
                fontWeight: 400,
              }}
            >
              FAQ
            </Typography>
            <Box
              sx={{
                paddingY: "2rem",
              }}
            >
              <CustomButton title="Get a free quote" variant="contained" onClick={openModal}/>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "1rem",
            }}
          >
            <Box sx={{}}>
              <BasicAccordion />
            </Box>
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
  );
};
