import { Card, CardHeader, CardTitle, CardBody, CardText, CardDeck, CardFooter, Button, Alert, CardImg, Row, Col, FormGroup, Label, Input} from 'reactstrap'
import Image from '../colors/images/chair.png'
import Image2 from '../colors/images/coach.png'
import Image3 from '../colors/images/clock.png'
import Image4 from '../colors/images/live.png'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus } from 'react-feather'
const DefaultColors = () => {
  return (<>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>UpComing Event</CardTitle>
        
      </CardHeader>
      <Row form className='mt-1 ml-30'>
            <Col lg='4' md='6' sm='3'>
            <img  style={{borderRadius:"20px", marginLeft:"10%"}} src={Image}class="responsive" width="10%"
                     height="60%"/>
                         <CardTitle style={{marginLeft:"30%"}} tag='h4'>21 out of 30</CardTitle>
            </Col>
            {/* <Col lg='1' md='6' sm='3'>
            <CardTitle tag='h4'>21 out of 30</CardTitle>
            </Col> */}
             </Row>
             <Row form className='mt-1 ml-30'>
            <Col lg='4' md='6' sm='3'>
            <img  style={{borderRadius:"20px", marginLeft:"10%"}} src={Image2}class="responsive" width="10%"
                     height="60%"/>      
                           <CardTitle style={{marginLeft:"30%"}}tag='h4'>Trainer Name:Sandy</CardTitle>
                           </Col>
            {/* <Col lg='4' md='6' sm='3'>
            <CardTitle style={{marginLeft:"30%"}}tag='h4'>Trainer Name:Sandy</CardTitle>
            </Col> */}
             </Row>
             <Row form className='mt-1 ml-30'>
            <Col lg='4' md='6' sm='3'>
            <img  style={{borderRadius:"20px", marginLeft:"10%"}}  src={Image3}class="responsive" width="10%"
                     height="60%"/>   
                      <CardTitle style={{marginLeft:"30%"}} tag='h4'>Trainer Name:Sandy</CardTitle>
            </Col>
            {/* <Col lg='4' md='6' sm='3'>
            <CardTitle style={{marginLeft:"30%"}} tag='h4'>Trainer Name:Sandy</CardTitle>
            </Col> */}
             </Row>
             <Button className='ml-2' color='primary' >
             <img  style={{borderRadius:"20px", marginLeft:"10%"}}  src={Image4}class="responsive" width="2%"
                     height="10%"/>
          
              <span className='align-middle ml-50'>Watch Live</span>
            </Button>
            <br></br>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>UpComing Event</CardTitle>
        
      </CardHeader>
      <Row form className='mt-1 ml-30'>
            <Col lg='4' md='6' sm='3'>
            <img  style={{borderRadius:"20px", marginLeft:"10%"}} src={Image}class="responsive" width="10%"
                     height="60%"/>
                         <CardTitle style={{marginLeft:"30%"}} tag='h4'>21 out of 30</CardTitle>
            </Col>
            {/* <Col lg='1' md='6' sm='3'>
            <CardTitle tag='h4'>21 out of 30</CardTitle>
            </Col> */}
             </Row>
             <Row form className='mt-1 ml-30'>
            <Col lg='4' md='6' sm='3'>
            <img  style={{borderRadius:"20px", marginLeft:"10%"}} src={Image2}class="responsive" width="10%"
                     height="60%"/>      
                           <CardTitle style={{marginLeft:"30%"}}tag='h4'>Trainer Name:Sandy</CardTitle>
                           </Col>
            {/* <Col lg='4' md='6' sm='3'>
            <CardTitle style={{marginLeft:"30%"}}tag='h4'>Trainer Name:Sandy</CardTitle>
            </Col> */}
             </Row>
             <Row form className='mt-1 ml-30'>
            <Col lg='4' md='6' sm='3'>
            <img  style={{borderRadius:"20px", marginLeft:"10%"}}  src={Image3}class="responsive" width="10%"
                     height="60%"/>   
                      <CardTitle style={{marginLeft:"30%"}} tag='h4'>Trainer Name:Sandy</CardTitle>
            </Col>
            {/* <Col lg='4' md='6' sm='3'>
            <CardTitle style={{marginLeft:"30%"}} tag='h4'>Trainer Name:Sandy</CardTitle>
            </Col> */}
             </Row>
        <Button className='ml-2' color='primary' >
             <img  style={{borderRadius:"20px"}} src={Image4}class="responsive" width="2%"
                     height="10%"/>
          
              <span className='align-middle ml-50'>Watch Live</span>
            </Button>
            <br></br>
    </Card>
    </>
  )
}
export default DefaultColors
