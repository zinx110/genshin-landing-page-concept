// These styles apply to every route in the application
import Appbar from "@/componenets/Libs/Appbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000721] flex flex-col items-center">
        <Appbar />
        <div className="absolute w-full top-0 ">{children}</div>
      </body>
    </html>
  );
}
