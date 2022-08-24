import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { sendPasswordReset } from "../../../config/firebase/firebase";

const Reset = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const resetPassword = (value) => {
    setEmail(value.email);

    console.log(email);
    if (email) {
      sendPasswordReset(email)
        .then(() => {
          console.log("Password reset email sent");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const initialValues = {
    email: "",
  };

  const resetValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Formik
        initialValues={initialValues}
        validationSchema={resetValidation}
        onSubmit={(values) => {
          console.log("Form Submitted");
          resetPassword(values);
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h2>
            <Form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>

                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-400 text-sm"
                  />
                </div>

                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset passwod
              </button>

              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have have an account?
                <NavLink
                  to="/register"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </NavLink>
              </p>
            </Form>
          </div>
        </div>
      </Formik>
    </section>
  );
};

export default Reset;
