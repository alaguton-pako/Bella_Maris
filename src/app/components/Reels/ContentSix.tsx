import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";

export default function MediaControlCardSix() {
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
            Baby Shower Delights
          </Typography>
          <Typography variant="subtitle1" marginY={2}>
            Celebrate new beginnings with a touch of sweetness
          </Typography>
        </CardContent>
   
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-psd/baby-shower-template-design_23-2151200736.jpg?t=st=1720362527~exp=1720366127~hmac=fa0545bab385e0b573f9f895fcf8502a689b4589e6c1f9cd2080c3b9b768cdd0&w=1060"
        }
        alt="image"
      />
    </Card>
  );
}
