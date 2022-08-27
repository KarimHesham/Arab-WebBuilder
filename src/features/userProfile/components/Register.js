import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase/firebase";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../services/firebase/auth";
import { setUser } from "../../../state/features/userDataSlice";
import GoogleIcon from "@mui/icons-material/Google";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading || error) return;
    if (user) {
      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          username: user.email.split("@")[0],
        })
      );
      navigate(`/${user.email.split("@")[0]}/workspaces`);
    }
  }, [user, loading, error, navigate, dispatch]);

  const emailRegistration = (email, password) => {
    if (email && password) {
      registerWithEmailAndPassword(email, password)
        .then(() => {
          console.log("Registration successful");
        })
        .catch((err) => err ?? console.log(err));
    }
  };

  const googleRegistration = () => {
    signInWithGoogle()
      .then(() => {
        console.log("Google sign up successful");
      })
      .catch((err) => console.log(err));
  };

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const registerValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password should be at least 8 characters")
      .matches(
        /[a-z]+/,
        "Password must contain at least one lowercase character"
      )
      .matches(
        /[A-Z]+/,
        "Password must contain at least one uppercase character"
      )
      .matches(
        /[@$!%*#?&]+/,
        "Password must contain at least one special character"
      )
      .matches(/\d+/, "Password must contain at least one number"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidation}
        onSubmit={(values) => {
          console.log("Form submitted");
          emailRegistration(values.email, values.password);
        }}
      >
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <Form>
                  <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="text-lg mb-0 mr-4">Sign in with</p>
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => googleRegistration()}
                      className="py-3 px-6 bg-blue-600 text-white font-medium text-sm flex items-center leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <GoogleIcon className="mr-1" /> Google
                    </button>
                  </div>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col justify-between">
                      <label className="font-semibold">Email</label>

                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-red-400"
                      />
                    </div>

                    <Field
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col justify-between">
                      <label className="font-semibold">Password</label>
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="text-red-400"
                      />
                    </div>

                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col justify-between">
                      <label className="font-semibold">Confirm Password</label>
                      <ErrorMessage
                        name="confirmPassword"
                        component="span"
                        className="text-red-400"
                      />
                    </div>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Register
                    </button>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                      Already have an account?
                      <NavLink
                        to="/login"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        Login
                      </NavLink>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </Formik>
    </div>
  );
};

export default Register;
