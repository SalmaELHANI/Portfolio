import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation de l'e-mail avec une expression régulière simple
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(formData.email)) {
      setAlertMessage('Please enter a valid email address');
      return;
    }
    if (formData.phone && formData.phone.length !== 10) {
      setAlertMessage('Phone number must be 10 digits');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact/create', formData);
      if (response.status === 201) {
        setAlertMessage('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleAlertClose = () => {
    setAlertMessage('');
  };

  return (
    <div className="bg-[#2d123c] h-screen" style={{ fontFamily: 'Poetsen One, sans-serif' }}>
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
          {alertMessage && (
            <div className="bg-red-500 text-white px-4 py-2 mb-4 rounded">
              <p>{alertMessage}</p>
              <button onClick={handleAlertClose} className="ml-2 text-white font-semibold focus:outline-none">Close</button>
            </div>
          )}
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-[#F6D969]"
                  placeholder="Salma EL HANI"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-[#F6D969]"
                  placeholder="salmaelhani7@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="0623558553"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-[#F6D969]"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                id="message"
                rows="5"
                placeholder="Typing your message here..."
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-[#F6D969]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-md mt-5 bg-[#F6D969] py-2 px-9 border-2 border-[#F6D969] text-[#2d123c] hover:text-[#F6D969] hover:bg-[#3F264D] hover:border-2 hover:border-[#F6D969] rounded text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#F6D969]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
