import Appnav from "./components/Appnav";
import Section_AboutUs from "./components/Section_AboutUs";
import Section_ScrollingNotice from "./components/Section_ScrollingNotice";
import Section__Hero from "./components/Section__Hero";

function App() {
  return (
    <>
      <Appnav />
      <Section__Hero />
      <Section_ScrollingNotice />
      <div className="grid grid-cols-12 gap-5 p-5">
        <Section_AboutUs />
      </div>
    </>
  );
}

export default App;
