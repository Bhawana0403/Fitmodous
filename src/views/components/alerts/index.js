import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import Card from '@components/card-snippet'
import DefaultAlert from './DefaultAlert'
import AlertTitle from './AlertTitle'
import AlertColors from './AlertColors'
import AlertDismissable from './AlertDismissable'
import AlertUncontrolled from './AlertUncontrolled'
import AlertIcon from './AlertIcon'
import AlertExample from './AlertExample'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CardHeader} from 'reactstrap'
import {
  defaultAlert,
  alertColors,
  alertTitle,
  alertDismissable,
  alertUncontrolled,
  alertIcon,
  alertExample
} from './AlertSourceCode'
import BreadCrumbs from '@components/breadcrumbs'
import CardTitle from 'reactstrap/lib/CardTitle'
import Image from '../alerts/images/female.jpg'
const Alerts = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Subscriber' breadCrumbParent='Dashboard' breadCrumbActive='Subscriber' />
     <Card>
     <CardTitle>Subscriber</CardTitle>
                <Media className='mr-25' left>
          <Media object className='rounded mr-50' src={Image} alt='Randy'
           height='80' width='80' />
        </Media>
        <Media className='mt-75 ml-1' body>
     
         
        </Media>
     </Card>
     <Card>
     <CardTitle style={{color:"red"}}>Remove Membership(unsubscribe)</CardTitle>
     <Row >
                    <Col xs="3">Mobile Number:+4565474677</Col>
                </Row><br></br>
                <Row >
                    <Col xs="3">Country:India</Col>
                </Row>
     </Card>
     <CardHeader style={{marginLeft:"40%"}}>Subscription Details</CardHeader>
     <Card>
     <Row >
                    <Col xs="6">Membership Details:Premium Membership</Col>
                </Row><br></br>
                <Row >
                    <Col xs="6">Subscription:20/5/2021</Col>
                </Row>
     </Card>
     <Card>
     <Row >
                    <Col xs="6">Membership Details:Premium Membership</Col>
                </Row><br></br>
                <Row >
                    <Col xs="6">Subscription:20/5/2021</Col>
                </Row>
     </Card>
     <Card>
     <Row >
                    <Col xs="6">Membership Details:Standard Membership</Col>
                </Row><br></br>
                <Row >
                    <Col xs="6">Subscription:20/5/2021</Col>
                </Row>
     </Card>
     <Card>
     <Row >
                    <Col xs="6">Membership Details:Basic Membership</Col>
                </Row><br></br>
                <Row >
                    <Col xs="6">Subscription:20/5/2021</Col>
                </Row>
     </Card>
     <Card>
     <Row >
                    <Col xs="6">Membership Details:Premium Membership</Col>
                </Row><br></br>
                <Row >
                    <Col xs="6">Subscription:20/5/2021</Col>
                </Row>
     </Card>
    </Fragment>
  )
}
export default Alerts
