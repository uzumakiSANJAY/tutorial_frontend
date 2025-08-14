// src/config/api.js

const BASE_URL = "http://127.0.0.1:5001/api/v1"; // Change to your production URL when needed

export const API_ROUTES = {
  //   getMessage: `${BASE_URL}/message`,
  submitForm: `${BASE_URL}/mail/send-mail`,
  submitTeacherForm: `${BASE_URL}/mail/register-teacher`,
  // Add more endpoints as needed
};
