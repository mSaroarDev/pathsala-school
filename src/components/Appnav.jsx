const Appnav = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-base-100 hind-siliguri-regular">
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
                  <a>হোম</a>
                </li>
                <li>
                  <a>সম্পর্কে</a>
                </li>
                <li>
                  <a>অ্যাডমিনিস্ট্রেশন</a>
                  <ul className="p-2">
                    <li>
                      <a>প্রধান শিক্ষক</a>
                    </li>
                    <li>
                      <a>প্রাক্তন প্রধান শিক্ষক</a>
                    </li>
                    <li>
                      <a>সহকারী শিক্ষকগন</a>
                    </li>
                    <li>
                      <a>ম্যনেজিং কমিটি</a>
                    </li>
                    <li>
                      <a>অফিস স্টাফগন</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>নোটিশ</a>
                  <ul className="p-2">
                    <li>
                      <a>নোটিশ</a>
                    </li>
                    <li>
                      <a>ইভেন্ট সমূহ</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>অ্যাডমিশন</a>
                </li>
                <li>
                  <a>ফলাফল</a>
                </li>
                <li>
                  <a>যোগাযোগ</a>
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
                <a>হোম</a>
              </li>
              <li>
                <a>সম্পর্কে</a>
              </li>
              <li>
                <details>
                  <summary>অ্যাডমিনিস্ট্রেশন</summary>
                  <ul className="p-2 w-[200px]">
                    <li>
                      <a>প্রধান শিক্ষক</a>
                    </li>
                    <li>
                      <a>প্রাক্তন প্রধান শিক্ষক</a>
                    </li>
                    <li>
                      <a>সহকারী শিক্ষকগন</a>
                    </li>
                    <li>
                      <a>ম্যনেজিং কমিটি</a>
                    </li>
                    <li>
                      <a>অফিস স্টাফগন</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>নোটিশ</summary>
                  <ul className="p-2 w-[200px]">
                    <li>
                      <a>নোটিশ</a>
                    </li>
                    <li>
                      <a>ইভেন্ট সমূহ</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>অ্যাডমিশন</a>
              </li>
              <li>
                <a>ফলাফল</a>
              </li>
              <li>
                <a>যোগাযোগ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="bg-primary text-white px-5 py-2 rounded-md">
              অফিস লগিন
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appnav;
