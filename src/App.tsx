import MetaPixel from '../src/components/MetaPixel';
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./Pages/Layout";

export const App = () => {
  return (
    <>
      <MetaPixel />
      <Layout />
      <Analytics/>
    </>
  );
};
