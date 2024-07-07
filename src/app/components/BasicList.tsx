"use client";
import {
  ArrowUpward,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { ListItem, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Image from "next/image";
import logo from "../../images/bella_maris_logo.png";

export default function BasicList() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: "0.5rem",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <List>
              <ListItem>
                <Box>
                  <Image
                    alt="image"
                    height={50}
                    width={50}
                    src={logo}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Grid item container flexDirection={"column"} gap={2}>
                  <Grid item>
                    <Typography
                      fontWeight={600}
                      color={"#1A1A1A"}
                      sx={{
                        fontSize: "1.4rem",
                        marginLeft: "1.4rem",
                      }}
                    >
                      Bella Maris Cake and Confectionaries
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      fontWeight={600}
                      color={"#1A1A1A"}
                      sx={{
                        fontSize: "1.4rem",
                        marginLeft: "1.4rem",
                      }}
                    >
                      Contact Lines
                    </Typography>
                    <Typography
                      fontWeight={400}
                      color={"#1A1A1A"}
                      sx={{
                        fontSize: "1.4rem",
                        marginLeft: "1.4rem",
                      }}
                    >
                      08045677123
                    </Typography>
                    <Typography
                      fontWeight={400}
                      color={"#1A1A1A"}
                      sx={{
                        fontSize: "1.4rem",
                        marginLeft: "1.4rem",
                      }}
                    >
                      09011464143
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Grid>
          <Grid item marginTop={8}>
            <Typography variant="h5" fontWeight={600}>Social Links</Typography>
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "green" }} fontWeight={500}>
              &#169; powered by Mr_Ahmed 2024 All Rights Reserved
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
