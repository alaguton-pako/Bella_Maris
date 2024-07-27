import { Grid, IconButton, Box, Typography } from "@mui/material";
import React from "react";
import { WhatsApp, Facebook, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={2}
      >
        <Grid item>
          <Typography variant="h5" sx={{ color: "#1A1A1A" }}>
            &copy; 2024 Bellamaris Cake&apos;s and more
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ marginY: "1rem" }}>
            <IconButton>
              <Facebook sx={{ fontSize: "3rem", color: "blue" }} />
            </IconButton>
            <IconButton>
              <XIcon sx={{ fontSize: "3rem" }} />
            </IconButton>
            <IconButton>
              <a
                href="https://api.whatsapp.com/send?phone=+2349052536467&text=Hi!%20Please%20can%20i%20get%a%quote"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp sx={{ fontSize: "3rem", color: "green" }} />
              </a>
            </IconButton>
            <IconButton>
              <Instagram sx={{ fontSize: "3rem", color: "red" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
