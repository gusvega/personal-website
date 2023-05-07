import React, { useState } from 'react';

function AnalysisModal({ isOpen, onClose, data }) {
   const showHideClassName = isOpen ? "block" : "hidden";

   let menuItems = {
      propertyInfo: {
         name: 'Property',
         displayValues: [
            'address',
            'city',
            'state',
            'zipCode',
            'bedrooms',
            'baths',
            'squareFeet',
            'yearBuilt',
            'otherInfo',
         ]
      },
      purchaseInfo: {
         name: 'Purchase',
         displayValues: [
            'askingPrice',
            'offerPrice',
            'downPaymentPercent',
            'estimatedClosingCostPercentage',
            'renovationCosts',
            'setupCosts'
         ]
      },
      incomeInfo: {
         name: 'Income',
         displayValues: [
            'averageNightlyRate',
            'averageOccupancyPercentage',
         ]
      },
      expensesInfo: {
         name: 'Expenses',
         displayValues: [
            'loanTermInYears',
            'interestRatePercentage',
            'estimatedPropertyTaxesPerMonth',
            'estimatedInsuranceAmountPerMonth',
            'privateMortgageInsuranceAmountPerMonth',
            'monthlyHOAAmount',
            'estimatedMonthlyUtilitiesAmount',
            'cleaningFeeAmountPerMonth',
            'internetBillPerMonth',
            'maintenancePercentagePerMonth',
            'managementFeePercentagePerMonth',
         ]
      }
   }

   let [selectedItem, setSelectedItem] = useState('propertyInfo')
   let [toggleEdit, setToggleEdit] = useState(false)

   const handleItemClick = (item) => {
      setSelectedItem(item);
   };

   const handleToggleEdit = () => {
      setToggleEdit(!toggleEdit);
   };

   return (
      <div className={`${showHideClassName} fixed z-10 inset-0`}>
         <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-md w-full">
               <div className="bg-gray-200 text-gray-700 py-3 px-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">Analysis Modal Title</h2>
                  <div className="bg-gray-200 py-2 px-4 flex justify-end">
                     <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={handleToggleEdit}>Edit</button>
                     <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>

                  </div>
               </div>

               <div>
                  <div className="flex flex-row justify-between mt-10 pl-4">
                     <div className="flex items-center bg-slate-00">
                        {Object.entries(menuItems).map(([key, value]) => {
                           return (
                              <>
                                 <div
                                    key={value.name}
                                    className={`p-3 justify-center font-light text-gray-600 hover:bg-slate-300  ${selectedItem === key ? "active" : ""
                                       } ${selectedItem === key
                                          ? "bg-white active:bg-white"
                                          : "bg-slate-200"
                                       }}`}
                                    onClick={() => handleItemClick(key)}
                                 >{value.name}</div>
                              </>
                           )
                        })}
                     </div>
                  </div>

                  <div className='bg-white pl-4 ml-4 p-2'>
                     {menuItems[selectedItem].displayValues.map(el => {
                        return (
                           <>
                              <div key={el} className='p-1 flex text-xs'>
                                 <div className='mr-3'>{el.split(/(?=[A-Z])/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</div>
                                 {data 
                                 ? toggleEdit 
                                    ? <input name={el} value={data[el]} placeholder='Enter text here' />
                                    : <p>{data[el]}</p> 
                                 : ''}
                              </div>
                           </>
                        )
                     })}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AnalysisModal;
