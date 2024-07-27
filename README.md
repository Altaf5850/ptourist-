# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import axios from 'axios';
import React, { useState } from 'react'

const Contactss = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_5fx7g61';
    const templateId = 'template_1eow63c';
    const publicKey = '6AgzQ6eklRzC-8Tgy';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }

}

return (
<div>
<form onSubmit={handleSubmit} className='emailForm'>
<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<textarea
cols="30"
rows="10"
value={message}
onChange={(e) => setMessage(e.target.value)} >
</textarea>
<button type="submit">Send Email</button>
</form>
</div>
)
}

export default Contactss