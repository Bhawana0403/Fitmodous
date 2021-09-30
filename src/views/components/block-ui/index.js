import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import BasicBlocking from './BasicBlocking'
import CustomSpinner from './CustomSpinner'
import CustomColorBlocking from './CustomColor'
import MessageBlocking from './MessageBlocking'
import ExtensionsHeader from '@components/extensions-header'
import Image from '../block-ui/images/getfit.png'
import CardTitle from 'reactstrap/lib/CardTitle'
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
const Editor = () => {
  return (
    <Fragment>
      <br></br>
   <Card style={{width:"70%"}}>
      <img style={{width:"30%", marginLeft:"20%"}}src={Image}></img>
<br></br>
      <Row>
        <Col sm={3}>
    <CardTitle style={{marginLeft:"20%"}}>5 Followers</CardTitle>
        </Col>
        <Col sm={3}>
     <Button  color='primary' type='submit' >Message</Button>
        </Col>
        <Col sm={3}>
        <Button  color='primary' type='submit' >Follow</Button>
         {/* <Button.Ripple className='mr-1' color='primary' type='submit' width='60%'onClick={e => e.preventDefault()}>
Upload             
 </Button.Ripple> */}
        </Col>
        </Row>    <br></br>
      <CardTitle style={{marginLeft:"5%"}}>Event</CardTitle>
      <Button  style={{marginLeft:"30%", width:"30%", color:"primary", backgroundColor:"blue"}}>Events</Button>
      <br></br>    <br></br>    <br></br>
      <CardTitle style={{marginLeft:"5%"}}>Featured Video</CardTitle>
      </Card>
    </Fragment>
  )
}

export default Editor
