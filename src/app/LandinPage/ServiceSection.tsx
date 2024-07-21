"use client"
import { Box, Typography, Grid, Card, CardActionArea } from "@mui/material";
import cake from "../../images/cake.jpg";
import meatpie from "../../images/meat_pie.jpg";
import samosa from "../../images/samosa.jpg";
import burger from "../../images/burger.jpg";
import springrolls from "../../images/springrolls.jpg";
import shawarma from "../../images/shawarma.jpg";
import Modals from "../components/Modals";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export const ServicesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
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
    {
      title: "Burger",
      image: burger,
      description:
        "A mouth-watering burger made with premium ingredients and cooked to perfection.",
    },
    {
      title: "Shawarma",
      image: shawarma,
      description:
        "Succulent shawarma packed with flavorful, marinated meat and fresh vegetables.",
    },
    {
      title: "Spring Rolls",
      image: springrolls,
      description:
        "Crispy and delicious spring rolls, made with the finest ingredients for a perfect bite.",
    },
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
          <Grid item container justifyContent={"center"} marginY={4}>
            <CustomButton
              title="Get a free quote"
              variant="contained"
              onClick={openModal}
            />
          </Grid>
          <Modals title={"Quote"} isOpen={isOpen} handleClose={closeModal}>
            <form action="https://formspree.io/f/mrgnpkqk" method="POST">
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Please Enter Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please Enter Your E-mail"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Phone Number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Please Enter Your Preferred Contact Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Location</label>
                <input
                  id="location"
                  name="location"
                  placeholder="Location"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Kindly describe the event in details for us to give you the best quote..."
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </Modals>
        </Box>
      </Box>
    </>
  );
};
