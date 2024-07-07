import { Box, Typography, Grid, Card, CardActionArea } from "@mui/material";
import cake from "../../images/cake.jpg";
import meatpie from "../../images/meat_pie.jpg";
import samosa from "../../images/samosa.jpg";
import Image from "next/image";
import CustomButton from "../components/CustomButton";

export const ServicesSection = () => {
  const confectionaries = [
    {
      title: "Cake in all variance",
      image: cake,
      description: "we offer cake on various size and types",
    },
    {
      title: "Meat pies",
      image: meatpie,
      description: "we offer meat pies in various types",
    },
    {
      title: "Samosa",
      image: samosa,
      description: "delicious samosa crafted with precision",
    },
    // {
    //   title: "Burger",
    //   image:
    //     "https://img.freepik.com/free-photo/bun-with-sesame-table_140725-9347.jpg?t=st=1720362864~exp=1720366464~hmac=a60a403ca26c9c6aed2120c923aea7b64eb84a0b830d69c29ac2897d65e4f935&w=826",
    //   description: "delicious burger with premuim ingredient",
    // },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box id="services">
          <Typography
            variant="h1"
            align="center"
            fontSize="4rem"
            fontWeight={600}
            sx={{ paddingTop: "3rem", color: "green" }}
          >
            Our{" "}
            <Typography
              component="span"
              fontSize="4rem"
              fontWeight={600}
              sx={{ color: "#6674CC" }}
            >
              Services
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "3rem",
            maxWidth: "90%",
            mx: "auto",
          }}
        >
          <Grid item container flexDirection={"row"} spacing={2}>
            {confectionaries?.map((item) => (
              <Grid key={item?.title} item xs={12} md={4}>
                <CardActionArea>
                  <Card
                    variant="outlined"
                    sx={{
                      padding: "2rem",
                      height: "50rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h4" fontWeight={700}>
                        {item.title}
                      </Typography>
                      <div style={{ marginTop: "0.8rem" }}>
                        <CustomButton
                          title="Get free quote"
                          variant="contained"
                        />
                      </div>
                    </Box>
                    <Typography variant="h6" marginY={"2rem"}>
                      {item.description}
                    </Typography>
                    <Box
                      height={"80%"}
                      width={"100%"}
                      sx={{
                        background: "#F2FBFD",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt="image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
