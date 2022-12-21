import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {API} from '../Config.js'

function Createstudent() {
    const formik = useFormik({
        initialValues: {
            Firstname: "",
            Lastname: "",
            Email: "",
            DOB: "",
            Education: "",
            Location: "",
            About: ""
        },
        validate: () => {
            var errors = {}

            // if (value.Product === "") {
            //     errors.Product = "Enter the Product"
            // } if (value.Product.length < 5) {
            //     errors.Product = "Enter the Above five letter"
            // }

            return errors
        },
        onSubmit: async (total) => {
            await axios.post(`${API.Link}`, total)
            alert("New Product Created Done 'BOSS'")
        }
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row mt-5">
                    <div className="col-md-6 mb-4 ">
                        <div className="form-group">
                            <label htmlFor="first">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter your First name" id="first" value={formik.valuesFirstname} onChange={formik.handleChange} name="Firstname" required/>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="form-group">
                            <label htmlFor="last">Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter your Last Name" id="last" value={formik.values.Lastname} onChange={formik.handleChange} name="Lastname" required/>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-group">
                            <label htmlFor="company">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your Email" id="company" value={formik.values.Email} onChange={formik.handleChange} name="Email" required/>
                        </div>


                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="form-group">
                            <label htmlFor="phone">DOB</label>
                            <input type="date" className="form-control" id="phone" value={formik.values.DOB} onChange={formik.handleChange} name="DOB" required/>
                        </div>
                    </div>
            
                </div>



                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-group">
                            <label htmlFor="email">Education</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter your Education" value={formik.values.Education} onChange={formik.handleChange} name="Education" required/>
                        </div>
                    </div>


                    <div className="col-md-6 mb-4">
                        <div className="form-group">
                            <label htmlFor="Location">Location</label>
                            <input type="text" className="form-control" id="Location" placeholder="Enter your Location" value={formik.values.Location} onChange={formik.handleChange} name="Location" required/>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-12 mb-4">
                        <div className="form-group">
                            <label htmlFor="textarea">About</label>
                            <textarea rows="6" className="form-control" id="email" placeholder="Enter your detail" value={formik.values.About} onChange={formik.handleChange} name="About" required/>
                        </div>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Createstudent