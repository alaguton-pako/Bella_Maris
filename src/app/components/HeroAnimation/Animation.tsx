"use client";
import { TypeAnimation } from "react-type-animation";
import Typography from "@mui/material/Typography";

export const HeroAnimationComponent = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        paddingX: "1rem",
        fontSize: { xs: "3rem", sm: "6rem" },
        fontWeight: "600",
        color:"#fff"
      }}
    >
      Call us for your <br />
      <Typography
        variant="h1"
        component="span"
        sx={{
          color: "#77DEF4",
          fontWeight: "500",
          fontSize: { xs: "3rem", sm: "5rem" },
        }}
      >
        <TypeAnimation
          sequence={[
            "Birthday parties.....",
            2000,
            "Weddings.....",
            2000,
            "School parties and events.....",
            2000,
            "House welcoming.....",
            2000,
            "Graduation.....",
            2000,
            "Holiday celebration.....",
            2000,
            "Seasonal festives.....",
            2000,
            "Corporate events.....",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </Typography>
    </Typography>
  );
};
