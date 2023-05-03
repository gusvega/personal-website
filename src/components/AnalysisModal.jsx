import React from 'react';

function AnalysisModal({ isOpen, onClose, data }) {
   const showHideClassName = isOpen ? "block" : "hidden";

   return (
      <div className={`${showHideClassName} fixed z-10 inset-0`}>
         <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-md w-full">
               <div className="bg-gray-200 text-gray-700 py-3 px-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">Analysis Modal Title</h2>
                  <div className="bg-gray-200 py-2 px-4 flex justify-end">
                     <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>
                  </div>
               </div>

               {data ? Object.entries(data).map(([key, value]) => {
                  return (
                     <>
                        <div className='m-2 flex'>
                           <div className='mr-3'>{key}</div>
                           <div>{value}</div>
                        </div>

                     </>
                  )
               })
                  : ''}
            </div>
         </div>
      </div>
   );
}

export default AnalysisModal;
