import { Row, Col, Card, Container, Button } from 'react-bootstrap';

const jobs = {
   freelance: <><Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} Full Stack Software Engineer</Card.Subtitle>
   <Card.Text>Independent | Seattle, WA | January, 2023 - Present</Card.Text>
   <Card.Text>
      <ul>
         <li>• Experienced in developing cloud-based applications and always focused on leveraging cloud technologies to deliver scalable, reliable, and cost-effective solutions.</li>
         <li>• Expertise in managing projects, ensuring timely delivery and high-quality code, and able to work independently as a freelancer.</li>
      </ul>
   </Card.Text></>,
   microsoft: <><Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} Security Solutions Engineer</Card.Subtitle>
      <Card.Text>Microsoft | Redmond, WA | June, 2021 - July, 2022</Card.Text>
      <Card.Text>
         <ul>
            <li>• Supported team with installation and configuration of third party software in pre-production and production environments.</li>
            <li>• Assisted teams by automating tasks that would normally be performed manually.</li>
         </ul>
      </Card.Text></>,

   ge: <><Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} Software Engineer</Card.Subtitle>
      <Card.Text>General Electric | Denver, CO | August, 2019 - March, 2020</Card.Text>
      <Card.Text>
         <ul>
            <li>• Supported the Mobile Enterprise Suite service team with the installation, customization and configuration of the Mobile Enterprise mobile application for customers all over the world.</li>
            <li>• Worked on the transition to a micro-service containerized architecture of the mobile application mainly using reactJS and Docker.</li>
         </ul>
      </Card.Text>
   </>,
   raytheon: <>
      <Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} Software Engineer</Card.Subtitle>
      <Card.Text>Raytheon Technologies | Denver, CO | Sept, 2017 - August, 2019</Card.Text>
      <Card.Text>
         <ul>
            <li>• Supported program with full-stack development support using Spring as back-end framework and ReactJS for the front-end.</li>
            <li>• Assisted with day to day tasks to deploy containerized applications to different environments using docker, Kubernetes, and Rancher.</li>
         </ul>
      </Card.Text>
   </>,
   ots: <>
      <Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} DevOps Engineer</Card.Subtitle>
      <Card.Text>Open Technology Solutions | Denver, CO | March, 2017 - Sept, 2017</Card.Text>
      <Card.Text>
         <ul>
            <li>• Contributed in day-to-day DevOps related operations such as writing scripts using python and shell to automate processes for faster deployments.</li>
            <li>• Actively managed internal continuous integration and delivery environments such as test, development, staging, and production using Octopus Deploy to prevent malfunctions in the pipelines.</li>
         </ul>
      </Card.Text>
   </>,

}


const Experience = () => {
   return (
      <>
         <div className='hidden flex-col items-start justify-start text-left sm:flex'>
            {Object.values(jobs).map(el => <div className='my-3'>{el}</div>)}

         </div>
         <div className='flex flex-col items-start justify-start text-left sm:hidden text-xs'>
            {Object.values(jobs).map(el => <div className='my-3'>{el}</div>)}

         </div>
      </>
   )
}

export default Experience