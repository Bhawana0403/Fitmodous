import { Fragment } from 'react'
import PhoneMask from './PhoneMask'
import DateMask from './DateMask'
import TimeMask from './TimeMask'
import BlocksMask from './BlocksMask'
import PrefixMask from './PrefixMask'
import DelimitersMask from './DelimitersMask'
import CreditCardMask from './CreditCardMask'
import Breadcrumbs from '@components/breadcrumbs'
import CustomDelimitersMask from './CustomDelimitersMask'
import NumeralFormattingMask from './NumeralFormattingMask'
import { Row, Col, Card, CardBody, CardTitle, CardHeader } from 'reactstrap'
import Image from '../input-mask/images/fitmodous.png'
const InputMask = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Privacy and Policy' breadCrumbParent='Dashboard' breadCrumbActive='Privacy and Policy' />
      <Card><br></br>
        <CardTitle style={{marginLeft:"40%", fontSize:"18px", fontWeight:"600"}}>Privacy and Policy of Fitmodous</CardTitle>
      <img style={{paddingLeft:"20%", paddingTop:"10px"}}
          src={Image}class="responsive" width="40%" height="20%"/>
      <CardHeader>
        <CardTitle  style={{fontSize:"15px", fontWeight:"600"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
         recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardTitle>
      </CardHeader>
      <CardHeader>
        <CardTitle  style={{fontSize:"15px", fontWeight:"600"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
         recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardTitle>
      </CardHeader>

      <CardBody>
       
      </CardBody>
    </Card>
    </Fragment>
  )
}
export default InputMask
