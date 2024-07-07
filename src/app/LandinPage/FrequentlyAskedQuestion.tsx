import { Box, Grid, Typography } from "@mui/material";
import BasicAccordion from "../components/Accordion";
import CustomButton from "../components/CustomButton";

export const FrequentlyAskedQuestionSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "90%",
          marginX: "auto",
          marginY: "10rem",
        }}
      >
        <Grid item container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "1rem",
            }}
          >
            <Typography
              fontSize={"4rem"}
              sx={{
                paddingY: "1rem",
                fontWeight: 400,
              }}
            >
              FAQ
            </Typography>
            <Box
              sx={{
                paddingY: "2rem",
              }}
            >
              <CustomButton title="Get a free quote" variant="contained" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "1rem",
            }}
          >
            <Box sx={{}}>
              <BasicAccordion />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
