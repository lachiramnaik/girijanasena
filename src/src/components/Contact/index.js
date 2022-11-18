import React from 'react'

import {Form,Button} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer} from 'react-toastify';
import { StyledRow,StyledCol } from './styles'
import { useForm } from '@formspree/react';
import { Container } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
const Contact = () => {
	const [state, handleSubmit] = useForm("xrgdanqo");

	if (state.succeeded) {
		return (
			<>
		{/* <ToastContainer
		position="top-right"
		autoClose={1000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme="light"
		/> */}
		<Navigate to="/" replace={true} />
		</>
		);
	}
	
  return (
    <>
  

<Container>
<StyledRow>
    <StyledCol md={6}>
    <Form 
  onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  required
            type="text" placeholder="Enter your name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" name="email"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter your quaries</Form.Label>
        <Form.Control as="textarea" rows={3}  required  placeholder="Quries"  name="message"/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
    </StyledCol>
</StyledRow>

</Container>

    </>
  )
}

export default Contact