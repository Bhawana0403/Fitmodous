// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components
import SocialTab from './Social'
import AccountTab from './Account'
import InfoTab from './Information'
// ** Store & Actions
import { getUser } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'
// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'
import Image from '../edit/images/salary.png'
import Image2 from '../edit/images/follow.png'
import Image3 from '../edit/images/visibility.png'
import Image4 from '../edit/images/youtube.png'
// ** Styles
import '@styles/react/apps/app-users.scss'
import CardTitle from 'reactstrap/lib/CardTitle'
import Button from 'reactstrap/lib/Button'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'
const UserEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1'),
    store = useSelector(state => state.users),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  // ** Function to get user on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
    return () => dispatch(getUser(parseInt(0)))
  }, [dispatch, id])
  const data = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ]
    
  return (
    <div>
      <CardTitle style={{marginLeft:"30%", fontSize:"17px", marginTop:"2%", fontWeight:"800"}}>Your Dashboard</CardTitle>
      <Row >
                    <Col xs="5">
                    <Button style={{marginLeft:"35%"}} color="primary" width="40%">Upload Video</Button>
        <br></br> <br></br>
                    </Col>
                    <Col xs="5">
                    <Button style={{marginLeft:"35%"}} color="primary" width="40%">Create Event</Button>
        <br></br> <br></br>
                    </Col>
                    </Row>
        <Row >
                    <Col xs="5"><Card>
                    <CardTitle style={{marginLeft:"35%", marginTop:"2%"}}>
                      <img  src={Image}></img> 57.8k
                      <br></br>  <br></br>
                      Total Earnings</CardTitle>
   
      </Card></Col>
                    <Col xs="5"><Card>
                    <CardTitle style={{marginLeft:"35%", marginTop:"2%"}}>
                    <img src={Image2}></img> 57.8k
                      <br></br>  <br></br>
                      Subscribers</CardTitle>
   
      </Card></Col>
            
                </Row>
                <Row >
                    <Col xs="5"><Card>
                    <CardTitle style={{marginLeft:"35%", marginTop:"2%"}}>
                      <img src={Image3}></img> 57.8k
                      <br></br>  <br></br>
                      Total Earnings</CardTitle>
   
      </Card></Col>
                    <Col xs="5"><Card>
                    <CardTitle style={{marginLeft:"35%", marginTop:"2%"}}>
                    <img src={Image4}></img> 57.8k
                      <br></br>  <br></br>
                      Subscribers</CardTitle>
   
      </Card></Col>
            
                </Row>
                <Row >
                    <Col xs="5">
                    <BarChart width={300} height={400} data={data}>
    <Bar dataKey="students" fill="blue" borderRadius="20px"/>
    <YAxis />
  </BarChart>
  <br></br>
  <CardTitle style={{fontWeight:"800"}}>Subscriber Count</CardTitle>
                    </Col>
                    <Col xs="5">
                  
                    <BarChart width={300} height={400} data={data}>
    <Bar dataKey="students" fill="blue" borderRadius="20px"/>
    <YAxis />
  </BarChart>
  <br></br>
  <CardTitle style={{fontWeight:"800"}}>Views Count</CardTitle>
                    </Col>
                    </Row>
   
      
    </div>
  )
}
export default UserEdit
