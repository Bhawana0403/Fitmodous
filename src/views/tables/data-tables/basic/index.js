// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col, Card} from 'reactstrap'

// ** Tables
import TableExpandable from './TableExpandable'
import TableZeroConfig from './TableZeroConfig'
import TableWithButtons from './TableWithButtons'
import TableMultilingual from './TableMultilingual'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import Image from '../basic/images/smile.gif'
import Image2 from '../basic/images/gym.png'
import CardTitle from 'reactstrap/lib/CardTitle'
const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Events' breadCrumbParent='Dashboard' breadCrumbActive='Events' />
       <Card> <br></br>   <br></br>
         <CardTitle style={{marginLeft:"35%", fontWeight:"800"}}>Congrats, You have Succesfully booked</CardTitle>
       <img style={{width:"20%", marginLeft:"40%"}}src={Image}></img>
         <br></br>   <br></br>
         <CardTitle style={{marginLeft:"40%", fontWeight:"800"}}>Your Event Details</CardTitle>
         <br></br>
         <img style={{width:"20%", marginLeft:"40%"}}src={Image2}></img>
         <br></br>
         <CardTitle style={{marginLeft:"40%", fontWeight:"800"}}>On Oct 5 th Oct 2021</CardTitle>
    
        </Card>
    </Fragment>
  )
}

export default Tables
