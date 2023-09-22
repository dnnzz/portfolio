import React, { useState } from "react";

const ContactForm: React.FC = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [formErrors, setFormErrors] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Perform validation here
      let valid = true;
      const errors = {
         name: "",
         email: "",
         message: "",
      };

      if (!formData.name) {
         valid = false;
         errors.name = "Name is required";
      }

      if (!formData.email) {
         valid = false;
         errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
         valid = false;
         errors.email = "Invalid email format";
      }

      if (!formData.message) {
         valid = false;
         errors.message = "Message is required";
      }

      if (valid) {
         // Submit the form or perform further actions
         console.log("Form submitted:", formData);
      } else {
         // Update the form errors state
         setFormErrors(errors);
      }
   };

   return (
      <div className="container mx-auto mt-8">
         <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gradient-to-br from-slate-800 to-slate-800/[0.2]  p-8 rounded-lg shadow-lg">
            <div className="mb-4">
               <label htmlFor="name" className="block font-medium text-white">
                  Name
               </label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-b  bg-transparent ${
                     formErrors.name ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-500 focus:outline-none`}
               />
               {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div className="mb-4">
               <label htmlFor="email" className="block font-medium text-white">
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-b  bg-transparent ${
                     formErrors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-500 focus:outline-none`}
               />
               {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div className="mb-4">
               <label htmlFor="message" className="block font-medium text-white">
                  Message
               </label>
               <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border bg-transparent mt-2 ${
                     formErrors.message ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-500 focus:outline-none`}></textarea>
               {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <button type="submit" className="bg-transparent border text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
               Submit
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
