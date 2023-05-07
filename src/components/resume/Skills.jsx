import { Row, Col, Card, Container, Button } from 'react-bootstrap';




const Skills = () => {

   let skills = {
      Containerization: ['Docker'],
      Cloud: ['Azure', 'Firebase'],
      AutomationPipelines: ['Github Actions'],
      ProgrammingLanguages: ['Javascript', 'Typescript'],
      FrontEnd: ['ReactJS'],
      Framework: ['NextJS'],
      StylingLibrary: ['Tailwind'],
      BackEnd: ['NodeJS'],
      OperatingSystems: ['MacOS', 'Linux']
   }

   return (
      <>
      <Card.Text style={{ fontFamily: 'Amiko' }} className='w-full mt-3 hidden sm:flex'>
         <ul className='flex w-full'>
            <div className='w-1/3 items-start flex flex-col'>

               {Object.entries(skills).map(([key, value]) => {
                  return (
                     <div className='mb-2'>

                     <span className='font-extrabold'>{key}</span>
                     <li>{value.map(el => {
                        return (
                           <div className='flex'>
                           <p>-- {el}</p>
                           </div>
                        )
                     })}</li>
                     </div>
                  )})}
            </div>
         </ul>
      </Card.Text>

      {/* MOBILE */}
      <Card.Text style={{ fontFamily: 'Amiko' }} className='flex w-full mt-3 sm:hidden text-xs'>
         <ul className='flex w-full'>
            <div className='w-full items-start flex flex-col'>

               {Object.entries(skills).map(([key, value]) => {
                  return (
                     <div className='mb-2'>

                     <span className='font-extrabold'>{key}</span>
                     <li>{value.map(el => {
                        return (
                           <div className='flex'>
                           <p>-- {el}</p>
                           </div>
                        )
                     })}</li>
                     </div>
                  )})}
            </div>
         </ul>
      </Card.Text>
      </>
   )
}

export default Skills