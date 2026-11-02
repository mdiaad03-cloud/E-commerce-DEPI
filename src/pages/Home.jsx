import Header from "../components/layouts/Header";
import FlashSales from "../components/home/FlashSales";
function Home() {
  return (
    <>
      <Header />
      <div className="py-8">
        <FlashSales />
      </div>
    </>
  );
}
export default Home;