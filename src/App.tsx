import MetaPixel from '../src/components/MetaPixel';
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { Layout } from "./Pages/Layout";

export const App = () => {
  return (
    <>
      <MetaPixel />
      <ToastContainer
      />
      <Layout />
      <Analytics/>
    </>
  );
};
