
import { useState } from "react"
import Dashboard from "./Dasboard";
import Alert from "@/components/Alert";
import Home from "./Home";

const VegaDigital = () => {

   let [menuItems, setMenuItems] = useState({
      home: {
         container: <Home/>,
         name: 'home'
      },
      dashboard: {
         name: 'dashboard',
         container: <Dashboard></Dashboard>
      },
      settings: {},
      profile: {}
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
         <Alert message={message}></Alert>

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
         {selectedItem === "dashboard" ? menuItems.dashboard.container : ""}
         {selectedItem === "home" ? menuItems.home.container : ""}
      </div>
   )
}

export default VegaDigital