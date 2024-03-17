import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/About";
import HeadTeacher from "./pages/HeadTeacher";
import ExHeadTeacher from "./pages/ExHeadTeacher";
import Teachers from "./pages/Teachers";
import ManagingCommittee from "./pages/ManagingCommittee";
import OfficeStaffPage from "./pages/OfficeStaff";
import NoticesPage from "./pages/Notices";
import EventsPage from "./pages/Events";
import AdmissionPage from "./pages/Admission";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route
              path="/administration/head-teacher"
              element={<HeadTeacher />}
            />
            <Route
              path="/administration/old-head-teachers"
              element={<ExHeadTeacher />}
            />
            <Route
              path="/administration/managing-committee"
              element={<ManagingCommittee />}
            />
            <Route
              path="/administration/office-staffs"
              element={<OfficeStaffPage />}
            />

            <Route path="/administration/teachers" element={<Teachers />} />
            <Route path="/notice/notices" element={<NoticesPage />} />
            <Route path="/notice/events" element={<EventsPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
