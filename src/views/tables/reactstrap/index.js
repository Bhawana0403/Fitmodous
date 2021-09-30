import { Fragment, useEffect } from 'react'
import prism from 'prismjs'
import TableBasic from './TableBasic'
import TableDark from './TableDark'
import TableTheadDark from './TableTheadDark'
import TableTheadLight from './TableTheadLight'
import TableStriped from './TableStriped'
import TableStripedDark from './TableStripedDark'
import TableBordered from './TableBordered'
import TableBorderless from './TableBorderless'
import TableHover from './TableHover'
import TableSmall from './TableSmall'
import TableContextual from './TableContextual'
import TableResponsive from './TableResponsive'
import TableHoverAnimation from './TableHoverAnimation'
import Breadcrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import {
  tableBasic,
  tableDark,
  tableTheadOptions,
  tableStriped,
  tableStripedDark,
  tableBordered,
  tableBorderless,
  tableContextual,
  tableHover,
  tableSmall,
  tableHoverAnimation,
  tableResponsive
} from './TableSourceCode'
import {

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


const Tables = () => {
  useEffect(() => {
    prism.highlightAll()
  })

  return (
    <Fragment>
    <Breadcrumbs breadCrumbTitle='Event Information' breadCrumbParent='Dashboard' breadCrumbActive='Event Information' />
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Kindly fill the information below</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
              Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder=' Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Date'>
            Date
            </Label>
            <Col sm='9'>
              <Input type='Date' name='Date' id='Date' placeholder='Date' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
            Time
            </Label>
            <Col sm='6' md='6'>
              <Input type='Time' name='Time' id='Time' placeholder='Time from' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
            Time
            </Label>
            <Col sm='6'ms='6'>
              <Input type='Time' name='Time' id='Time' placeholder='Time to' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='trainername'>
             Trainer Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='password' id='password' placeholder='Trainer Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='Time'>
           Seat vailability 
            </Label>
            <Col sm='6' md='6'>
              <Input type='Time' name='Time' id='Time' placeholder='Time from' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
           Out of
            </Label>
            <Col sm='6'ms='6'>
              <Input type='Time' name='Time' id='Time' placeholder='Time to' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='trainername'>
          Meeting link
            </Label>
            <Col sm='9'>
              <Input type='text' name='password' id='password' placeholder='Meeting link' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='I confirm the above details are correct' defaultChecked={false} />      </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
        
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
Create 
              </Button.Ripple>
              <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
 

    </Fragment>
  )
}

export default Tables
