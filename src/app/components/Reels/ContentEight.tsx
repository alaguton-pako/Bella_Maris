import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";

export default function MediaControlCardEight() {
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
            Retire in Sweet Style
          </Typography>
          <Typography variant="subtitle1" marginY={2}>
            Celebrate a sweet ending and new beginnings
          </Typography>
        </CardContent>
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-photo/medium-shot-man-having-lunch-restaurant_23-2150491917.jpg?t=st=1720362658~exp=1720366258~hmac=8bcb6d17ee63e1aa01e39faa7b5416b8399c516e5aad804a4c839ff3179594bd&w=826"
        }
        alt="image"
      />
    </Card>
  );
}
