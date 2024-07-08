import { CardActions, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import reelImage from "../../../images/reel2.png";
import CustomButton from "../CustomButton";
import NextImage from "next/image";

export default function MediaControlCardThree() {
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
            Graduation Celebrations
          </Typography>
          <Typography variant="subtitle1" marginY={2}>
            Celebrate your achievements in style
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
            <CustomButton title="Get a free quote" variant="contained" />
          </Box>
        </CardActions>
      </Box>
      <NextImage
        width={150}
        height={150}
        src={
          "https://img.freepik.com/premium-photo/portrait-group-female-graduates-jumping-air_1142-40447.jpg?w=1060"
        }
        alt="image"
      />
    </Card>
  );
}
