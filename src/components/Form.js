// import React, { useState } from 'react';
// import './Form.css'; // Import your custom CSS file for styling (optional)
// // import { useNavigate } from 'react-router-dom';
// import {useForm, ValidationError} from "@form"
// function ContactForm() {
//     const [state, handleSubmit] = useForm("xqkvpqde");
//     if (state.succeeded) {
//         return <p>Thanks for joining!</p>;
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//         <label htmlFor="email">
//           Email Address
//         </label>
//         <input
//           id="email"
//           type="email" 
//           name="email"
//         />
//         <ValidationError 
//           prefix="Email" 
//           field="email"
//           errors={state.errors}
//         />
//         <textarea
//           id="message"
//           name="message"
//         />
//         <ValidationError 
//           prefix="Message" 
//           field="message"
//           errors={state.errors}
//         />
//         <button type="submit" disabled={state.submitting}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// const Form = () => {
//     // const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         email: '',
//         gstNumber: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Process the form data here (e.g., submit to backend or perform validation)
//         console.log(formData);
        
//         // Redirect the user after form submission
//         window.location.href = 'https://kdhandloomscheck2.vercel.app/';
//     };

//     return (
//         <div className="form-container"> {/* Add a class name to the container for styling */}
//             <h2>PLEASE fill basic details to continue</h2>
//             <form action='https://formspree.io/f/xqkvpqde' method='POST' onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                 </div>

//                 <div className="form-group text-2xl">
//                     <label htmlFor="address">Address:</label>
//                     <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email ID:</label>
//                     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="gstNumber">GST Number:</label>
//                     <input type="text" id="gstNumber" name="gstNumber" value={formData.gstNumber} onChange={handleChange} />
//                 </div>

//                 {/* < type="submit">Submit</button> */}
//                 <input type="submit" value="Submit" className='form-btn'/>
//             </form>
//         </div>
//     );
// };

// export default Form;
