const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default CommonLayout;
