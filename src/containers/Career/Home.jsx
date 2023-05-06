import Typewriter from 'typewriter-effect';

const AboutMe = () => {

   return (
      <>

         <div className='hidden sm:flex w-full bg-white ml-4'>
            <div className=' h-screen w-2/3 flex flex-col ml-40'>
               <div className='w-full h-1/2 flex flex-col'>
                  <div className=' h-3/4 p-4 m-4 flex items-left'>
                     <div className='text-9xl font-bold items-end flex font-architects-daughter'>
                        Gus Vega
                     </div>
                  </div>
                  <div className=' h-1/4 p-4 m-4 text-lg text-red-600'>

                     <Typewriter
                        onInit={(typewriter) => {
                           typewriter.typeString('Hola!')
                              .callFunction(() => {
                                 // console.log('String typed out!');
                              })
                              .pauseFor(2500)
                              .deleteAll()
                              .typeString('I am a DevOps Engineer... I also do Full Stack development.')
                              .start();
                        }}
                     />

                  </div>
               </div>
               <div className='w-full h-1/2 flex flex-col'>
                  <div className='h-2/4 m-4 font-light'>
                     Aside from my work in software engineering, I am also a real estate investor specializing in short term rentals.
                     <br></br>
                     <br></br>
                     I build tools to help me analyze potential investment. Check out Vega Digital if interested.

                     <br></br>
                     <br></br>
                     I also have a passion for traveling and exploring new places
                     <br></br>
                     <br></br>
                     and soccer is my favorite sports.
                  </div>
                  <div className='h-2/4 m-4 font-light'>
                     <p className='m-4'>Email : hola@gusvega.dev</p>
                     <p className='m-4'>Mobile : 720-687-7235</p>
                     <p className='m-4'>LinkedIn : https://www.linkedin.com/in/gusvega/ </p>
                  </div>
               </div>
            </div>
            <div className=' h-screen w-1/3 flex'>
               <div class="w-full items-end flex">
                  <img src='/images/me.jpg' alt="Image description" class="w-full object-contain" />
               </div>
            </div>
         </div>


         {/* MOBILE */}
         <div className='flex sm:hidden  bg-white'>
            <div className=' w-full flex flex-col'>
               <div className='w-full flex flex-col'>
                  <div className='p-4 m-4 flex items-left'>
                     <div className='text-9xl font-bold items-end flex font-architects-daughter'>
                        Gus Vega
                     </div>
                  </div>
                  <div className='p-4 m-4 text-sm text-red-600'>

                     <Typewriter
                        onInit={(typewriter) => {
                           typewriter.typeString('Hola!')
                              .callFunction(() => {
                                 // console.log('String typed out!');
                              })
                              .pauseFor(2500)
                              .deleteAll()
                              .typeString('I am a DevOps Engineer... I also do Full Stack development.')
                              .start();
                        }}
                     />

                  </div>
               </div>
               <div className='w-full flex flex-col'>
                  <div className='m-4 p-4 font-light text-sm'>
                     Aside from my work in software engineering, I am also a real estate investor specializing in short term rentals.
                     <br></br>
                     <br></br>
                     I build tools to help me analyze potential investments.

                     <br></br>
                     <br></br>
                     I also have a passion for traveling and exploring new places.
                     <br></br>
                     <br></br>
                     and soccer is my favorite sports.
                  </div>
                  <div className='m-4 font-light text-xs'>
                     <p className='m-4'>Email : hola@gusvega.dev</p>
                     <p className='m-4'>Mobile : 720-687-7235</p>
                     <p className='m-4'>LinkedIn : https://www.linkedin.com/in/gusvega/ </p>
                  </div>
               </div>
               <div className=' w-full flex'>
                  <div className="w-full items-end flex">
                     <img src='/images/me.jpg' alt="Image description" class="w-full object-contain" />
                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default AboutMe