import { Row, Col, Card, Container, Button } from 'react-bootstrap';

const edu = {
   wt: <><Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} West Texas A&M University</Card.Subtitle>
      <Card.Text>Computer Information Systems, B.B.A | May, 2016</Card.Text></>,
   uda: <><Card.Subtitle style={{ fontWeight: '900' }}>{'>>'} Udacity</Card.Subtitle>
      <Card.Text>React Nanodegree | Feb, 2021</Card.Text></>
}


const Education = () => {
   return (
      <>
      <div className=' flex-col text-left hidden sm:flex'>
         {Object.values(edu).map(el => <div className='my-3'>{el}</div>)}
      </div>

      <div className='flex flex-col text-left sm:hidden text-xs'>
         {Object.values(edu).map(el => <div className='my-3'>{el}</div>)}
      </div>
      </>
   )
}

export default Education