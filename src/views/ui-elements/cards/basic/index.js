import { Fragment } from 'react'
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
import CardTitles from './CardTitles'
import CardImages from './CardImages'
import CardNavigation from './CardNavigation'
import CardHeaderFooter from './CardHeaderFooter'
import CardContentTypes from './CardContentTypes'
import CardTextAlignment from './CardTextAlignment'
import CardStyleVariation from './CardStyleVariation'
import CardLayout from './CardLayout'
import Breadcrumbs from '@components/breadcrumbs'
const BasicCards = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Create Event' breadCrumbParent='Dashboard' breadCrumbActive='Create Event' />
      <CardHeader>
        <CardTitle tag='h4'>Create Event</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
           Event Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='   Event Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Event date
            </Label>
            <Col sm='9'>
              <Input type='date' name='name' id='name' placeholder='Event Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='name'>
            Event time from
            </Label>
            <Col sm='9'>
              <Input type='time' name='name' id='name' placeholder='   Event time from' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
       Event time to
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Event time to' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
  Tariner name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='  Show only to premium members' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
   Seat availability
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Seat availability' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
 Out of
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Out of' />
            </Col>
          </FormGroup>
          
          <br></br>
          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='I confirm the above details are correct' defaultChecked={false} />      </Col>
          </FormGroup>
          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 10, offset: 3 }}>
               <Button.Ripple className='mr-1' color='primary' type='submit' width='60%'onClick={e => e.preventDefault()}>
Next
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Fragment>
  )
}

export default BasicCards
