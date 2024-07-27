import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";

export default function MediaControlCardFour() {
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
            Wedding Ceremonies
          </Typography>
          <Typography variant="h6" marginY={1}>
            Where love and joy unite
          </Typography>
        </CardContent>
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-photo/people-enjoying-burnt-orange-wedding_52683-121737.jpg?t=st=1720361614~exp=1720365214~hmac=37613bd6054662a05310e01c3514149463286c2829213b51aaea421a1fc2039c&w=1800"
        }
        alt="image"
      />
    </Card>
  );
}
