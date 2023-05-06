import Background from '@/components/resume/Background';
import Education from '@/components/resume/Education';
import Experience from '@/components/resume/Experience';
import Skills from '@/components/resume/Skills';
import { useState } from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { getFile } from '@/server/firebase';



function Resume() {

   let [resumeItems, setResumeItems] = useState({
      background: {
         name: "Background",
         container: <Background />,
      },
      skills: {
         name: "Skills",
         container: <Skills />,
      },
      experience: {
         name: "Experience",
         container: <Experience />,
      },
      education: {
         name: "Education",
         container: <Education />,
      },
   })

   const [showBackground, setShowBackground] = useState(false);
   const [showSkills, setShowSkills] = useState(false);
   const [showExperience, setShowExperience] = useState(false);
   const [showEducation, setShowEducation] = useState(false);


   const toggleBackground = () => {
      setShowBackground(!showBackground);
   };

   const toggleSkills = () => {
      setShowSkills(!showSkills);
   };

   const toggleExperience = () => {
      setShowExperience(!showExperience);
   };

   const toggleEducation = () => {
      setShowEducation(!showEducation);
   };

   const handleClick = () => {
      getFile()
   };

   return (
      <>
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Amiko&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
         </style>
 



         <div className=' flex-col bg-white h-full w-auto mt-4'>

            <Col md={8} order={0} className="order-md-1 w-full flex flex-col justify-center items-center m-auto">

               <button className=" w-full mb-4 hover:bg-slate-100 p-3 items-start flex">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title className='items-start flex' style={{ fontFamily: 'Montserrat', fontWeight: '800' }} onClick={() => { toggleBackground() }}>/ ABOUT ME</Card.Title>
                        {showBackground
                           ? <Background />
                           : ''}
                     </Card.Body>
                  </Card>
               </button>



               <button className="w-full mb-4 hover:bg-slate-100 p-3 items-start">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title className='items-start flex' onClick={() => { toggleSkills() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }} >/ SKILLS</Card.Title>
                        {showSkills
                           ? <Skills />
                           : ''}
                     </Card.Body>
                  </Card>
               </button>

               <button className="w-full mb-4 hover:bg-slate-100 p-3">
                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex' onClick={() => { toggleExperience() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ EXPERIENCE</Card.Title>

                        {showExperience
                           ? <Experience />
                           : ''}

                     </Card.Body>
                  </Card>
               </button>

               <button className="w-full hover:bg-slate-100 p-3 mb-4" >

                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex' onClick={() => { toggleEducation() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ EDUCATION</Card.Title>

                        {showEducation
                           ? <Education />
                           : ''}

                     </Card.Body>
                  </Card>
               </button>

            </Col>
         </div>
      </>
   );
}

export default Resume;
