import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { Layout } from "./Pages/Layout";

export const App = () => {
  return (
    <>
      <ToastContainer
      />
      <Layout />
      <Analytics/>
    </>
  );
};
