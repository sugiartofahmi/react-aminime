import Navbar from "../../components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full text-[#516071] h-full font-bold font-montserrat  ">
      <Navbar />
      {children}
    </main>
  );
};
export default MainLayout;
