import React, { useState } from "react";
import { Element } from "react-scroll";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false); // State for submit success message

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.trim()) {
      setEmailError("Please enter your email");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Message validation
    if (!message.trim()) {
      setMessageError("Please enter your message");
      return;
    }

    // If all validations pass, proceed with form submission
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset fields and show success message
    setEmail("");
    setMessage("");
    setSubmitSuccess(true);

    // Optionally, you can reset the success message after a few seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000); // Reset message after 5 seconds (5000 milliseconds)
  };

  const validateEmail = (email) => {
    // Email regex pattern for basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <Element name="contact" className="w-full bg-white py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Contact <span className="text-[#4CC3ED]">Us</span>
          </h1>
          <p className="text-[#6D737A]">
            Fill out the form below or reach out to us via your email
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-3 py-2 border rounded-md mt-1 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                rows="4"
                style={{ height: "120px", resize: "none" }}
                className={`w-full px-3 py-2 border rounded-md mt-1 ${
                  messageError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your message"
                required
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-sm mt-1">{messageError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            {submitSuccess && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </Element>
  );
};

export default ContactUs;
