import { Fragment, useContext } from 'react'
import CardJob from './CardJob'
import CardChat from './CardChat'
import CardMedal from './CardMedal'
import CardMeetup from './CardMeetup'
import CardPayment from './CardPayment'
import CardProfile from './CardProfile'
import CardBusiness from './CardBusiness'
import CardAppDesign from './CardAppDesign'
import CardUserTimeline from './CardUserTimeline'
import CardBrowserState from './CardBrowserState'
import Breadcrumbs from '@components/breadcrumbs'
import CardTransactions from './CardTransactions'
import CardEmployeesTasks from './CardEmployeesTask'
import CardCongratulations from './CardCongratulations'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Image from '../advance/images/dollar.png'
import Image2 from '../advance/images/ecclipse.png'
import {
  Card,
  Row,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'
const Cards = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Total Earnings' breadCrumbParent='Dasboard' breadCrumbActive='Total Earnings' />
      <CardHeader>
        <CardTitle tag='h4'>Total Earnings</CardTitle>
      </CardHeader>
      <CardTitle tag='h4'>Total Earnings:6,987</CardTitle>
 
      <Button.Ripple style={{width:"30%", marginLeft:"30%"}} className='mr-1' color='primary' type='submit' width='40%'onClick={e => e.preventDefault()}>
Basic Membership
              </Button.Ripple>
              <br></br>      <br></br>
              <Card><br></br>
              <Row>  <br></br>  <br></br>
          
                <Col style={{marginLeft:"20%"}}xs="3"><CardTitle tag='h4'>
                <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
                <br></br> <br></br>
                  Total Amount</CardTitle></Col>
        <Col xs="3"><CardTitle tag='h4'>      <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
        <br></br>
        Total Subscriber</CardTitle></Col>
        <Col xs="3"> <CardTitle tag='h4'>      <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
        <br></br>
        Package Price</CardTitle></Col>
      </Row>
      <br></br>  <br></br>
              </Card>
              <Button.Ripple style={{width:"30%", marginLeft:"30%"}} className='mr-1' color='primary' type='submit' width='40%'onClick={e => e.preventDefault()}>
Personal Membership
              </Button.Ripple>
              <br></br>      <br></br>
              <Card><br></br>
              <Row>  <br></br>  <br></br>
          
                <Col style={{marginLeft:"20%"}}xs="3"><CardTitle tag='h4'>
                <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
                <br></br> <br></br>
                  Total Amount</CardTitle></Col>
        <Col xs="3"><CardTitle tag='h4'>      <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
        <br></br>
        Total Subscriber</CardTitle></Col>
        <Col xs="3"> <CardTitle tag='h4'>      <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
        <br></br>Package Price</CardTitle></Col>
      </Row>
      <br></br>  <br></br>
              </Card>
              <Button.Ripple style={{width:"30%", marginLeft:"30%"}} className='mr-1' color='primary' type='submit' width='40%'onClick={e => e.preventDefault()}>
Premium Membership
              </Button.Ripple>
              <br></br>      <br></br>
              <Card><br></br>
              <Row>  <br></br>  <br></br>
          
                <Col style={{marginLeft:"20%"}}xs="3"><CardTitle tag='h4'>
                <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
                <br></br> <br></br>
                  Total Amount</CardTitle></Col>
        <Col xs="3"><CardTitle tag='h4'>      
        <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
        <br></br>
          Total Subscriber</CardTitle></Col>
        <Col xs="3"> <CardTitle tag='h4'> 
        <img  style={{ marginTop: "15px", width:"25px"}} src={Image} alt="image" />17,000
        <br></br>
          Package Price</CardTitle></Col>
      </Row>
      <br></br>  <br></br>
              </Card>
    </Fragment>
  )
}

export default Cards
