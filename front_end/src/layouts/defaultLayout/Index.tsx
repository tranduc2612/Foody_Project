//**Import lib*/
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//**Import component*/
import Header from "~/layouts/components/header/Header";
import Footer from "~/layouts/components/Footer";
import SideBar from "~/layouts/components/sidebar/Sidebar";
function DefaultLayout({children}: any) {
    return ( <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10}>
                    <Header />
                    {children}
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    </> );
}

export default DefaultLayout;