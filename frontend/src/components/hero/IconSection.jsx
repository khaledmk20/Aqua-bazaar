import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function IconSection() {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        sx={{ flexWrap: "wrap" }}
      >
        <MyBox
          icon={<ElectricBolt />}
          title={"Fast Delivery"}
          subtitle={"Start from $10"}
        />
        <MyBox
          icon={<CreditScoreOutlined />}
          title={"Money Guarantee"}
          subtitle={"7 Day Back"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined />}
          title={"365 Days"}
          subtitle={"For free return"}
        />
        <MyBox
          icon={<AccessAlarmOutlined />}
          title={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

export default IconSection;

function MyBox({ icon, title, subtitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}

      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
