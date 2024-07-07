import { Button } from "@mui/material";

interface CustomButtonProps {
  title: string;
  variant?: "text" | "outlined" | "contained";
  sx?: React.CSSProperties;
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant,
  sx,
  href,
}) => {
  const defaultSx: React.CSSProperties = {
    textTransform: "none",
    borderRadius: "1rem",
    fontSize: "1.3rem",
    backgroundColor: "green",
    color: "#fff",
    padding: "1rem 3rem",
    fontWeight: 600,
    ...sx,
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button variant={variant} sx={defaultSx}>
          {title}
        </Button>
      </a>
    );
  }

  return (
    <Button variant={variant} sx={defaultSx}>
      {title}
    </Button>
  );
};

export default CustomButton;
