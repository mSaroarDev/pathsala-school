import { Link } from "react-router-dom";

const Appnav = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-base-100">
      <main className="px-3">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">হোম</Link>
                </li>
                <li>
                  <Link to="/about-us">সম্পর্কে</Link>
                </li>
                <li>
                  <a>অ্যাডমিনিস্ট্রেশন</a>
                  <ul className="p-2">
                    <li>
                      <Link to="/administration/head-teacher">
                        প্রধান শিক্ষক
                      </Link>
                    </li>
                    <li>
                      <Link to="/administration/old-head-teachers">
                        প্রাক্তন প্রধান শিক্ষক
                      </Link>
                    </li>
                    <li>
                      <Link to="/administration/teachers">সহকারী শিক্ষকগন</Link>
                    </li>
                    <li>
                      <Link to="/administration/managing-committee">
                        ম্যনেজিং কমিটি
                      </Link>
                    </li>
                    <li>
                      <Link to="/administration/office-staffs">
                        অফিস স্টাফগন
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>নোটিশ</a>
                  <ul className="p-2">
                    <li>
                      <Link to="/notice/notices">নোটিশ</Link>
                    </li>
                    <li>
                      <Link to="/notice/events">ইভেন্ট সমূহ</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/admission">অ্যাডমিশন</Link>
                </li>
                <li>
                  <Link to="/results">ফলাফল</Link>
                </li>
                <li>
                  <Link to="/contact">যোগাযোগ</Link>
                </li>
              </ul>
            </div>
            <a href={"/"}>
              <img src="/logo.png" className="w-[100px]" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[15px] font-semibold">
              <li>
                <Link to="/">হোম</Link>
              </li>
              <li>
                <Link to="/about-us">সম্পর্কে</Link>
              </li>
              <li>
                <details>
                  <summary>অ্যাডমিনিস্ট্রেশন</summary>
                  <ul className="p-2 w-[200px]">
                    <li>
                      <Link to="/administration/head-teacher">
                        প্রধান শিক্ষক
                      </Link>
                    </li>
                    <li>
                      <Link to="/administration/old-head-teachers">
                        প্রাক্তন প্রধান শিক্ষক
                      </Link>
                    </li>
                    <li>
                      <Link to="/administration/teachers">সহকারী শিক্ষকগন</Link>
                    </li>
                    <li>
                      <Link to="/administration/managing-committee">
                        ম্যনেজিং কমিটি
                      </Link>
                    </li>
                    <li>
                      <Link to="/administration/office-staffs">
                        অফিস স্টাফগন
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>নোটিশ</summary>
                  <ul className="p-2 w-[200px]">
                    <li>
                      <Link to="/notice/notices">নোটিশ</Link>
                    </li>
                    <li>
                      <Link to="/notice/events">ইভেন্ট সমূহ</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/admission">অ্যাডমিশন</Link>
              </li>
              <li>
                <Link to="/results">ফলাফল</Link>
              </li>
              <li>
                <Link to="/contact">যোগাযোগ</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://pathsala-client.vercel.app/client/dashboard"
              className="bg-primary text-white px-5 py-2 rounded-md"
            >
              অফিস লগিন
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appnav;
