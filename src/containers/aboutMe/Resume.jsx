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
         <div className=' flex-row ml-4 bg-white h-full hidden sm:flex'>
            <Col md={4} order={1} className='w-1/3 m-auto flex flex-col'>

               <div className="w-100 h-full flex justify-center">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title ><div style={{ fontSize: '8rem' }}>{'<'}</div></Card.Title>
                        <div style={{ paddingLeft: '10%' }}>
                           <Card.Title style={{ fontSize: '4rem', fontFamily: 'Bebas Neue', marginBottom: '0' }}>Gus</Card.Title>
                           <Card.Title style={{ fontSize: '4rem', fontFamily: 'Bebas Neue' }}>Vega</Card.Title>
                           <Card.Text style={{ fontSize: '2rem', fontFamily: 'Amiko', fontWeight: '900' }}>

                              DEVOPS
                              <br></br>
                              ENGINEER

                           </Card.Text>
                        </div>
                        <Card.Title ><div style={{ fontSize: '8rem' }}>{'/>'}</div></Card.Title>
                     </Card.Body>
                  </Card>
               </div>

            </Col>

            <Col md={8} order={0} className="order-md-1 w-2/3 flex flex-col justify-center">

               <button className="w-100 mb-4 hover:bg-slate-100 p-3 items-start flex">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title className='items-start flex' style={{ fontFamily: 'Montserrat', fontWeight: '800' }} onClick={() => { toggleBackground() }}>/ ABOUT ME</Card.Title>
                        {showBackground
                           ? <Background />
                           : ''}
                     </Card.Body>
                  </Card>
               </button>



               <button className="w-100 mb-4 hover:bg-slate-100 p-3 items-start">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title className='items-start flex' onClick={() => { toggleSkills() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }} >/ SKILLS</Card.Title>
                        {showSkills
                           ? <Skills />
                           : ''}
                     </Card.Body>
                  </Card>
               </button>

               <button className="w-100 mb-4 hover:bg-slate-100 p-3">
                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex' onClick={() => { toggleExperience() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ EXPERIENCE</Card.Title>

                        {showExperience
                           ? <Experience />
                           : ''}

                     </Card.Body>
                  </Card>
               </button>

               <button className="w-100 hover:bg-slate-100 p-3 mb-4" >

                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex' onClick={() => { toggleEducation() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ EDUCATION</Card.Title>

                        {showEducation
                           ? <Education />
                           : ''}

                     </Card.Body>
                  </Card>
               </button>

               <button className="w-100 hover:bg-slate-100 p-3">
                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex text-red-500' onClick={() => handleClick()} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ DOWNLOAD RESUME</Card.Title>
                     </Card.Body>
                  </Card>
                  {/* <a href={`${process.env.PUBLIC_URL}/gusvega-resume.pdf`} style={{ display: 'center' }} download class="button">Download Resume</a> */}
               </button>

            </Col>
         </div>


         {/* MOBILE */}

         <div className='flex flex-col bg-white h-full w-auto sm:hidden m-2'>
            <Col order={1} className='w-full flex flex-col'>

               <div className="w-full h-full flex justify-center">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title ><div style={{ fontSize: '8rem' }}>{'<'}</div></Card.Title>
                        <div style={{ paddingLeft: '10%' }}>
                           <Card.Title style={{ fontSize: '4rem', fontFamily: 'Bebas Neue', marginBottom: '0' }}>Gus</Card.Title>
                           <Card.Title style={{ fontSize: '4rem', fontFamily: 'Bebas Neue' }}>Vega</Card.Title>
                           <Card.Text style={{ fontSize: '2rem', fontFamily: 'Amiko', fontWeight: '900' }}>
                              DEVOPS
                              <br></br>
                              ENGINEER

                           </Card.Text>
                        </div>
                        <Card.Title ><div style={{ fontSize: '8rem' }}>{'/>'}</div></Card.Title>
                     </Card.Body>
                  </Card>
               </div>

            </Col>
            <br></br>
            <br></br>
            <br></br>

            <Col md={8} order={0} className="order-md-1 w-full flex flex-col justify-center">

               <button className=" mb-4 hover:bg-slate-100 p-3 items-start flex">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title className='items-start flex' style={{ fontFamily: 'Montserrat', fontWeight: '800' }} onClick={() => { toggleBackground() }}>/ ABOUT ME</Card.Title>
                        {showBackground
                           ? <Background />
                           : ''}
                     </Card.Body>
                  </Card>
               </button>



               <button className="w-100 mb-4 hover:bg-slate-100 p-3 items-start">
                  <Card style={{ border: '0' }}>
                     <Card.Body>
                        <Card.Title className='items-start flex' onClick={() => { toggleSkills() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }} >/ SKILLS</Card.Title>
                        {showSkills
                           ? <Skills />
                           : ''}
                     </Card.Body>
                  </Card>
               </button>

               <button className="w-100 mb-4 hover:bg-slate-100 p-3">
                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex' onClick={() => { toggleExperience() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ EXPERIENCE</Card.Title>

                        {showExperience
                           ? <Experience />
                           : ''}

                     </Card.Body>
                  </Card>
               </button>

               <button className="w-100 hover:bg-slate-100 p-3 mb-4" >

                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex' onClick={() => { toggleEducation() }} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ EDUCATION</Card.Title>

                        {showEducation
                           ? <Education />
                           : ''}

                     </Card.Body>
                  </Card>
               </button>

               <button className="w-full hover:bg-slate-100 p-3">
                  <Card style={{ border: '0' }}>
                     <Card.Body style={{ fontFamily: 'Amiko' }}>
                        <Card.Title className='items-start flex text-red-500' onClick={() => handleClick()} style={{ fontFamily: 'Montserrat', fontWeight: '800' }}>/ DOWNLOAD RESUME</Card.Title>
                     </Card.Body>
                  </Card>
                  {/* <a href={`${process.env.PUBLIC_URL}/gusvega-resume.pdf`} style={{ display: 'center' }} download class="button">Download Resume</a> */}
               </button>

            </Col>
         </div>
      </>
   );
}

export default Resume;
