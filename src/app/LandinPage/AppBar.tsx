"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import compLogo from "../../images/bella_maris_logo.png";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Image from "next/image";
import Modals from "../components/Modals";
export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#ECEBEC" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              paddingX: isSmallScreen
                ? "0rem"
                : isMeduimScreen
                ? "1rem"
                : "6rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={compLogo}
                  height={40}
                  width={40}
                  alt="image"
                  className="custom-image"
                />
              </div>
              <Typography variant="h5" fontWeight={600} sx={{ color: "green" }}>
                Bellamaris Cake&apos;s and More
              </Typography>
            </div>

            <Box sx={{ display: { xs: "none", sm: "none", md: "none" } }}>
              <CustomButton
                title="Get a free quote"
                variant="contained"
                sx={{ backgroundColor: "green" }}
                onClick={openModal}
              />
            </Box>

            {!isSmallScreen && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <CustomButton
                  title="Get a free quote"
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                  onClick={openModal}
                />
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
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
    </>
  );
};
