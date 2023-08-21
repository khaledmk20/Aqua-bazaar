import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          color: "HighlightText",
          fontSize: 18,
        }}
      >
        Designed and developed by
        <Link
          target="_blank"
          rel="noreferrer"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            mx: 1.2,
          }}
          href="https://www.linkedin.com/in/khaled-abdelalim-42428b260/"
        >
          khaled abdelalim
        </Link>
        ©2023
      </Typography>
    </Box>
  );
}

export default Footer;
