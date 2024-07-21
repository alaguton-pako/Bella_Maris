import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";

export default function MediaControlCard() {
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
            Birthday Parties
          </Typography>
          <Typography variant="subtitle1" marginY={2}>
            let make unforgettable memories with you
          </Typography>
        </CardContent>
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-photo/woman-blowing-candles-her-happy-birthday-cake_23-2148757455.jpg?t=st=1720360673~exp=1720364273~hmac=f9aa3b8f14dae0f39ce666df46e90639d033a0c83665bac6a5aa9f5a3fbcbf26&w=1060"
        }
        alt="image"
      />
    </Card>
  );
}
