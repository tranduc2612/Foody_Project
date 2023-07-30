import Box from "@mui/material/Box";
import Header from "../components/header/Header";
import Wrapper from "~/components/Popper/Wrapper";
import Footer from "../components/Footer";

function LayoutForm({ children }: any) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default LayoutForm;
