import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import CardAction from '@components/card-actions'
import { ChevronDown, RotateCw, X } from 'react-feather'
import { CardBody, CardText, Row, Col, Table, Card, CardTitle } from 'reactstrap'
import Image from '../advance/images/workout.jpg'
const CardActions = () => {
  return (
    <Fragment><br></br><br></br><br></br><br></br>
      <Breadcrumbs breadCrumbTitle='Your videos' breadCrumbParent='Dashboard' breadCrumbActive='Your Videos' />
<Card> <br></br><br></br><br></br><br></br>
<img style={{marginLeft:"40%"}}src={Image} img='responsive' width='15%' marginLeft='30%'></img><br></br><br></br>
  <CardTitle style={{marginLeft:"7%"}}>Arms workout for Women for standard subscribers only</CardTitle>
  <Row>
                    <Col xs="3"style={{marginLeft:"7%"}}>Category:Arm workout</Col>
                    <Col xs="auto">Uploaded on 2/10/2021</Col>
                </Row>
                <br></br>
</Card>
<Card> <br></br>
  <CardTitle style={{marginLeft:"7%"}}>Description:In this video iam explained how to grow your arms.You need to follow this category video regularity
    to make benefit
  </CardTitle>
                <br></br>
</Card>
<Card> <br></br>
  <CardTitle style={{marginLeft:"7%"}}>Tags <br></br> <br></br>
  <Row>
                    <Col xs="4"style={{marginLeft:"7%"}}> <Row style={{backgroundColor:"blue", width:"50%", borderRadius:"10%"}}>Arms Work out</Row>
 </Col>
                    <Col xs="4"> <Row style={{backgroundColor:"blue", width:"50%", borderRadius:"10%"}}>Arms Work out</Row>
 </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs="4"style={{marginLeft:"7%"}}> <Row style={{backgroundColor:"blue", width:"50%", borderRadius:"10%"}}>Arms Work out</Row>
 </Col>
                    <Col xs="4"> <Row style={{backgroundColor:"blue", width:"50%", borderRadius:"10%"}}>Arms Work out</Row>
 </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs="4"style={{marginLeft:"7%"}}> <Row style={{backgroundColor:"blue", width:"50%", borderRadius:"10%"}}>Arms Work out</Row>
 </Col>
                    <Col xs="4"> <Row style={{backgroundColor:"blue", width:"50%", borderRadius:"10%"}}>Arms Work out</Row>
 </Col>
                </Row>
  </CardTitle>
                <br></br>
</Card>
<Card> <br></br>
  <CardTitle style={{marginLeft:"7%"}}>Show to</CardTitle>
  <Row>
                
  <Col xs="4"> <Row style={{backgroundColor:"yellow", color:"black", fontWeight:"600",  width:"70%", borderRadius:"10%", marginLeft:"70%"}}>
    Only to Premium Members</Row></Col>

                </Row>
                <br></br>
</Card>
<Card> <br></br>
  <CardTitle style={{marginLeft:"7%"}}>Thumb Nail</CardTitle>
  <img style={{marginLeft:"40%"}}src={Image} img='responsive' width='15%' marginLeft='30%'></img><br></br><br></br>
</Card>
<br></br><br></br>
    </Fragment>
  )
}
export default CardActions
