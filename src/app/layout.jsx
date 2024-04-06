import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cuddle",
  description:
    "Cuddle Realty is at the forefront of transforming the real estate coownership landscape, offering a groundbreaking platform that empowers investors to unlock the potential of shared property ownership",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
