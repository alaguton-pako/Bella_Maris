import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import reelImage from "../../../images/reel2.png";
import CustomButton from "../CustomButton";
import NextImage from "next/image";

export default function MediaControlCardTwo() {
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
            Festival Celebrations
          </Typography>
          <Typography variant="subtitle1" marginY={2}>
            Embrace the spirit of festival with us
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <CustomButton title="Get free quote" variant="contained" />
          </Box>
        </CardActions>
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/free-photo/cinematic-portrait-people-celebrating-usa-independence-day-national-holiday_23-2151479216.jpg?t=st=1720360959~exp=1720364559~hmac=bde08b09eb8dd6d95dd095303c77dff8848f40fdf5f91a4854196abb60f30f7e&w=900"
        }
        alt="image"
      />
    </Card>
  );
}
