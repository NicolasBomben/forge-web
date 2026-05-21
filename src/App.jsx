import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./Pages/Layout";

export const App = () => {
  return (
    <>
      <Layout />
      <Analytics />
    </>
  );
};
