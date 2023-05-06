import AppContext from "@/AppContext";
import Alert from "@/components/Alert";
import AnalysisModal from "@/components/AnalysisModal";
import NewModal from "@/components/NewModal";
import { useContext, useEffect, useState } from "react";

const Dashboard = () => {

   const { globalUserState, setGlobalUserState } = useContext(AppContext)


   // let [analysis, setAnalysis] = useState({
   //    propertyInfo: {
   //       address: '4728 Avenida La Manana',
   //       city: 'Joshua Tree',
   //       state: 'CA',
   //       zipCode: 92252,
   //       bedrooms: 1,
   //       baths: 1,
   //       squareFeet: 391,
   //       yearBuilt: 2021,
   //       otherInfo: ''
   //    },
   //    purchaseInfo: {
   //       askingPrice: 295000,
   //       offerPrice: 295000,
   //       downPaymentPercent: 10,
   //       downPaymentAmount: 29500,
   //       estimatedClosingCostPercentage: 3,
   //       estimatedClosingCostAmount: 8850,
   //       RenovationCosts: 0,
   //       setupCosts: 0
   //    },
   //    incomeInfo: {
   //       grossIncomePerYear: 63360,
   //       grossIncomePerMonth: 5280,
   //       averageNightlyRate: 180,
   //       averageOccupancyPercentage: 80,
   //       netOperatingIncome: 39067,
   //       capRatePercentage: 13.24,
   //       cashFlowPerYear: 26060,
   //       cashFlowPerMonth: 2171,
   //    },
   //    expensesInfo: {
   //       mortgageAmount: 265500,
   //       loanTermInYears: 30,
   //       numberOfPayments: 360,
   //       interestRatePercentage: 2.750,
   //       monthlyPrinciplePlusInterest: 1083,
   //       estimatedPropertyTaxesPerYear: 3552,
   //       estimatedPropertyTaxesPerMonth: 296,
   //       estimatedInsuranceAmountPerYear: 660,
   //       estimatedInsuranceAmountPerMonth: 55,
   //       privateMortgageInsuranceAmountPerYear: 1032,
   //       privateMortgageInsuranceAmountPerMonth: 86,
   //       monthlyHOAAmount: 0,
   //       estimatedMonthlyUtilitiesAmount: 250,
   //       airBNBFeePercentagePerYear: 1900,
   //       airBNBFeePercentagePerMonth: 158,
   //       cleaningFeeAmountPerMonth: 900.00,
   //       internetBillPerMonth: 60.00,
   //       maintenancePercentagePerMonth: 5,
   //       maintenanceAmountPerMonth: 219,
   //       managementFeePercentagePerMonth: 0,
   //       managementFeeAmountPerMonth: 0,
   //       operatingExpensesPerYear: 24292,
   //       operatingExpensesPerMonth: 2024,
   //       totalExpensesPerYear: 37299,
   //       totalExpensesPerMonth: 3108
   //    }
   // })

   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => {
      setIsOpen(!isOpen);
   }

   const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState('')

   const toggleAnalysisModal = (id) => {
      setSelectedItem(id)
      setIsAnalysisOpen(!isAnalysisOpen);
   }

   const deleteAnalysis = (id) => {
      const updatedAnalyses = { ...globalUserState };
      // console.log('---',updatedAnalyses)
      delete updatedAnalyses.analyses[id];
      setGlobalUserState({
         ...updatedAnalyses
      })
      // console.log('+++++',updatedAnalyses)
   }


   return (
      <>
      <div className="bg-white h-full hidden sm:flex flex-col">
         <div className="p-5 mt-6 font-light text-lg text-gray-600">Vega Real Estate Analysis Tool</div>
         <div className=" h-auto items-start justify-start w-auto flex m-5">
            <div className=" shadow-md p-3 bg-slate-100">
               <div className="font-light text-gray-500">Short Term Property Analysis</div>
               <div className="flex justify-start items-center my-3">
                  <div className="flex justify-between items-center">
                     <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" onClick={toggleModal}>
                        +
                     </button>
                     <NewModal isOpen={isOpen} onClose={toggleModal} />
                  </div>
               </div>
               <div class="bg-white shadow-md rounded-md">
                  <table class="w-full table-auto">
                     <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-xs">
                           <th class="bg-slate-300 px-2 text-left">Address</th>
                           <th class="px-2 text-left">Total Investment</th>
                           <th class="bg-slate-300 px-2 text-center">Cash on Cash</th>
                           <th class="px-2 text-left">Gross Income / Year</th>
                           <th class="bg-slate-300 px-2 text-left">Gross Income / Month</th>
                           <th class="px-2 text-center">Cash Flow / Year</th>
                           <th class="bg-slate-300 px-2 text-center">Cash Flow / Month</th>
                           <th class="px-2 text-center">Total Expenses / Year</th>
                           <th class="bg-slate-300 px-2 text-center">Total Expenses / Month</th>
                           <th class="px-2 text-center">Actions</th>
                        </tr>
                     </thead>
                     <tbody class="text-gray-600 text-sm font-light">
                        {!globalUserState.analyses ? '' : Object.entries(globalUserState.analyses).map(([key, value]) => {
                           return (
                              <tr class="border-b border-gray-200 hover:bg-gray-100">
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap cursor-pointer hover:text-indigo-600" onClick={() => toggleAnalysisModal(key)}>{value.address}</td>
                                 <td class="py-3 px-6 text-center whitespace-nowrap">{value.totalInvestment}</td>
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap">{value.cashOnCashReturn}</td>
                                 <td class="py-3 px-6 text-center whitespace-nowrap">{value.grossIncomePerYear}</td>
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap">{value.grossIncomePerMonth}</td>
                                 <td class="py-3 px-6 text-center whitespace-nowrap">{value.cashFlowPerYear}</td>
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap">{value.cashFlowPerMonth}</td>
                                 <td class="py-3 px-6 text-center whitespace-nowrap">{value.totalExpensesPerYear}</td>
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap">{value.totalExpensesPerMonth}</td>
                                 <td class="text-center">
                                    <a href="#" class="text-gray-500 hover:text-indigo-600 mr-2" onClick={() => { }}>
                                       <i class="fas fa-edit"></i>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-indigo-600 mr-2" onClick={() => deleteAnalysis(key)}>
                                       <i class="fas fa-trash"></i>
                                    </a>
                                    {/* <a href="#" class="text-gray-500 hover:text-indigo-600 mr-2">
                                       <i class="fas fa-download"></i>
                                    </a> */}
                                 </td>
                              </tr>
                           )
                        })}
                        <AnalysisModal isOpen={isAnalysisOpen} onClose={toggleAnalysisModal} data={globalUserState.analyses[selectedItem]}></AnalysisModal>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div >

      {/* MOBILE */}
      <div className="bg-white h-full flex flex-col sm:hidden">
         <div className="p-5 mt-6 font-light text-lg text-gray-600">Vega Real Estate Analysis Tool</div>
         <div className=" h-auto items-start justify-start w-auto flex">
            <div className=" shadow-md bg-slate-100">
               <div className="font-light text-gray-500">Short Term Property Analysis</div>
               <div className="flex justify-start items-center my-3">
                  <div className="flex justify-between items-center">
                     <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" onClick={toggleModal}>
                        +
                     </button>
                     <NewModal isOpen={isOpen} onClose={toggleModal} />
                  </div>
               </div>
               <div class="bg-white shadow-md rounded-md">
                  <table class="w-full table-auto">
                     <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-xs">
                           <th class="bg-slate-300 px-2 text-left">Address</th>
                           <th class="px-2 text-left">Total Investment</th>
                           <th class="bg-slate-300 px-2 text-center">Cash on Cash</th>
                           <th class="px-2 text-center">Cash Flow / Year</th>
                           <th class="px-2 text-center">Actions</th>
                        </tr>
                     </thead>
                     <tbody class="text-gray-600 text-sm font-light">
                        {!globalUserState.analyses ? '' : Object.entries(globalUserState.analyses).map(([key, value]) => {
                           return (
                              <tr class="border-b border-gray-200 hover:bg-gray-100">
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap cursor-pointer hover:text-indigo-600" onClick={() => toggleAnalysisModal(key)}>{value.address}</td>
                                 <td class="py-3 px-6 text-center whitespace-nowrap">{value.totalInvestment}</td>
                                 <td class="bg-slate-100 py-3 px-6 text-center whitespace-nowrap">{value.cashOnCashReturn}</td>
                                 <td class="py-3 px-6 text-center whitespace-nowrap">{value.cashFlowPerYear}</td>
                                 <td class="text-center">
                                    <a href="#" class="text-gray-500 hover:text-indigo-600 mr-2" onClick={() => { }}>
                                       <i class="fas fa-edit"></i>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-indigo-600 mr-2" onClick={() => deleteAnalysis(key)}>
                                       <i class="fas fa-trash"></i>
                                    </a>
                                    {/* <a href="#" class="text-gray-500 hover:text-indigo-600 mr-2">
                                       <i class="fas fa-download"></i>
                                    </a> */}
                                 </td>
                              </tr>
                           )
                        })}
                        <AnalysisModal isOpen={isAnalysisOpen} onClose={toggleAnalysisModal} data={globalUserState.analyses[selectedItem]}></AnalysisModal>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div >
      </>
   )
}

export default Dashboard