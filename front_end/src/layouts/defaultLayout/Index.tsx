//**Import lib*/
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//**Import component*/
import Header from "~/layouts/components/header/Header";
import Footer from "~/layouts/components/Footer";
import SideBar from "~/layouts/components/sidebar/Sidebar";
function DefaultLayout({ children }: any) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={5} sm={4} md={3} lg={2}>
            <SideBar />
          </Grid>
          <Grid item xs={7} sm={8} md={9} lg={10}>
            <Header />
            {children}
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DefaultLayout;
