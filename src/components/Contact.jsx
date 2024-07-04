import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    course: '', // New field for course selection
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    let formValid = true;

    // Extract values from form fields
    const { name, email, message, course } = formData;

    // Validate name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      formValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      formValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Email is invalid';
      formValid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      formValid = false;
    }

    // Validate course selection
    if (!course) {
      newErrors.course = 'Please select your course';
      formValid = false;
    }

    // If form is valid, proceed with form submission
    if (formValid) {
      try {
        const response = await fetch('https://getform.io/f/paygglra', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form successfully submitted');
          // Optionally, clear form data after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
            course: '', // Reset course selection
          });
          setErrors({});
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      // Update errors state with validation errors
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="contact" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Contact Us
      </h2>
      <div className="mt-8 text-lg text-center text-white">
        <p>Email: assessmentchampions@gmail.com</p>
        <p className="mt-2">Mobile: 0426 381 120</p>
        
        <p className="mt-6">You can also send us a message by filling out the form below!</p>
      </div>

      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/paygglra"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={`mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-neutral-700'
            }`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}

          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
              errors.email ? 'border-red-500' : 'border-neutral-700'
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`p-2 bg-transparent border-2 rounded-md text-black focus:outline-none ${
              errors.course ? 'border-red-500' : 'border-neutral-700'
            }`}
            style={{ color: '#000', backgroundColor: '#fff' }} // Adjust background color and text color
          >
            <option value="">Select your course</option>
            <option value="Leadership and Management">Leadership and Management</option>
            <option value="Civil Construction Design">Civil Construction Design</option>
            <option value="Building and Construction">Building and Construction</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Cookery and Hospitality">Cookery and Hospitality</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Other">Other</option>
          </select>
          {errors.course && <p className="text-red-500 mt-2">{errors.course}</p>}

          <textarea
            name="message"
            placeholder="Enter your inquiry, details and number of assignments, deadline, etc."
            rows="10"
            className={`mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
              errors.message ? 'border-red-500' : 'border-neutral-700'
            }`}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
