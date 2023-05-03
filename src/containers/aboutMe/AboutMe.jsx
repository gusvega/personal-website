
import { useState } from "react"
import AboutMe from "./Home";
import Resume from "./Resume";

const Home = () => {

   let [menuItems, setMenuItems] = useState({
      home: {
         container: <AboutMe></AboutMe>,
         name: 'home'
      },
      resume: {
         name: 'resume',
         container: <Resume></Resume>
      }
   })



   let [selectedItem, setSelectedItem] = useState(
      menuItems.home.name
   );

   const handleItemClick = (item) => {
      setSelectedItem(item);
   };

   let message = 'App is still being developed. Some things might not work as expected. I openly have it live so the progress can be seen by interested people.'


   return (
      <div className=' h-screen w-full flex flex-col bg-slate-100'>
         <div className="flex flex-row justify-between mt-10 pl-4">
            <div className="flex items-center">
               {Object.entries(menuItems).map(([key, value]) => {
                  return (
                     <div
                        key={value.name}
                        className={`p-3 justify-center font-light text-gray-600 hover:bg-slate-200  ${selectedItem === key ? "active" : ""
                           } ${selectedItem === key
                              ? "bg-white active:bg-slate-100"
                              : "bg-slate-200"
                           }}`}
                        onClick={() => handleItemClick(key)}
                     >{key}</div>
                  )
               })}
            </div>
         </div>
         {selectedItem === "resume" ? menuItems.resume.container : ""}
         {selectedItem === "home" ? menuItems.home.container : ""}
      </div>
   )
}

export default Home