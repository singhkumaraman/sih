import React from "react";
import { useState } from "react";
// import { useContext } from "react";
// import { GlobalContext } from "../Context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignUp = () => {
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Added role state
  //   const context = useContext(GlobalContext);
  //   const signup = async (name, email, password) => {
  //     if (name == "" || password === "" || email === "") {
  //       alert("Please Enter all the fields");
  //       return;
  //     }
  //     const response = await fetch("http://localhost:5001/api/user/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         password: password,
  //       }),
  //     });
  //     if (response.status === 200) {
  //       alert("User Created Successfully");
  //       nav("/login");
  //     } else {
  //       alert("User Already Exists");
  //     }
  //   };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <>
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900 flex-grow">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <BsFillPersonPlusFill className="m-2" />
            Create Account
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                //  onSubmit={() => {
                //    context.signup(user, password, email);
                //  }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div>
                      <label
                        htmlFor="role"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Choose your role
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="radio"
                          id="teacher"
                          name="role"
                          value="teacher"
                          checked={role === "teacher"}
                          onChange={handleRoleChange}
                          className="text-primary-600"
                        />
                        <label
                          htmlFor="teacher"
                          className="text-gray-900 dark:text-white"
                        >
                          Teacher
                        </label>
                        <input
                          type="radio"
                          id="student"
                          name="role"
                          value="student"
                          checked={role === "student"}
                          onChange={handleRoleChange}
                          className="text-primary-600"
                        />
                        <label
                          htmlFor="student"
                          className="text-gray-900 dark:text-white"
                        >
                          Student
                        </label>
                        <input
                          type="radio"
                          id="alumni"
                          name="role"
                          value="alumni"
                          checked={role === "alumni"}
                          onChange={handleRoleChange}
                          className="text-primary-600"
                        />
                        <label
                          htmlFor="alumni"
                          className="text-gray-900 dark:text-white"
                        >
                          Alumni
                        </label>
                      </div>
                    </div>
                    {/* <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div> */}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account yet?{" "}
                  <a
                    href="/"
                    className="font-medium  hover:underline text-primary-500"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
