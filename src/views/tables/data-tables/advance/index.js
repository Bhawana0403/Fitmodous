// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col, Button } from 'reactstrap'

// ** Tables
import TableServerSide from './TableServerSide'
import TableAdvSearch from './TableAdvSearch'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import Image from '../advance/images/gym.png'
import Image2 from '../advance/images/preview.png'
import Image3 from '../advance/images/heart.gif'
import CardTitle from 'reactstrap/lib/CardTitle'
const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Available Events' breadCrumbParent='Dashboard' breadCrumbActive='Available Events' />
    <img style={{marginLeft:"30%"}}src={Image}></img>
    <br></br>   <br></br>
    <Row >
                    <Col xs="3">Arm Workout for women</Col>
                    <Col xs="3">  <img style={{marginLeft:"30%", width:"40px"}}src={Image2}></img></Col>
                    <Col xs="3"> <img style={{marginLeft:"30%", width:"40px"}}src={Image3}></img></Col>
                  
                </Row>
                <br></br>
                <CardTitle>On Oct 5th 2021,1:30pm</CardTitle>
                <CardTitle>23 seats available</CardTitle>
    <Button style={{color:"primary", width:"25%", marginLeft:"30%", borderRadius:"20px"}} color="primary" width="40%">Book Event</Button>
    <br></br>  <br></br>
    <Button style={{color:"primary", width:"25%", marginLeft:"30%", borderRadius:"20px"}}color="primary">Join Live</Button>
    </Fragment>
  )
}

export default Tables
