import { Box, Grid } from "@mui/material";
import featureFrame1 from "../../images/FeatureFrame.png";
import featureFrame2 from "../../images/FeatureFrame2.png";
import featureFrame3 from "../../images/FeatureFrame3.png";
import featureFrame4 from "../../images/FeatureFrame4.png";
import Image from "next/image";
export const FeatureSection = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "90%", marginX: "auto" }}>
          <Grid
            container
            sx={{
              paddingY: "10rem",
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                padding: "1rem",
              }}
            >
              <Image
                src={featureFrame1}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                maxHeight: "100rem",
                padding: "1rem",
              }}
            >
              <Grid item sx={{ height: "100%", flexGrow: 1 }}>
                <Image
                  src={featureFrame2}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  maxHeight: "50rem",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <Grid item xs={12}>
                  <Image
                    src={featureFrame4}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Image
                    src={featureFrame3}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
