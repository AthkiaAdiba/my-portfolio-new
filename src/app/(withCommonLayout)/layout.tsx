import Footer from "@/myComponents/shared/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne",
  description:
    "Athkia Adiba Tonne – a passionate Full-Stack developer specializing in Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Crafting dynamic and scalable web applications with a focus on performance and user experience.",
};

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
