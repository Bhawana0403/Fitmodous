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
import Image from '../chat/images/fitmodous.png'
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
const Chat = () => {
  return (
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
  )
}
export default Chat
