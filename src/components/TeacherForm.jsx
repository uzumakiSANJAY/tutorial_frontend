import React, { useState } from 'react';
import '../styles/TeacherForm.css';
import { API_ROUTES } from '../config/api';
import Swal from 'sweetalert2';

const TeacherRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: '',
        qualification: '',
        score: '',
        resultFile: null,
        subject: '',
        area: '',
        classes: '',
        hasLaptop: '',
        giveDemo: '',
        idProof: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch(API_ROUTES.submitTeacherForm, {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Form submitted successfully!',
                });
                console.log('Success:', result);

                // Reset form
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    address: '',
                    qualification: '',
                    score: '',
                    resultFile: null,
                    subject: '',
                    area: '',
                    classes: '',
                    hasLaptop: '',
                    giveDemo: '',
                    idProof: null,
                });
                e.target.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error submitting form',
                });
                console.error('Error response:', result);
            }
        } catch (error) {
            console.error('Network error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-background">
            <div className="form-card">
                <h2 className="form-title">Teacher Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required disabled={isSubmitting} />
                        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <div className="form-row">
                        <input type="email" name="email" placeholder="Email ID" onChange={handleChange} required disabled={isSubmitting} />
                        <input type="text" name="address" placeholder="Where do you stay?" onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <div className="form-row">
                        <input type="text" name="qualification" placeholder="Highest Qualification" onChange={handleChange} required disabled={isSubmitting} />
                        <input type="text" name="score" placeholder="Exam Score" onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <div className="form-row">
                        <div>
                            <label>Upload Result</label>
                            <input type="file" name="resultFile" accept="image/*,application/pdf" onChange={handleChange} required disabled={isSubmitting} />
                        </div>
                        <input type="text" name="subject" placeholder="Preferred Subjects" onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <div className="form-row">
                        <input type="text" name="area" placeholder="Preferred Area" onChange={handleChange} required disabled={isSubmitting} />
                        <input type="text" name="classes" placeholder="Preferred Classes" onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <div className="form-row">
                        <input type="text" name="hasLaptop" placeholder="Laptop? (Yes/No)" onChange={handleChange} required disabled={isSubmitting} />
                        <div className="radio-group">
                            <label>Comfortable with demo?</label>
                            <label><input type="radio" name="giveDemo" value="Yes" onChange={handleChange} disabled={isSubmitting} /> Yes</label>
                            <label><input type="radio" name="giveDemo" value="No" onChange={handleChange} disabled={isSubmitting} /> No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>Upload ID Proof / Resume</label>
                        <input type="file" name="idProof" accept="image/*,application/pdf" onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <div className="loader"></div>
                                <span>Submitting...</span>
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TeacherRegistrationForm;