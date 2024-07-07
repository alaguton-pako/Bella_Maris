"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import compLogo from "../../images/bella_maris_logo.png";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const pages = [{ title: "Services", target: "services" }];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

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
    <AppBar position="static" sx={{ backgroundColor: "#ECEBEC" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            paddingX: isSmallScreen ? "0rem" : isMeduimScreen ? "1rem" : "6rem",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={compLogo} height={40} width={40} alt="image" className="custom-image" />
            </div>
            <Typography variant="h5" fontWeight={600} sx={{ color: "green" }}>
              Bella Maris Cake&apos;s and Confectionaries
            </Typography>
          </div>

          <Box sx={{ display: { xs: "none", sm: "none", md: "none" } }}>
            <CustomButton
              title="Get a free quote"
              variant="contained"
              sx={{ backgroundColor: "green" }}
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
              />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
