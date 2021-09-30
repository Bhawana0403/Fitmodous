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

const HorizontalForm = () => {
  return (
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
            <Col sm='9'>
              <Input type='Time' name='Time' id='Time' placeholder='Time' />
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
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='All the details above I filled was correct' defaultChecked={false} />

            </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
               Proceed
              </Button.Ripple>
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
export default HorizontalForm
