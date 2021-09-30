import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import AutoCompleteBasic from './AutoCompleteBasic'
import AutoCompleteAjax from './AutoCompleteAjax'
import AutoCompleteSections from './AutoCompleteSections'
import AutoCompleteRender from './AutoCompleteRender'
import AutoCompleteSuggestions from './AutoCompleteSuggestions'
import AutoCompleteSearchLimit from './AutoCompleteLimit'
import {
  basicExample,
  sectionExample,
  ajaxExample,
  customRenderExample,
  defaultSuggestionsExample,
  searchLimitExample
} from './AutoCompleteSourceCode'
import Image from '../autocomplete/images/paytm.png'
import Image2 from '../autocomplete/images/mobikwik.png'
import Image3 from '../autocomplete/images/phonepe.png'

const AutoComplete = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs
        breadCrumbTitle='Pay Amount'
        breadCrumbParent='Dashboard'
        breadCrumbActive='Pay Amount'
      />
     <Card style={{backgroundColor:"red"}}>
     <Row>
          <Col sm ={3}>
            <span style={{fontSize:"17px", fontWeight:"600"}}>Amount Payable</span>
          </Col>
          <Col sm ={3}>
            <span style={{fontSize:"17px", fontWeight:"600"}}>$99</span>
          </Col>
        </Row>
     </Card>
     <Card style={{backgroundColor:"red"}}>
     <span style={{fontSize:"17px", fontWeight:"600"}}>UPI</span>
     </Card>
     <Card style={{backgroundColor:"red"}}>
     <span style={{fontSize:"17px", fontWeight:"600"}}>Saved Payment options</span>
     <br></br> <br></br> <br></br>
     <Row>
          <Col sm ={3}>
            <span style={{fontSize:"17px", fontWeight:"600"}}>
              
            <img style={{width:"15%"}} src={Image}></img>
            </span>
          </Col>
          <Col sm ={3}>
            <span style={{fontSize:"18px", fontWeight:"600"}}>Payment Wallet</span>
          </Col>
          <Col sm ={4}>
          <form>
        <input type="radio" value="male" id="male" name="gender"/>
            <label for="male"></label>
            <br></br>
         </form>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm ={3}>
            <span style={{fontSize:"17px", fontWeight:"600"}}>
              
            <img style={{width:"15%"}} src={Image2}></img>
            </span>
          </Col>
          <Col sm ={3}>
            <span style={{fontSize:"18px", fontWeight:"600"}}>Payment Wallet</span>
          </Col>
          <Col sm ={4}>
          <form>
        <input type="radio" value="male" id="male" name="gender"/>
            <label for="male"></label>
            <br></br>
         </form>
         </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm ={3}>
            <span style={{fontSize:"17px", fontWeight:"600"}}>
              
              <img style={{width:"15%"}} src={Image3}></img>
            </span>
          </Col>
          <Col sm ={3}>
            <span style={{fontSize:"18px", fontWeight:"600"}}>Payment Wallet</span>
          </Col>
          <Col sm ={4}>
          <form>
        <input type="radio" value="male" id="male" name="gender"/>
            <label for="male"></label>
            <br></br>
         </form>
         </Col>
        </Row> <br></br> <br></br>
     </Card>
     <Card style={{backgroundColor:"red"}}>
     <span style={{fontSize:"17px", fontWeight:"600"}}>Other Payment Otions</span>
     </Card>
     <Card>
     <Row>
          <Col sm ={4}>
            <span style={{fontSize:"18px", fontWeight:"600"}}>Debit/ATM Wallet</span>
          </Col>
          <Col sm ={4}>
          <form>
        <input type="radio" value="male" id="male" name="gender"/>
            <label for="male"></label>
            <br></br>
         </form>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm ={4}>
            <span style={{fontSize:"18px", fontWeight:"600"}}>Credit Card</span>
          </Col>
          <Col sm ={4}>
          <form>
        <input type="radio" value="male" id="male" name="gender"/>
            <label for="male"></label>
            <br></br>
         </form>
         </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm ={4}>
            <span style={{fontSize:"18px", fontWeight:"600"}}>Net Banking</span>
          </Col>
          <Col sm ={4}>
          <form>
        <input type="radio" value="male" id="male" name="gender"/>
            <label for="male"></label>
            <br></br>
         </form>
         </Col>
        </Row> <br></br> <br></br>
     </Card>
    </Fragment>
  )
}
export default AutoComplete
