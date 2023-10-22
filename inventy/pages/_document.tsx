import CustomNavbar from "@/component/molecules/CustomNavbar";
import Footer from "@/component/molecules/Footer";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <CustomNavbar />
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
