import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/ClassForm.css";
import { API_ROUTES } from "../config/api"; // Make sure this exists and points to your backend route

function ClassForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    className: "",
    subject: "",
    stream: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "className" ? { stream: "", subject: "" } : {}),
      ...(name === "stream" ? { subject: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(API_ROUTES.submitForm, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      Swal.fire({
        title: "Request Submitted!",
        text: "Your request is successful. We will contact you soon.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          className: "",
          subject: "",
          stream: "",
        });
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "There was an issue submitting the form.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const classes = [
    "KG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "College",
  ];

  const getSubjectOptions = () => {
    const cls = formData.className;

    if (["KG", "1", "2", "3", "4"].includes(cls)) {
      return ["Bengali", "English", "Mathematics"];
    }
    if (["5", "6", "7", "8", "9", "10"].includes(cls)) {
      return [
        "Bengali",
        "English",
        "Mathematics",
        "Science",
        "History",
        "Geography",
      ];
    }
    if (cls === "11" || cls === "12") {
      if (formData.stream === "PCM") {
        return ["Physics", "Chemistry", "Mathematics"];
      } else if (formData.stream === "PCB") {
        return ["Physics", "Chemistry", "Biology"];
      } else if (formData.stream === "Arts") {
        return ["Bengali", "English", "Philosophy", "Sanskrit"];
      }
    }
    if (cls === "College") {
      return ["Bengali", "English", "Mathematics", "All"];
    }
    return [];
  };

  const showStream = formData.className === "11" || formData.className === "12";
  const subjects = getSubjectOptions();

  return (
    <div id="book-demo" className="form-container">
      <div className="form-overlay">
        <h1>BOOK FREE DEMO CLASS</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone no"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Class Dropdown */}
          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>

          {/* Stream Dropdown */}
          <div className={`stream-container ${showStream ? "show" : ""}`}>
            {showStream && (
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                required
              >
                <option value="">Select Stream</option>
                <option value="PCM">PCM</option>
                <option value="PCB">PCB</option>
                <option value="Arts">Arts</option>
              </select>
            )}
          </div>

          {/* Subject Dropdown */}
          <div
            className={`subject-container ${subjects.length > 0 ? "show" : ""}`}
          >
            {subjects.length > 0 && (
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}>
            SUBMIT
          </button>

          {isSubmitting && (
            <div className="loader-overlay">
              <div className="loader"></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ClassForm;
