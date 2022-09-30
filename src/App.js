import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Dashbord", src: "chart_fill" },
    { title: "Inbox", src: "inbox" },
    { title: "Accounts", src: "user", gap: true },
    { title: "Schedules", src: "calendar" },
    { title: "Search", src: "search" },
    { title: "Analytics", src: "chart" },
    { title: "Files", src: "folder", gap: true },
    { title: "Settings", src: "setting" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 w-72 h-screen  p-5 pt-8 bg-dark-purple relative`}
      >
        <img
          onClick={() => setOpen(!open)}
          src="/arrow.png"
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${
            !open && "rotate-180"
          }`}
        />
        <div
          className="
        flex gap-x-4 items-center"
        >
          <img
            src="/favicon.ico"
            alt=""
            className={`cursor-pointer duration-500`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 light-white rounded-md ${
                menu.gap ? "mt-9" : "ml-2"
              }`}
            >
              {/* <img src={`./src/assets/${menu.src}.png`} alt="" /> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        Home page
      </div>
    </div>
  );
}

export default App;
