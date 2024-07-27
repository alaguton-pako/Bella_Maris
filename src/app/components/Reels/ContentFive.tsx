import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";

export default function MediaControlCardFive() {
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
          <Typography component="div" variant="h4">
            Anniversary Bliss
          </Typography>
          <Typography variant="h6" marginY={1}>
            Sweet moments, sweet memories
          </Typography>
        </CardContent>
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-photo/photorealistic-valentines-day-celebration_23-2151128292.jpg?t=st=1720362712~exp=1720366312~hmac=a2af40b5e47f10aa5c68cd0f9ba0d7954b47c03c6a3211622a886746b5578162&w=826"
        }
        alt="image"
      />
    </Card>
  );
}
