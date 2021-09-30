import { useState } from 'react'
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
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

const LocationMarker = () => {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    }
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
const MapEvents = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Your Bank Details</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
               Bank Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder=' Bank Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Date'>
            Bank Account Number
            </Label>
            <Col sm='9'>
              <Input type='Date' name='Date' id='Date' placeholder='   Bank Account Number' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
       IFSC Code
            </Label>
            <Col sm='6' md='6'>
              <Input type='Time' name='Time' id='Time' placeholder='IFSC Code' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Time'>
            You mail id
            </Label>
            <Col sm='6'ms='6'>
              <Input type='Time' name='Time' id='Time' placeholder='Your mail id' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='I confirm the above details are correct' defaultChecked={false} />      </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
        
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
Create 
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
export default MapEvents
