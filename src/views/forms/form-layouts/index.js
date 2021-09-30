import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import HorizontalForm from './HorizontalForm'
import HorizontalFormIcons from './HorizontalFormIcons'
import VerticalForm from './VerticalForm'
import VerticalFormIcons from './VerticalFormIcons'
import MultipleColumnForm from './MultipleColumnForm'

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Fill the Information' breadCrumbParent='Dashboard' breadCrumbActive='Fill the information' />
      <Row>
        <Col md='8' sm='12'>
          <HorizontalForm />
        </Col>
        {/* <Col md='6' sm='12'>
        <HorizontalFormIcons /> 
        </Col> */}
        <Col md='6' sm='12'>
          {/* <VerticalForm /> */}
        </Col>
        <Col md='6' sm='12'>
          {/* <VerticalFormIcons /> */}
        </Col>
        <Col sm='12'>
          {/* <MultipleColumnForm /> */}
        </Col>
      </Row>
    </Fragment>
  )
}
export default FormLayouts
