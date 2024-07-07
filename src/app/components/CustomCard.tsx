import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box, SxProps } from "@mui/system";

interface CustomCardProps {
  src: any;
  title: string;
  content: string;
  sx?: SxProps;
  typographySx?: SxProps;
}

const CustomCard: React.FC<CustomCardProps> = ({
  src,
  title,
  content,
  sx,
  typographySx,
}) => {
  return (
    <Card variant="outlined" sx={{ height: 300, ...sx }}>
      <CardHeader
        avatar={
          <Image
            src={src}
            width={45}
            height={40}
            alt="image"
            style={{
              borderRadius: "50%",
            }}
          />
        }
        title={
          <Typography variant="h4" component="div">
            <Box
              sx={{
                fontWeight: "600",
              }}
            >
              {title}
            </Box>
          </Typography>
        }
      />
      <CardContent
        sx={{
          width: "100%",
        }}
      >
        <Typography
          color="text.secondary"
          sx={{
            width: "100%",
            textAlign: "justify",
            ...typographySx, // Apply the custom Typography styles here
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
