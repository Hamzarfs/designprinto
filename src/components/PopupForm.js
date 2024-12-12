import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa"; // Font Awesome icons
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../Popupform.css"; // Include the CSS file for custom styling

const PopupForm1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmailAndPhone = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phoneRegex = /^\+1\d{10}$/;

    if (!emailRegex.test(formData.email))
      Swal.fire("Error", "Invalid email address", "error");

    if (!phoneRegex.test(formData.phone))
      Swal.fire("Error", "Invalid Phone number. Example: +19876543210", "error");

    return phoneRegex.test(formData.phone) && emailRegex.test(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmailAndPhone()) return;

    setLoading(true);

    await fetch(
      /*'http://localhost:9090/popup-email.php'*/ "https://theappdesign.com/php_mailer/popup.php",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((r) => r.json())
      .then(({ success, message }) => {
        document.querySelector("button[data-bs-dismiss]").click();
        setLoading(false);
        if (success) navigate("/thank-you");
        else Swal.fire("Error", message, "error");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="modal fade" id="popupForm" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0 custom-header">
            <h4 className="modal-title">Get a Quote</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body pt-0">
            <form method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="title" value={formData.title} />
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <FaUser className="me-2" />
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="name"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope className="me-2" />
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control custom-input"
                  id="email"
                  placeholder="example@test.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  <FaPhone className="me-2" />
                  Phone number
                </label>
                <input
                  type="tel"
                  className="form-control custom-input"
                  id="phone"
                  placeholder="+19876543210"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  <FaCommentAlt className="me-2" />
                  Message
                </label>
                <textarea
                  className="form-control custom-input"
                  id="message"
                  placeholder="Your message..."
                  rows="5"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary custom-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        aria-hidden="true"
                      ></span>
                      <span role="status">Submitting...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm1;
