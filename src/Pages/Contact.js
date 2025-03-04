import React from "react";

const ContactForm = () => {
    return (
        <div className="contact-section mb-5">
            <h2 className="about-title mt-5 mb-5 text-center">
                Contact us
            </h2>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-form">
                        <form>
                            {/* Name Field */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control input-field"
                                    placeholder="First Name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Phone <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control input-field"
                                    placeholder="Phone Number"
                                />
                            </div>


                            {/* Message Field */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Leave us a few words <span className="text-danger">*</span>
                                </label>
                                <textarea className="form-control input-field" rows="3"></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-danger">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
