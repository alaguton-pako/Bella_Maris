import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion
        sx={{
          "&.Mui-expanded": {
            background: "#F7F8FC",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            {" "}
            Is Bellamaris Confectionaries a scam ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.3rem",
            }}
          >
            Bellamaris is legit in it service delivery and have not had any
            case of scam since it begun operation 2020
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          "&.Mui-expanded": {
            background: "#F7F8FC",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            {" "}
            Does Bellamaris cook rice too ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.3rem",
            }}
          >
            Yes, we provide rice dishes in various forms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          "&.Mui-expanded": {
            background: "#F7F8FC",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            {" "}
            Is Bellamaris Quote free ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.3rem",
            }}
          >
            Yes, when you apply for one of our service you get a quote of your
            service free of charge
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          "&.Mui-expanded": {
            background: "#F7F8FC",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            {" "}
            How long does it take to get requested service ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.3rem",
            }}
          >
            Service delivery can vary by order size and event type, kindly send
            us a quote and we will be sure to include an estimated delivery time
            in our reply
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
