import VegaDigital from "@/containers/vegaDigital/VegaDigital";
import Home from "@/containers/aboutMe/AboutMe";
import { useContext, useState } from "react";
import AppContext from "@/AppContext";
import AuthModal from "./auth/AuthModal";

const MainLayout = () => {
  const { globalUserState, updateGlobalUserState } = useContext(AppContext);

  let [mainMenuItems, setMainMenuItems] = useState({
    home: {
      name: "About Me",
      container: <Home />,
      menuIcon: "fa-solid fa-house",
    },
    //  personal: {
    //    name: "Personal",
    //    subMenu: {
    //      musicProduction: ["Music", "fa-solid fa-music"],
    //      travels: ["Travels", "fa-solid fa-plane"],
    //    },
    //    container: <Personal />,
    //    menuIcon: "fa-solid fa-user",
    //  },
    //  career: {
    //    name: "Career",
    //    subMenu: {
    //      resume: ["Resume", "fa-solid fa-file"],
    //    },
    //    container: <Career />,
    //    menuIcon: "fa-solid fa-code",
    //  },
    business: {
      name: "Vega Digital",
      subMenu: {
        realState: ["Real Estate", "fa-solid fa-building"],
        vegaDigital: ["Analysis Tools", "fa-solid fa-chart-simple"],
      },
      container: <VegaDigital />,
      menuIcon: "fa-solid fa-laptop",
    },
  });

  let [selectedItem, setSelectedItem] = useState(Object.keys(mainMenuItems)[0]);

  let [selectedSubItem, setSelectedSubItem] = useState("");
  // console.log(selectedSubItem);

  const [showDiv, setShowDiv] = useState(false);

  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    toggleDiv(!showDiv);
  };

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const collapseMenu = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <container className="hidden sm:flex">
        <div
          className={`h-screen flex flex-col items-left justify-left ${
            !menuCollapsed ? "w-60" : "w-30"
          } `}
        >
          <div
            className=" p-5 flex justify-center items-center"
            onClick={toggleDiv}
          >
            <button
              className=" text-white rounded justify-center items-center"
              onClick={toggleDiv}
            >
              <p
                className={`text-black font-extrabold text-2xl ${
                  !menuCollapsed
                    ? "transform rotate-90 duration-300 ease-in-out"
                    : "transform duration-300 ease-in-out"
                }`}
                onClick={collapseMenu}
              >
                |
              </p>
            </button>
          </div>
          <div className=" w-full h-screen items-center text-left flex">
            <div className="w-full ">
              {Object.entries(mainMenuItems).map(([key, value]) => {
                return (
                  <>
                    <div
                      key={value.name}
                      className={`p-3 justify-center hover:bg-slate-200  ${
                        selectedItem === key ? "active" : ""
                      } ${
                        selectedItem === key
                          ? "bg-slate-100 active:bg-slate-100"
                          : "bg-slate-200"
                      }}`}
                      onClick={() => handleItemClick(key)}
                    >
                      <div
                        className={`${
                          selectedItem === key ? "font-bold " : ""
                        } `}
                      >
                        {!menuCollapsed ? (
                          <div className="flex flex-row justify-center items-center">
                            <div>{value.name}</div>
                          </div>
                        ) : (
                          <div className="flex m-1 justify-center">
                            <div className={`${value.menuIcon} `} />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {!menuCollapsed ? (
            /* <div className="flex items-center justify-start m-4">
              <div className="bg-black rounded-full w-8 h-8"></div>
              <div className="ml-3 mr-3 font-light text-gray-500">
                <div>User Name</div>
              </div>
            </div> */

            <div className="flex items-center justify-start m-4">
              <button
                className="bg-white border-2 border-black font-light rounded-full w-full h-8"
                onClick={toggleModal}
              >
                {" "}
                Sign In{" "}
              </button>
              <AuthModal isOpen={isOpen} onClose={toggleModal} />
            </div>
          ) : (
            <div className="flex m-4">
              <div
                className={`bg-white  border-2 border-black fa-solid fa-user rounded-full w-8 h-8 text-center justify-center items-center flex transform ease-in-out transition-all duration-300  ${
                  menuCollapsed ? "ease-in-out" : "ease-in-out"
                }`}
              ></div>
            </div>
          )}
        </div>
        <div className={` ${!menuCollapsed ? "w-11/12" : "w-full"}`}>
          <div>
            {selectedItem === "home" ? mainMenuItems.home.container : ""}
          </div>
          <div>
            {selectedItem === "business"
              ? mainMenuItems.business.container
              : ""}
          </div>
          <div>
            {selectedItem === "career" ? mainMenuItems.career.container : ""}
          </div>
          <div>
            {selectedItem === "personal"
              ? mainMenuItems.personal.container
              : ""}
          </div>
        </div>
      </container>

      {/* MOBILE */}
      <container className="flex sm:hidden">
        <div
          className="fixed top-0 right-0 p-8 flex justify-center items-center  w-3 h-3 "
          onClick={toggleDiv}
        >
          <button className=" text-white rounded justify-center items-center ">
            <p className="text-black font-extrabold text-2xl transform rotate-90 m-auto duration-300 ease-in-out">
              |
            </p>
          </button>
        </div>
        {showDiv && (
          <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 backdrop-blur z-50">
            <div className="fixed top-0 right-0 p-8 flex justify-center items-center h-6">
              <button
                className=" text-white rounded justify-center items-center "
                onClick={toggleDiv}
              >
                <p className="text-black font-extrabold text-2xl transform rotate-180 m-auto duration-300 ease-in-out">
                  |
                </p>
              </button>
            </div>

            <div className=" w-full h-screen items-center text-left flex flex-col justify-center">
              {Object.entries(mainMenuItems).map(([key, value]) => {
                return (
                  <>
                    <div
                      key={value.name}
                      className={`p-3 rounded-md min-h w-full text-center hover:bg-slate-200 ${
                        selectedItem === key ? "active" : ""
                      } ${
                        selectedItem === key
                          ? "bg-slate-100 active:bg-slate-100"
                          : "bg-slate-200"
                      }}`}
                      onClick={() => handleItemClick(key)}
                    >
                      <div
                        className={`${selectedItem === key ? "font-bold" : ""}`}
                      >
                        {value.name}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}

        <div>{selectedItem === "home" ? mainMenuItems.home.container : ""}</div>
        <div>
          {selectedSubItem === "vegaDigital"
            ? mainMenuItems.business.container
            : ""}
        </div>
        <div>
          {selectedItem === "business" ? mainMenuItems.business.container : ""}
        </div>
        <div>
          {selectedItem === "career" ? mainMenuItems.career.container : ""}
        </div>
        <div>
          {selectedItem === "personal" ? mainMenuItems.personal.container : ""}
        </div>
      </container>
    </>
  );
};

export default MainLayout;
