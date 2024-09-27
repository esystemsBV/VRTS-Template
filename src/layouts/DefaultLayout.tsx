import { Outlet } from "react-router-dom";
import Foooter from "../components/Footer";
import { Navbar } from "@nextui-org/react";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Foooter />
    </>
  );
};

export default DefaultLayout;
