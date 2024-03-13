import Appnav from "./components/Appnav";
import Section_DistrictEductionMinister from "./components/DistrictEducationMinister";
import Section__MujibCornerPicture from "./components/MujibPicture";
import Section_ImportantLinks from "./components/SectionImportantLinks";
import Section_AboutUs from "./components/Section_AboutUs";
import Section_Achievement from "./components/Section_Achievement";
import Section_Events from "./components/Section_Events";
import Section_HeadTeacher from "./components/Section_HeadTeacher";
import Section_Notice from "./components/Section_Notice";
import Section_OfficeStaffs from "./components/Section_OfficeStaffs";
import Section_President from "./components/Section_President";
import Section_ScrollingNotice from "./components/Section_ScrollingNotice";
import Section_Teachers from "./components/Section_Teachers";
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
        <Section_Events />
        <Section_Teachers />
        <Section_OfficeStaffs />
        <Section_ImportantLinks />
      </div>
    </>
  );
}

export default App;
