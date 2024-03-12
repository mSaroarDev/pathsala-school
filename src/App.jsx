import Appnav from "./components/Appnav";
import Section_DistrictEductionMinister from "./components/DistrictEducationMinister";
import Section__MujibCornerPicture from "./components/MujibPicture";
import Section_AboutUs from "./components/Section_AboutUs";
import Section_Achievement from "./components/Section_Achievement";
import Section_HeadTeacher from "./components/Section_HeadTeacher";
import Section_Notice from "./components/Section_Notice";
import Section_President from "./components/Section_President";
import Section_ScrollingNotice from "./components/Section_ScrollingNotice";
import Section__Hero from "./components/Section__Hero";
import Section__NationalAunthem from "./components/Section__NationalAunthem";

function App() {
  return (
    <>
      <Appnav />
      <Section__Hero />
      <Section_ScrollingNotice />
      <div className="grid grid-cols-12 gap-5 p-5 w-full max-w-7xl mx-auto">
        <Section_AboutUs />
        <Section__NationalAunthem />
        <Section__MujibCornerPicture />
        <Section_DistrictEductionMinister />
        <Section_President />
        <Section_HeadTeacher />
        <Section_Achievement />
        <Section_Notice />
      </div>
    </>
  );
}

export default App;
