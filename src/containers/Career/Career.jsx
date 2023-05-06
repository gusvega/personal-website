
import { useState } from "react"
import AboutMe from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";

const Home = () => {

   let [menuItems, setMenuItems] = useState({
      home: {
         container: <AboutMe></AboutMe>,
         name: 'Home'
      },
      resume: {
         name: 'Resume',
         container: <Resume></Resume>
      },
      projects: {
         name: 'Projects',
         container: <Projects/>
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
      <div className=' h-screen w-full flex flex-col bg-white'>

         <div className="flex flex-row justify-between mt-10 pl-4">
            <div className="flex items-center">
               {Object.entries(menuItems).map(([key, value]) => {
                  return (
                     <div
                        key={value.name}
                        className={`p-3 justify-center font-light text-gray-600 hover:bg-slate-200  ${selectedItem.toLowerCase() === key ? "active" : ""
                           } ${selectedItem.toLowerCase() === key
                              ? "bg-slate-100 active:bg-white"
                              : "bg-slate-200"
                           }}`}
                        onClick={() => handleItemClick(key)}
                     >{value.name}</div>
                  )
               })}
            </div>
         </div>
         
         {selectedItem.toLowerCase() === "resume" ? menuItems.resume.container : ""}
         {selectedItem.toLowerCase() === "home" ? menuItems.home.container : ""}
         {selectedItem.toLowerCase() === "projects" ? menuItems.projects.container : ""}
      </div>
   )
}

export default Home