import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import PremiumMens from "./components/PremiumMens";
import FootLocker from "./components/FootLocker";
import Description from "./components/Description";
import Related from "./components/Related";
import MyFooter from "./components/MyFooter";
import Add from "./components/Add";

function App() {
  return (
    <>
     <Add/>
      <MyNav />
      <PremiumMens />
      <FootLocker />
      <Description />
      <Related />
      <MyFooter />
    </>
  );
}

export default App;
