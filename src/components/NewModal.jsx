import AppContext from '@/AppContext';
import React, { useContext, useEffect, useState } from 'react';
import pmt from 'formula-pmt'

function NewModal({ isOpen, onClose }) {

   // Global Context
   const { globalUserState, setGlobalUserState } = useContext(AppContext)

   const [values, setValues] = useState({

      // property values
      address: '3220 Bedford',
      city: 'Amarillo',
      state: 'TX',
      zipCode: '79103',
      bedrooms: '3',
      baths: '2',
      squareFeet: '1300',
      yearBuilt: '1965',
      otherInfo: 'good conditions',

      // purchase values
      askingPrice: '500000',
      offerPrice: '500000',
      downPaymentPercent: '5',
      estimatedClosingCostPercentage: '3',
      renovationCosts: '0',
      setupCosts: '10000',

      // income values
      averageNightlyRate: '300',
      averageOccupancyPercentage: '75',

      // expenses values
      loanTermInYears: '30',
      interestRatePercentage: '6',
      estimatedPropertyTaxesPerMonth: '150',
      estimatedInsuranceAmountPerMonth: '145',
      privateMortgageInsuranceAmountPerMonth: '86',
      monthlyHOAAmount: '0',
      estimatedMonthlyUtilitiesAmount: '300',
      cleaningFeeAmountPerMonth: '500',
      internetBillPerMonth: '100',
      maintenancePercentagePerMonth: '5',
      managementFeePercentagePerMonth: '0',
   });

   let [calculations, setCalculations] = useState({
      // purchase
      downPaymentAmount: '',
      estimatedClosingCostAmount: '',
      totalInvestment: '',

      // income calculations
      grossIncomePerMonth: '',
      grossIncomePerYear: '',
      netOperatingIncome: '',
      capRatePercentage: '',
      cashFlowPerMonth: '',
      cashFlowPerYear: '',
      cashOnCashReturn: '',

      // expenses calculations
      mortgageAmount: '',
      numberOfPayments: '',
      monthlyPrinciplePlusInterest: '',
      estimatedPropertyTaxesPerYear: '',
      estimatedInsuranceAmountPerYear: '',
      privateMortgageInsuranceAmountPerYear: '',
      airBNBFeePercentagePerMonth: '',
      airBNBFeePercentagePerYear: '',
      maintenanceAmountPerMonth: '',
      managementFeeAmountPerMonth: '',

      operatingExpensesPerMonth: '',
      operatingExpensesPerYear: '',
      totalExpensesPerMonth: '',
      totalExpensesPerYear: '',


   })

   // purchase vars
   let downPaymentAmount = ''
   let estimatedClosingCostAmount = ''
   let totalInvestment = ''

   //income vars
   let grossIncomePerMonth = ''
   let grossIncomePerYear = ''
   let netOperatingIncome = ''
   let capRatePercentage = ''
   let cashFlowPerMonth = ''
   let cashFlowPerYear = ''
   let cashOnCashReturn = ''

   // expenses vars
   let mortgageAmount = ''
   let numberOfPayments = ''
   let monthlyPrinciplePlusInterest = ''
   let estimatedPropertyTaxesPerYear = ''
   let estimatedInsuranceAmountPerYear = ''
   let privateMortgageInsuranceAmountPerYear = ''
   let airBNBFeePercentagePerMonth = ''
   let airBNBFeePercentagePerYear = ''
   let maintenanceAmountPerMonth = ''
   let managementFeeAmountPerMonth = ''

   let operatingExpensesPerMonth = ''
   let operatingExpensesPerYear = ''
   let totalExpensesPerMonth = ''
   let totalExpensesPerYear = ''

   useEffect(() => {
      doCalcs()
   });

   const doCalcs = () => {
      // purchase calculations
      downPaymentAmount = parseInt(values.offerPrice) * (parseInt(values.downPaymentPercent) / 100)
      estimatedClosingCostAmount = parseInt(values.offerPrice) * (parseInt(values.estimatedClosingCostPercentage) / 100)
      totalInvestment = parseInt(values.setupCosts) + parseInt(values.renovationCosts) + estimatedClosingCostAmount + downPaymentAmount


      // expenses calculations
      mortgageAmount = parseInt(values.offerPrice) - parseInt(downPaymentAmount)
      numberOfPayments = parseInt(values.loanTermInYears) * 12
      monthlyPrinciplePlusInterest = pmt(((parseInt(values.interestRatePercentage) / 100)) / 12, numberOfPayments, mortgageAmount) * -1
      estimatedPropertyTaxesPerYear = parseInt(values.estimatedPropertyTaxesPerMonth) * 12
      estimatedInsuranceAmountPerYear = parseInt(values.estimatedInsuranceAmountPerMonth) * 12
      privateMortgageInsuranceAmountPerYear = parseInt(values.privateMortgageInsuranceAmountPerMonth) * 12

      grossIncomePerMonth = (((parseInt(values.averageNightlyRate) * 365) / 12) * (parseInt(values.averageOccupancyPercentage) / 100)) + parseInt(values.cleaningFeeAmountPerMonth)

      airBNBFeePercentagePerMonth = parseInt(grossIncomePerMonth) * .03
      airBNBFeePercentagePerYear = parseInt(airBNBFeePercentagePerMonth) * 12
      maintenanceAmountPerMonth = (((parseInt(values.averageNightlyRate) * 365) / 12) * (parseInt(values.averageOccupancyPercentage) / 100)) * (parseInt(values.maintenancePercentagePerMonth) / 100)
      managementFeeAmountPerMonth = (((parseInt(values.averageNightlyRate) * 365) / 12) * (parseInt(values.averageOccupancyPercentage) / 100)) * (parseInt(values.managementFeePercentagePerMonth) / 100)

      operatingExpensesPerMonth = parseInt(values.estimatedPropertyTaxesPerMonth) + parseInt(values.estimatedInsuranceAmountPerMonth) + parseInt(values.privateMortgageInsuranceAmountPerMonth) + parseInt(values.monthlyHOAAmount) + parseInt(values.estimatedMonthlyUtilitiesAmount) + parseInt(airBNBFeePercentagePerMonth) + parseInt(values.cleaningFeeAmountPerMonth) + parseInt(maintenanceAmountPerMonth) + parseInt(values.internetBillPerMonth) + parseInt(managementFeeAmountPerMonth)
      operatingExpensesPerYear = parseInt(operatingExpensesPerMonth) * 12
      totalExpensesPerMonth = parseInt(operatingExpensesPerMonth) + parseInt(monthlyPrinciplePlusInterest)
      totalExpensesPerYear = parseInt(totalExpensesPerMonth) * 12,

         // income calculations
         grossIncomePerYear = parseInt(grossIncomePerMonth) * 12
      netOperatingIncome = parseInt(grossIncomePerYear) - parseInt(operatingExpensesPerYear)
      capRatePercentage = (parseInt(netOperatingIncome) / parseInt(values.offerPrice)) * 100
      cashFlowPerMonth = grossIncomePerMonth - totalExpensesPerMonth
      cashFlowPerYear = parseInt(cashFlowPerMonth) * 12
      cashOnCashReturn = Math.ceil((parseInt(cashFlowPerYear) / parseInt(totalInvestment)) * 100)

      // // console.log(calculations)

   }

   const handleInputChange = (event) => {

      const { name, value } = event.target;

      setValues({
         ...values,
         [name]: value,

      })

   };


   // Modal Show / Not Show State
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

   const handleItemClick = (item) => {
      setSelectedItem(item);
   };

   function generateRandomId() {
      const randomString = Math.random().toString(36).substring(2, 8);
      const timestamp = Date.now().toString(36);
      return `${randomString}-${timestamp}`;
   }

   const analyzeProperty = () => {
      setCalculations({
         ...calculations,

         // purchase
         downPaymentAmount: downPaymentAmount,
         estimatedClosingCostAmount: estimatedClosingCostAmount,
         totalInvestment: totalInvestment,

         // income
         grossIncomePerMonth: grossIncomePerMonth,
         grossIncomePerYear: grossIncomePerYear,
         netOperatingIncome: netOperatingIncome,
         capRatePercentage: capRatePercentage,
         cashFlowPerMonth: cashFlowPerMonth,
         cashFlowPerYear: cashFlowPerYear,
         cashOnCashReturn: cashOnCashReturn,

         // expenses vars
         mortgageAmount: mortgageAmount,
         numberOfPayments: numberOfPayments,
         monthlyPrinciplePlusInterest: monthlyPrinciplePlusInterest,
         estimatedPropertyTaxesPerYear: estimatedPropertyTaxesPerYear,
         estimatedInsuranceAmountPerYear: estimatedInsuranceAmountPerYear,
         privateMortgageInsuranceAmountPerYear: privateMortgageInsuranceAmountPerYear,
         airBNBFeePercentagePerMonth: airBNBFeePercentagePerMonth,
         airBNBFeePercentagePerYear: airBNBFeePercentagePerYear,
         maintenanceAmountPerMonth: maintenanceAmountPerMonth,
         managementFeeAmountPerMonth: managementFeeAmountPerMonth,

         operatingExpensesPerMonth: operatingExpensesPerMonth,
         operatingExpensesPerYear: operatingExpensesPerYear,
         totalExpensesPerMonth: totalExpensesPerMonth,
         totalExpensesPerYear: totalExpensesPerYear,
      })

      // console.log('CALCS: ', calculations)

      let id = generateRandomId()

      setGlobalUserState({
         ...globalUserState,
         analyses: {
            ...globalUserState.analyses,
            [id]: {
               ...values,
               ...calculations
            }
         }
      })

      // console.log('GLOBAL CONTEXT: ', globalUserState)

      onClose()
   }

   return (
      <div className={`${showHideClassName} fixed inset-0 `}>
         <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-600 opacity-75"></div>

            <div className="bg-slate-200 rounded-lg overflow-hidden shadow-lg transform transition-all fixed w-full">
               <div className="bg-gray-200 text-gray-700 py-3 px-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">Analysis Modal Title</h2>
                  <div className="bg-gray-200 py-2 px-4 flex justify-end">
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
                              <div key={el} className='p-1'>
                                 <label className='mr-3 text-xs'>{el.split(/(?=[A-Z])/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</label>
                                 <input className='text-xs' name={el} value={values[el]} placeholder='Enter text here' onChange={handleInputChange} />
                              </div>
                           </>
                        )
                     })}
                     <div>{totalInvestment}</div>
                  </div>
                  <div className='flex'>
                     <div className="bg-gray-200 py-2 px-4 flex justify-end">
                        <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={analyzeProperty}>Analyze</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NewModal;
