import { Box, Grid, Typography } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SliderImage from "~/components/Slider/Index";
import CardItem from "~/components/CardItem/CardItem";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className="body__page-default">
      <Box>
        <SliderImage>Hello</SliderImage>
      </Box>

      <Box sx={{ marginTop: "10rem" }}>
        <h1>Mừng Bạn Đến Với Yummly</h1>

        <div className={cx("body__home")}>
          <Grid container spacing={3}>
            <Grid item xs={3} lg={3} style={{ maxWidth: "24%" }}>
              <CardItem />
            </Grid>
            <Grid item xs={3} lg={3} style={{ maxWidth: "24%" }}>
              <CardItem />
            </Grid>
            <Grid item xs={3} lg={3} style={{ maxWidth: "24%" }}>
              <CardItem />
            </Grid>
            <Grid item xs={3} lg={3} style={{ maxWidth: "24%" }}>
              <CardItem />
            </Grid>
            <Grid item xs={3} lg={3} style={{ maxWidth: "24%" }}>
              <CardItem />
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default Home;
