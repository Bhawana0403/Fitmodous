import { Fragment, useContext } from 'react'
import { kFormatter } from '@utils'
import Breadcrumbs from '@components/breadcrumbs'
import StatsCard from './StatsCard'
import OrdersBarChart from './OrdersBarChart'
import ProfitLineChart from './ProfitLineChart'
import SubscribersGained from './SubscribersGained'
import RevenueGenerated from './RevenueGenerated'
import QuaterlySales from './QuaterlySales'
import OrdersReceived from './OrdersReceived'
import SiteTraffic from './SiteTraffic'
import ActiveUsers from './ActiveUsers'
import Newsletter from './Newsletter'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import {
  Eye,
  MessageSquare,
  ShoppingBag,
  Heart,
  Award,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon
} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Table, Row, Col } from 'reactstrap'
const StatisticsCards = () => {
  const context = useContext(ThemeColors)

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Your Subscribers' breadCrumbParent='Dashboard' breadCrumbActive='Your Subscribers' />
      <Row >
         <Col xs={6} style={{color:"black", backgroundColor:"yellow"}} >Basic Membership</Col>
         <Col xs={6}  style={{color:"white", backgroundColor:"blue"}}>Personal Membership</Col>
        </Row>
                <br></br>
      <Table>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Name</th>
          <th>Since</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Randy</td>
          <td>10/2/2021</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Charlie</td>
          <td>3/5/2021</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>James</td>
          <td>6/2/2021</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Randy</td>
          <td>10/2/2021</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Charlie</td>
          <td>3/5/2021</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>James</td>
          <td>6/2/2021</td>
        </tr>
      </tbody>
    </Table>
    </Fragment>
  )
}

export default StatisticsCards
