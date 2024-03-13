import Appnav from "../components/Appnav";
import Section_Footer from "../components/Section_Footer";

export default function Layout({ children }) {
  return (
    <>
      <Appnav />
      {children}
      <Section_Footer />
    </>
  );
}
