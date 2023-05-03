import { Row, Col, Card, Container, Button } from 'react-bootstrap';


const Skills = () => {
   return (
      <Card.Text style={{ fontFamily: 'Amiko' }} className='flex w-full mt-3'>
         <ul className='flex w-full'>
            <div className='w-1/3 items-start flex flex-col'>
               <li>Architecture: Serverless</li>
               <li>Containerization: Docker</li>
               <li>Cloud: Azure</li>
               <li>Automation: Azure DevOps</li>
               <li>Languages: Javascript - Typescript</li>
            </div>
            <div className='w-1/2 items-start flex flex-col'>
               <li>Front End: ReactJS</li>
               <li>Styling Library: Bootstrap</li>
               <li>Back End: NodeJS</li>
               <li>API Development: ExpressJS</li>
               <li>OS: MacOS - Linux</li>
            </div>
         </ul>
      </Card.Text>
   )
}

export default Skills