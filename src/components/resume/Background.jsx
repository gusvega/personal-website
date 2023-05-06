import { Row, Col, Card, Container, Button } from 'react-bootstrap';

const Background = () => {
   return (
      <>
      <Card.Text style={{ fontFamily: 'Amiko' }} className='mt-3 hidden sm:flex '>
         Experienced self-taught engineer with a focus in javascript ecosystem environments.
      </Card.Text>

      <Card.Text style={{ fontFamily: 'Amiko' }} className='mt-3 flex sm:hidden text-xs'>
         Experienced self-taught engineer with a focus in javascript ecosystem environments.
      </Card.Text>

      </>
   )
}

export default Background