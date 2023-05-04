import AppContext from '@/AppContext';
import React, { useContext, useState } from 'react';
import pmt from 'formula-pmt'

function NewModal({ isOpen, onClose }) {

   // Global Context
   const { globalUserState, setGlobalUserState } = useContext(AppContext)

   let analysis = {}


   // Property Info State
   const [propertyInfo, setPropertyInfo] = useState({
      address: '3320 Bedford',
      city: 'Amarillo',
      state: 'TX',
      zipCode: 92252,
      bedrooms: 1,
      baths: 1,
      squareFeet: 391,
      yearBuilt: 2021,
      otherInfo: null
   })

   // Purchase Info State
   const [purchaseInfo, setPurchaseInfo] = useState({
      askingPrice: 500000,
      offerPrice: 500000,
      downPaymentPercent: 5,
      estimatedClosingCostPercentage: 3,
      renovationCosts: 0,
      setupCosts: 10000,

      // calculation
      downPaymentAmount: null,
      estimatedClosingCostAmount: null,
      totalInvestment: null
   })

   // Income Info State
   const [incomeInfo, setIncomeInfo] = useState({
      averageNightlyRate: 300,
      averageOccupancyPercentage: 75,

      // calculations
      grossIncomePerMonth: null,
      grossIncomePerYear: null,
      cashFlowPerYear: null,
      cashOnCashReturn: null,
      netOperatingIncome: null,
      capRatePercentage: null,
      cashFlowPerMonth: null,
   })

   // Expenses Info State
   const [expensesInfo, setExpensesInfo] = useState({
      loanTermInYears: 30,
      interestRatePercentage: 6,
      estimatedPropertyTaxesPerMonth: 150,
      estimatedInsuranceAmountPerMonth: 145,
      privateMortgageInsuranceAmountPerMonth: 86,
      monthlyHOAAmount: 0,
      estimatedMonthlyUtilitiesAmount: 300,
      cleaningFeeAmountPerMonth: 500,
      internetBillPerMonth: 100,
      maintenancePercentagePerMonth: 5,
      managementFeePercentagePerMonth: 0,

      // calculations
      mortgageAmount: null,
      numberOfPayments: null,
      monthlyPrinciplePlusInterest: null,
      estimatedPropertyTaxesPerYear: null,
      estimatedInsuranceAmountPerYear: null,
      privateMortgageInsuranceAmountPerYear: null,
      airBNBFeePercentagePerYear: null,
      airBNBFeePercentagePerMonth: null,
      maintenanceAmountPerMonth: null,
      managementFeeAmountPerMonth: null,
      operatingExpensesPerYear: null,
      operatingExpensesPerMonth: null,
      totalExpensesPerYear: null,
      totalExpensesPerMonth: null,
   })

   // Purchase Info Calculations
   const purchaseInfoCalculations = () => {
      const { setupCosts, renovationCosts, estimatedClosingCostPercentage, downPaymentPercent, offerPrice } = purchaseInfo

      const downPaymentAmount = parseInt(offerPrice) * (parseInt(downPaymentPercent) / 100)
      const estimatedClosingCostAmount = parseInt(offerPrice) * (parseInt(estimatedClosingCostPercentage) / 100)
      const totalInvestment = parseInt(setupCosts) + parseInt(renovationCosts) + parseInt(estimatedClosingCostAmount) + parseInt(downPaymentAmount)

      setPurchaseInfo({
         ...purchaseInfo,
         'downPaymentAmount': downPaymentAmount,
         'estimatedClosingCostAmount': estimatedClosingCostAmount,
         'totalInvestment': totalInvestment
      })

   }

   // Income Info Calculations
   const incomeInfoCalculations = () => {
      const { averageNightlyRate, averageOccupancyPercentage } = incomeInfo
      const { cleaningFeeAmountPerMonth, operatingExpensesPerYear, totalExpensesPerMonth } = expensesInfo
      const { offerPrice, totalInvestment } = purchaseInfo

      const grossIncomePerMonth = (((parseInt(averageNightlyRate) * 365) / 12) * (parseInt(averageOccupancyPercentage) / 100)) + cleaningFeeAmountPerMonth
      const grossIncomePerYear = grossIncomePerMonth * 12
      const netOperatingIncome = grossIncomePerYear - operatingExpensesPerYear
      const capRatePercentage = (netOperatingIncome / offerPrice) * 100
      const cashFlowPerMonth = grossIncomePerMonth - totalExpensesPerMonth
      const cashFlowPerYear = cashFlowPerMonth * 12
      const cashOnCashReturn = (Math.floor(cashFlowPerYear / totalInvestment) * 100)

      // // console.log('OTHER VALUES: ', cleaningFeeAmountPerMonth, operatingExpensesPerYear, totalExpensesPerMonth, offerPrice, totalInvestment)
      // // console.log('INPUT VALUES: ', averageNightlyRate, averageOccupancyPercentage)
      // // console.log('CALCULATED VALUES: ',
      grossIncomePerMonth,
         grossIncomePerYear,
         netOperatingIncome,
         capRatePercentage,
         cashFlowPerMonth,
         cashFlowPerYear,
         cashOnCashReturn,
      )

   setIncomeInfo({
      ...incomeInfo,
      grossIncomePerMonth,
      grossIncomePerYear,
      cashFlowPerYear,
      cashOnCashReturn,
      netOperatingIncome,
      capRatePercentage,
      cashFlowPerMonth,
   })

}

// Expenses Info Calculations
const expensesInfoCalculations = () => {
   const {
      loanTermInYears,
      interestRatePercentage,
      estimatedPropertyTaxesPerMonth,
      estimatedInsuranceAmountPerMonth,
      privateMortgageInsuranceAmountPerMonth,
      monthlyHOAAmount,
      estimatedMonthlyUtilitiesAmount,
      cleaningFeeAmountPerMonth,
      internetBillPerMonth,
      maintenancePercentagePerMonth,
      managementFeePercentagePerMonth } = expensesInfo

   const { offerPrice, downPaymentAmount } = purchaseInfo
   const { grossIncomePerMonth, averageNightlyRate, averageOccupancyPercentage } = incomeInfo

   const mortgageAmount = parseInt(offerPrice) - parseInt(downPaymentAmount)
   const numberOfPayments = parseInt(loanTermInYears) * 12
   const monthlyPrinciplePlusInterest = pmt(((parseInt(interestRatePercentage) / 100)) / 12, numberOfPayments, mortgageAmount) * -1
   const estimatedPropertyTaxesPerYear = parseInt(estimatedPropertyTaxesPerMonth) * 12
   const estimatedInsuranceAmountPerYear = parseInt(estimatedInsuranceAmountPerMonth) * 12
   const privateMortgageInsuranceAmountPerYear = parseInt(privateMortgageInsuranceAmountPerMonth) * 12
   const airBNBFeePercentagePerMonth = parseInt(grossIncomePerMonth) * .03
   const airBNBFeePercentagePerYear = parseInt(airBNBFeePercentagePerMonth) * 12
   const maintenanceAmountPerMonth = (((parseInt(averageNightlyRate) * 365) / 12) * (parseInt(averageOccupancyPercentage) / 100)) * (parseInt(maintenancePercentagePerMonth) / 100)
   const managementFeeAmountPerMonth = (((parseInt(averageNightlyRate) * 365) / 12) * (parseInt(averageOccupancyPercentage) / 100)) * (parseInt(managementFeePercentagePerMonth) / 100)

   const operatingExpensesPerMonth = parseInt(estimatedPropertyTaxesPerMonth) + parseInt(estimatedInsuranceAmountPerMonth) + parseInt(privateMortgageInsuranceAmountPerMonth) + parseInt(monthlyHOAAmount) + parseInt(estimatedMonthlyUtilitiesAmount) + parseInt(airBNBFeePercentagePerMonth) + parseInt(cleaningFeeAmountPerMonth) + parseInt(maintenanceAmountPerMonth) + parseInt(internetBillPerMonth) + parseInt(managementFeeAmountPerMonth)
   const operatingExpensesPerYear = parseInt(operatingExpensesPerMonth) * 12
   const totalExpensesPerMonth = parseInt(operatingExpensesPerMonth) + parseInt(monthlyPrinciplePlusInterest)
   const totalExpensesPerYear = parseInt(totalExpensesPerMonth) * 12

   // // console.log('EXPENSES - INPUTS: ', loanTermInYears,
   //    interestRatePercentage,
   //    estimatedPropertyTaxesPerMonth,
   //    estimatedInsuranceAmountPerMonth,
   //    privateMortgageInsuranceAmountPerMonth,
   //    monthlyHOAAmount,
   //    estimatedMonthlyUtilitiesAmount,
   //    cleaningFeeAmountPerMonth,
   //    internetBillPerMonth,
   //    maintenancePercentagePerMonth,
   //    managementFeePercentagePerMonth )

   //    // console.log('OTHER VALUES', offerPrice, downPaymentAmount, grossIncomePerMonth, averageNightlyRate, averageOccupancyPercentage)

   //    // console.log('EXPENSES - CALCS: ', 
   //    mortgageAmount,
   //    numberOfPayments,
   //    monthlyPrinciplePlusInterest,
   //    estimatedPropertyTaxesPerYear,
   //    estimatedInsuranceAmountPerYear,
   //    privateMortgageInsuranceAmountPerYear,
   //    airBNBFeePercentagePerMonth,
   //    airBNBFeePercentagePerYear,
   //    maintenanceAmountPerMonth,
   //    managementFeeAmountPerMonth,

   //    operatingExpensesPerMonth,
   //    operatingExpensesPerYear,
   //    totalExpensesPerMonth,
   //    totalExpensesPerYear,
   //    )

   setExpensesInfo({
      ...expensesInfo,
      mortgageAmount,
      numberOfPayments,
      monthlyPrinciplePlusInterest,
      estimatedPropertyTaxesPerYear,
      estimatedInsuranceAmountPerYear,
      privateMortgageInsuranceAmountPerYear,
      airBNBFeePercentagePerYear,
      airBNBFeePercentagePerMonth,
      maintenanceAmountPerMonth,
      managementFeeAmountPerMonth,
      operatingExpensesPerYear,
      operatingExpensesPerMonth,
      totalExpensesPerYear,
      totalExpensesPerMonth,
   })

}

const purchaseItemsToShow = [
   'askingPrice',
   'offerPrice',
   'downPaymentPercent',
   'estimatedClosingCostPercentage',
   'renovationCosts',
   'setupCosts'
]

const incomeItemsToShow = [
   'averageNightlyRate',
   'averageOccupancyPercentage'
]

const expenseItemsToShow = [
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
   'managementFeePercentagePerMonth'
]

let analysisDisplay = {
   propertyInfo: {
      address: '3320 Bedford',
      city: 'Joshua Tree',
      state: 'CA',
      zipCode: 92252,
      bedrooms: 1,
      baths: 1,
      squareFeet: 391,
      yearBuilt: 2021,
      otherInfo: ''
   },
   purchaseInfo: {
      askingPrice: 500000,
      offerPrice: 500000,
      downPaymentPercent: 5,
      estimatedClosingCostPercentage: 3,
      renovationCosts: 0,
      setupCosts: 10000,
   },
   incomeInfo: {
      averageNightlyRate: 300,
      averageOccupancyPercentage: 75,
   },
   expensesInfo: {
      loanTermInYears: 30,
      interestRatePercentage: 6,
      estimatedPropertyTaxesPerMonth: 150,
      estimatedInsuranceAmountPerMonth: 145,
      privateMortgageInsuranceAmountPerMonth: 86,
      monthlyHOAAmount: 0,
      estimatedMonthlyUtilitiesAmount: 300,
      cleaningFeeAmountPerMonth: 500,
      internetBillPerMonth: 100,
      maintenancePercentagePerMonth: 5,
      managementFeePercentagePerMonth: 0,
   }
}

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
//    },
//    totals: totals
// })




let menuItems = {
   propertyInfo: {
      name: 'Property Information',
      container: Object.entries(analysisDisplay['propertyInfo']).map(([key, value]) => (
         <div className='flex m-2' key={key}>
            <div className='w-1/2'>{key}</div>
            <input
               className='w-1/2'
               onChange={(event) => handleInputChange(setPropertyInfo, propertyInfo, key, event.target.value)}
               value={propertyInfo[key]}
               placeholder={propertyInfo[key] || 'Enter Text Here'}
            />
         </div>
      )),

   },
   purchaseInfo: {
      name: 'Purchase Information',
      container: Object.entries(analysisDisplay['purchaseInfo']).map(([key, value]) => (
         <div className='flex m-2' key={key}>
            <div className='w-1/2'>{key}</div>
            <input
               className='w-1/2'
               onChange={(event) => handleInputChange(setPurchaseInfo, purchaseInfo, key, event.target.value)}
               value={purchaseInfo[key]}
               placeholder={purchaseInfo[key] || 'Enter Text Here'} />
         </div>
      )),
   },
   incomeInfo: {
      name: 'Income Information',
      container: Object.entries(analysisDisplay['incomeInfo']).map(([key, value]) => (
         <div className='flex m-2' key={key}>
            <div className='w-1/2'>{key}</div>
            <input
               className='w-1/2'
               onChange={(event) => handleInputChange(setIncomeInfo, incomeInfo, key, event.target.value)}
               value={incomeInfo[key]}
               placeholder={incomeInfo[key] || 'Enter Text Here'} />
         </div>
      )),
   },
   expensesInfo: {
      name: 'Expenses Information',
      container: Object.entries(analysisDisplay['expensesInfo']).map(([key, value]) => (
         <div className='flex m-2' key={key}>
            <div className='w-1/2'>{key}</div>
            <input
               className='w-1/2'
               onChange={(event) => handleInputChange(setExpensesInfo, expensesInfo, key, event.target.value)}
               value={expensesInfo[key]}
               placeholder={expensesInfo[key] || 'Enter Text Here'} />
         </div>
      )),
   }
}

let [selectedItem, setSelectedItem] = useState('propertyInfo')

function updateContext(analysis) {
   let id = generateRandomId()

   setGlobalUserState({
      ...globalUserState,
      analyses: {
         ...globalUserState.analyses,
         [id]: analysis
      }
   })
}

const handleItemClick = (item) => {
   setSelectedItem(item);
};

// Modal Show / Not Show State
const showHideClassName = isOpen ? "block" : "hidden";

const analyzeProperty = () => {



   analysis = {
      propertyInfo: propertyInfo,
      purchaseInfo: purchaseInfo,
      incomeInfo: incomeInfo,
      expensesInfo: expensesInfo
   }
   purchaseInfoCalculations()
   // expensesInfoCalculations()
   // incomeInfoCalculations()

   // updateContext(analysis)
   // console.log('purchaseInfo', purchaseInfo)

   onClose()

   // // console.log('ANALYSIS STATE: ', analysis)

}

function generateRandomId() {
   const randomString = Math.random().toString(36).substring(2, 8);
   const timestamp = Date.now().toString(36);
   return `${randomString}-${timestamp}`;
}

function handleInputChange(func, infoType, key, value) {
   func({ ...infoType, [key]: value })
}


return (
   <div className={`${showHideClassName} fixed inset-0 `}>
      <div className="flex items-center justify-center min-h-screen">
         <div className="fixed inset-0 bg-gray-600 opacity-75"></div>

         <div className="bg-slate-200 rounded-lg overflow-hidden shadow-lg transform transition-all fixed w-full">
            <div className="bg-slate-200 text-gray-700 py-3 px-4">

               <h2 className="text-xl font-bold">New Short Term Analysis</h2>
            </div>

            <div className="flex flex-row justify-between mt-10 pl-4">
               <div className="flex items-center bg-slate-00">
                  {Object.entries(menuItems).map(([key, value]) => {
                     return (
                        <div
                           key={value.name}
                           className={`p-3 justify-center font-light text-gray-600 hover:bg-slate-300  ${selectedItem === key ? "active" : ""
                              } ${selectedItem === key
                                 ? "bg-white active:bg-white"
                                 : "bg-slate-200"
                              }}`}
                           onClick={() => handleItemClick(key)}
                        >{key}</div>
                     )
                  })}
               </div>
            </div>
            <div className='bg-white pl-4 ml-4 p-2'>
               {selectedItem === "propertyInfo" ? menuItems.propertyInfo.container : ""}
               {selectedItem === "purchaseInfo" ? menuItems.purchaseInfo.container : ""}
               {selectedItem === "incomeInfo" ? menuItems.incomeInfo.container : ""}
               {selectedItem === "expensesInfo" ? menuItems.expensesInfo.container : ""}
            </div>
            <div className='flex'>
               <div className="bg-gray-200 py-2 px-4 flex justify-end">
                  <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={analyzeProperty}>Analyze</button>
               </div>
               <div className="bg-gray-200 py-2 px-4 flex justify-end">
                  <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={onClose}>Cancel</button>
               </div>
            </div>
         </div>
      </div>
   </div>
);
}

export default NewModal;
