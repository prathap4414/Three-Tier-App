import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://EXTERNAL-ALB-1626484032.ap-south-1.elb.amazonaws.com:/api/users', { name, email });
      alert('Data submitted successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Error submitting data , ,');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
