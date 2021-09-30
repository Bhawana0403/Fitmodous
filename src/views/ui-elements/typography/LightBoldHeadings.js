import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function LightBoldHeadings() {
  const [modal, setModal] = useState(false)
  const togglePopup = () => setModal(!modal)

  return (
    <div>

      <Button.Ripple  className='mr-4'   onClick={togglePopup} color='primary'  type='button' >
Create package
              </Button.Ripple>
      <Modal isOpen={modal} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}></ModalHeader>
        <ModalBody>
          <form>
        <input type="radio" value="male" id="male" name="gender"
               />
            <label for="male">Free Membership</label>
<br></br>
            <input type="radio" value="female" id="female" name="gender"
              />
            <label for="female">Personal Membership</label>
            <br></br>
            <input type="radio" value="male" id="male" name="gender"
               />
            <label for="male">Basic Membership</label>
<br></br>
         </form>
           </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={togglePopup}>Done</Button>
          <Button color="secondary" onClick={togglePopup}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default LightBoldHeadings
