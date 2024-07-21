import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import NextImage from "next/image";

export default function MediaControlCardSeven() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        padding: "2rem",
        cursor: "pointer",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        borderRadius: "1rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Corporate Excellence
          </Typography>
          <Typography variant="subtitle1" marginY={2}>
            Elevate your corporate gatherings with our delectable treats
          </Typography>
        </CardContent>
    
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-photo/people-office-work-day_23-2150690154.jpg?t=st=1720362596~exp=1720366196~hmac=c97d0f7215d27841b393ff0b7b31d987eff2f69caffb7d55a425497dc8e0b0b9&w=1800"
        }
        alt="image"
      />
    </Card>
  );
}
