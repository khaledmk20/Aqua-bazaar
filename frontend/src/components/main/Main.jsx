import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../redux/product";

function Main() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAlignment = (event, newValue) => {
    setMyData(newValue);
  };

  const allProductsAPI = "products?populate=*";
  const menProductsAPI =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenProductsAPI =
    "products?populate=*&filters[productCategory][$eq]=women";

  const [myData, setMyData] = useState(allProductsAPI);

  const { data, isLoading } = useGetProductByNameQuery(myData);
  return (
    <Container sx={{ py: 9, position: "relative" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="my-button"
            value={allProductsAPI}
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="my-button"
            value={menProductsAPI}
            aria-label="centered"
          >
            MEN category
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="my-button"
            value={womenProductsAPI}
            aria-label="right aligned"
          >
            WOMEN category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "(-50%,-50%)",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`${item.attributes.productImg.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography>{item.attributes.productDescription}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large "
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />{" "}
                    add to cart
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })
        )}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            position: "absolute",
            right: 10,
            top: 0,
          }}
        >
          <Close />
        </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  );
}

export default Main;
