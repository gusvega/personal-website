import AppContext from "@/AppContext";
import Alert from "@/components/Alert";
import AnalysisModal from "@/components/AnalysisModal";
import NewModal from "@/components/NewModal";
import { useContext, useEffect, useState } from "react";

const Home = () => {




   return (
      <div className="bg-white ml-4 h-full">
      <div className="ml-4">
         <div className="p-5 mt-6 font-light text-6xl text-gray-600">Vega Digital : <span className="text-3xl">Global Real Estate Data Resource</span></div>
         <div className=" h-auto justify-start w-auto flex items-center">
            <span className="text-3xl mr-2">Goal : </span> Organize and make the world's real estate data accessible to everyone.
         </div>
         <br></br>
         <div className=" h-auto items-start justify-start w-auto flex">
            I aim to collect, analyze, and share real estate data from different markets around the world to help industry professionals and investors make informed decisions.
            <br></br>
            By offering up-to-date and accurate data, I strive to create a more transparent and efficient real estate market for everyone. One of my goals is to become the go-to source
            <br></br>
            for real estate data worldwide by providing a comprehensive and reliable data warehouse. We specialize in developing and providing innovative real estate technologies and tools
            <br></br>
            with a mission to revolutionize the way people buy, sell, and invest in real estate around the globe.
         </div>

         <br></br>
         <div>Products I will be building: </div>
         <ul>
            <li>- Centralized Real Estate Data : </li>
            <li>- Property Investment Tools : </li>
            <li>- Real Estate Monitoring :</li>
            <li>- Real Estate Trend Data Analysis :</li>
            <li>- Data Visualization : </li>
            <li>- AI Chat Assistant :</li>

         </ul>
         </div>
      </div>
   )
}

export default Home