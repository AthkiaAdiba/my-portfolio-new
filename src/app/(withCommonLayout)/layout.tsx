import Footer from "@/myComponents/shared/Footer";

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
