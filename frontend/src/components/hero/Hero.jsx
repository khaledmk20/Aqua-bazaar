import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@emotion/react";
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];
function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2, pt: 2 }}
      >
        <Swiper
          loop
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h6">
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                  >
                    <Typography sx={{ color: "#333", mr: 1 }} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography sx={{ color: "#D23F57" }} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      bgcolor: "#222",
                      boxShadow: "0px 4px 16px rgba(43,52,69 ,0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69 ,0.1)",
                      },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-17.jpg" alt="pc" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "31px",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                variant="caption"
                sx={{ lineHeight: "16px", color: "#2B3445", mt: 1 }}
              >
                SUMMER
              </Typography>

              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                Sale 20% OFF
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23f57",
                  },
                }}
              >
                Shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-16.jpg" alt="shoes" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "31px",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                GAMING 4K
              </Typography>

              <Typography
                variant="h6"
                sx={{ lineHeight: "16px", color: "#2B3445", mt: 1 }}
              >
                DESKTOPS &
              </Typography>

              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                LAPTOPS
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23f57",
                  },
                }}
              >
                Shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}

export default Hero;
