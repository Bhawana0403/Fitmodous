// ** Third Party Components
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Mail, Send, Edit2, Star, Info, Trash } from 'react-feather'
import { Row, Col, Card, CardBody, CardTitle, CardText, CardHeader, Form, FormGroup, Label, Input, CustomInput,
Button} from 'reactstrap'

const Sidebar = props => {
  // ** Props
  const { store, sidebarOpen, toggleCompose, dispatch, getMails, resetSelectedMail, setSidebarOpen } = props

  // ** Vars
  const params = useParams()

  // ** Functions To Handle Folder, Label & Compose
  const handleFolder = folder => {
    dispatch(getMails({ ...store.params, folder }))
    dispatch(resetSelectedMail())
  }

  const handleLabel = label => {
    dispatch(getMails({ ...store.params, label }))
    dispatch(resetSelectedMail())
  }

  const handleComposeClick = () => {
    toggleCompose()
    setSidebarOpen(false)
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.folder && params.folder === value) || (params.label && params.label === value)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
       <CardBody>
         <br></br>  <br></br>
         <Card style={{width:"800px"}}>
           <br></br>
           <CardTitle style={{marginLeft:"10%"}}>Get In Touch</CardTitle>
       <Col md='12' sm='12'>
        <Form md='12' sm='12'>
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
            Enter your Message
            </Label>
            <Col sm='9'>
            <Input type='text' name='name' id='name' placeholder='Enter your Message' />
            </Col>
          </FormGroup>
          <br></br>
         
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
        <br></br> <br></br>
        </Col>
        </Card>
      </CardBody>
    </div>
  )
}

export default Sidebar
