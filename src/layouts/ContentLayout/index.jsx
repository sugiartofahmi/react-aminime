const ContentLayout = ({
  marginTop = `mt-20`,
  height = `h-full`,
  children,
}) => {
  return (
    <main
      className={`flex flex-col w-full sticky bg-[#EDF0F4] ${height} ${marginTop} justify-center items-center `}
    >
      {children}
    </main>
  );
};

export default ContentLayout;
