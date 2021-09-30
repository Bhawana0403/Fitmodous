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
import LightBoldHeadings from './LightBoldHeadings'

const CustomizingHeadings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Create Package</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
            Package  Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Package  Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Package  Price
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder=' Package  Price' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Package  Description
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder=' Package  Price' />
            </Col>
          </FormGroup>  
           <FormGroup row>
            <Label sm='3' for='trainername'>
            Package Prons
            </Label>
            <Col sm='9'>
              <Input type='text' name='password' id='password' placeholder='Trainer Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Package  Cons
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder=' Package  Price' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='All the details I filled above was correct' defaultChecked={false} /> </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 2 }}>
           <LightBoldHeadings/>
              <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default CustomizingHeadings
