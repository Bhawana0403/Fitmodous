import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import BadgeContextual from './BadgeContextual'
import BadgeIcons from './BadgeIcons'
import BadgeLink from './BadgeLink'
import BadgeBlock from './BadgeBlock'
import BadgeGlow from './BadgeGlow'
import BadgeLight from './BadgeLight'
import { badgeContextual, badgeGlow, badgeLight, badgeIcons, badgeLink, badgeBlock } from './BadgeSourceCode'
import {
  Card,
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
const Badges = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>    <br></br>    <br></br>    <br></br>
      <BreadCrumbs breadCrumbTitle='Biography' breadCrumbParent='Dashboard' breadCrumbActive='Biography' />
      <CardHeader>
        <CardTitle tag='h4'>Your Bio</CardTitle>
      </CardHeader>
<Card>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
          Your First Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder=' Your First Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Your Last Name
            </Label>
            <Col sm='9'>
              <Input type='name' name='name' id='name' placeholder=' Your Last Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='name'>
            Your Birthday
            </Label>
            <Col sm='9'>
              <Input type='date' name='name' id='name' placeholder='Your Birthday' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
      Your Mobile Number
            </Label>
            <Col sm='9'>
              <Input type='number' name='name' id='name' placeholder='Your Mobile Number' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
Your Mail id
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Your Mail id' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
Your Gym Address
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Your Gym address' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
Your Near by Landmark
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Your Near by Landmark' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
Your City
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Your City' />
            </Col>
          </FormGroup>
          <br></br>
       
          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 10, offset: 3 }}>
               <Button.Ripple className='mr-1' color='primary' type='submit' width='60%'onClick={e => e.preventDefault()}>
Upload             
 </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
      </Card>
    </Fragment>
  )
}
export default Badges
