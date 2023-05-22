
import { useState } from "react"
import AboutMe from "./Home";
import Resume from "./Resume";
import Vreat from "./Projects/Vreat";
import Pipeline from "./Projects/Pipeline";

const Projects = () => {

   let [menuItems, setMenuItems] = useState({
      vreat: {
         container: <Vreat/>,
         name: 'VREAT'
      },
      pipeline: {
         name: 'Pipeline',
         container: <Pipeline/>
      },
      // projects: {
      //    name: 'Projects',
      //    container: <div>Three</div>
      // }
   })



   let [selectedItem, setSelectedItem] = useState(
      menuItems.vreat.name
   );

   const handleItemClick = (item) => {
      setSelectedItem(item);
   };

   let message = 'App is still being developed. Some things might not work as expected. I openly have it live so the progress can be seen by interested people.'


   return (
      <div className=' h-screen w-full flex flex-col '>

         <div className="flex flex-row justify-between ml-4 bg-slate-100">
            <div className="flex items-center m-2">
               {Object.entries(menuItems).map(([key, value]) => {
                  return (
                     <div
                        key={value.name}
                        className={`p-2 justify-center font-light text-xs text-gray-600 hover:bg-slate-200  ${selectedItem.toLowerCase() === key ? "active" : ""
                           } ${selectedItem.toLowerCase() === key
                              ? "bg-slate-200 active:bg-white"
                              : "bg-slate-100"
                           }}`}
                        onClick={() => handleItemClick(key)}
                     >{value.name}</div>
                  )
               })}
            </div>
         </div>
         
         {selectedItem.toLowerCase() === "pipeline" ? menuItems.pipeline.container : ""}
         {selectedItem.toLowerCase() === "vreat" ? menuItems.vreat.container : ""}
         {selectedItem.toLowerCase() === "projects" ? menuItems.projects.container : ""}
      </div>
   )
}

export default Projects