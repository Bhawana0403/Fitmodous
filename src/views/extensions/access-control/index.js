import { useContext } from 'react'
import { AbilityContext } from '@src/utility/context/Can'
import { Row, Col, Card, CardBody, CardTitle, CardText, CardHeader, Form, FormGroup, Label, Input, CustomInput,
Button} from 'reactstrap'

const AccessControl = () => {
  const ability = useContext(AbilityContext)
  return (
    <Row>
      <Col md='8' sm='12'>
      <Card>
      <CardHeader>
        <CardTitle tag='h4'>Give your valuable Feedback</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
           Enter your   Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='   Enter your   Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='name'>
            Enter your mail id
            </Label>
            <Col sm='9'>
            <Input type='text' name='name' id='name' placeholder='   Enter your mail id' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
            Enter your social media link
            </Label>
            <Col sm='6' md='6'>
            <Input type='text' name='name' id='name' placeholder='   Enter your social media link' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
            Enter your Message
            </Label>
            <Col sm='6'ms='6'>
            <Input type='text' name='name' id='name' placeholder='Enter your Message' />
            </Col>
          </FormGroup>
  
         
          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
        
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
Submit
              </Button.Ripple>
              <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
        </Col>
    </Row>
  )
}

export default AccessControl
