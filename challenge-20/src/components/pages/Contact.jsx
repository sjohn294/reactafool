import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './pages.css';

function ContactForm() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } 
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!email || !message ) {
      setErrorMessage('Form is incomplete');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
   console.log(email, message)
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
   .then((result) => {
       console.log(result.text);
   }, (error) => {
       console.log(error.text);
   });

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage('');
    setEmail('');
  };
  return (
    <Form className='contact-form' onSubmit={handleFormSubmit} ref={form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        name= 'email'
        value= {email}
        onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicMessage"> 
        <Form.Label>Message</Form.Label>
        <Form.Control 
        name='message'
        value={message}
        onChange={handleInputChange}
        
        as="textarea" 
        placeholder="Enter message" />
        </Form.Group>
      </Form.Group>
      

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
