// ** React Imports
import { Link } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
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
import { Mail, Star, Check, Trash, Plus } from 'react-feather'

const TodoSidebar = props => {
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, getTasks, params } = props

  // ** Functions To Handle List Item Filter
  const handleFilter = filter => {
    dispatch(getTasks({ ...params, filter }))
  }

  const handleTag = tag => {
    dispatch(getTasks({ ...params, tag }))
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.filter && params.filter === value) || (params.tag && params.tag === value)) {
      return true
    } else {
      return false
    }
  }

  // ** Functions To Handle Add Task Click
  const handleAddClick = () => {
    handleTaskSidebar()
    setMainSidebar()
  }

  return (
    <div>
        <CardBody>
          <br></br>          <br></br>
          <Breadcrumbs breadCrumbTitle='Create Notification' breadCrumbParent='Dashboard' breadCrumbActive='Create Notification' />
 
          <Card style={{width:"800px"}}>
            <CardTitle style={{marginLeft:"10%"}}>Create Notification</CardTitle>
          <br></br>
        <Form>
          <FormGroup row style={{marginLeft:"0%"}}>
            <Label sm='3' for='name'>
          Notification Title
            </Label>
            <Col sm='7'>
              <Input type='text' name='name' id='name' placeholder='   Notification Title' />
            </Col>
          </FormGroup>
          <FormGroup row style={{marginLeft:"0%"}}>
            <Label sm='3' for='name'>
            Notification Description
            </Label>
            <Col sm='7'>
              <Input type='text' name='name' id='name' placeholder='   Notification Description' />
            </Col>
          </FormGroup>
          <FormGroup row style={{marginLeft:"0%"}}>
            <Label sm='3' for='name'>
         Image Selected
            </Label>
            <Col sm='7'>
              <Input type='text' name='name' id='name' placeholder='Image Selected' />
            </Col>
          </FormGroup>  
          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 2 }}>
            <Button style={{marginLeft:"15%", width:"20%", borderRadius:"20px"}} color="primary" width="40%">
              Next
            </Button>
     
            </Col>
            <br></br>
          </FormGroup>
        </Form>
        <br></br>
        </Card>
        <br></br>
      </CardBody>
    </div>
  )
}

export default TodoSidebar
