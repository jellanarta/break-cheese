import Jumbotron from "./components/Jumbotron/Jumbotron";
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
    <Menu/>
    <Jumbotron/>
    <Services/>
    <Products/>
    </>
  );
}
