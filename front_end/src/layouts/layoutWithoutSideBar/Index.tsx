//**Import lib*/
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//**Import component*/
import Header from "~/layouts/components/header/Header";
import SideBar from "~/layouts/components/sidebar/Sidebar";
import Wrapper from "../components/WrapperBody/Wrapper";
function LayoutWithOutSidebar({ children }: any) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Wrapper>{children}</Wrapper>
      </Box>
    </>
  );
}

export default LayoutWithOutSidebar;
