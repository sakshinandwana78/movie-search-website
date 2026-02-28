"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactPage() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(nameRegex, "Only letters allowed")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string()
      .matches(phoneRegex, "Phone must be exactly 10 digits")
      .required("Phone is required"),

    message: Yup.string()
      .min(10, "Minimum 10 characters required")
      .required("Message is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Data:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      
      <div className="w-full max-w-xl bg-[#1e293b] p-10 rounded-2xl shadow-2xl border border-gray-700">
        
        <h1 className="text-3xl font-bold text-white text-center mb-8 tracking-wide">
          Contact Us
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="space-y-6">

              {/* Name */}
              <div>
                <Field
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Field
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit Button (Always Visible) */}
              <button
                type="submit"
                disabled={!(isValid && dirty)}
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300
                  ${
                    isValid && dirty
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Submit
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}