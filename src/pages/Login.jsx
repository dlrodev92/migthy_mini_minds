import {useState, useEffect } from "react";
import logo from "../Img/logo-close.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import quotes from "../data/loginQuotes.json";
import { useAuth } from "../auth/AuthProvider";
export default function Login() {
  const { handleAuthentication } = useAuth(); 

  const [data, setData] = useState(null);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); 

  const [errorMessage, setErrorMessage] = useState(""); 
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: async (user) => {
      const loginUser = await axios.post(
        "https://mighty-mini-minds-backend.onrender.com/login",
        user
      );
      const data = loginUser.data;
      return data;
    },
    onSuccess: (data) => {
      setData(data);
      localStorage.setItem("tokenData", JSON.stringify(data.token));
      localStorage.setItem("userId", JSON.stringify(data.userId));
      handleAuthentication(true), navigate("/appLayout/welcomePage");
    },
    onError: (err) => {
      console.log(err.message);
      const error = JSON.stringify(err.response.data.message); 
      setErrorMessage(error.replace(/"/g, '')); 
    },
  });

  // timeout for error message displayed to user 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage]);

  // function to handle the change of the login form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  // function to handle the login and send the data to the backend to authorize the user
  const handleLogin = () => {
    const user = {
      username: login.username,
      password: login.password,
    };
    if (login.username !== "" && login.password !== "") {
      mutate(user); 
    } 
  };

  const handleAutofillAndLogin = () => {
    const user = {
      username: "jerry123",
      password: "1234",
    };
    mutate(user); 
  };

  const [randomQuote, setRandomQuote] = useState(null); 
  useEffect(() => {
    function generateRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length); 
      const selectedQuote = quotes[randomIndex]; 
      return selectedQuote; 
    }
    const quote = generateRandomQuote(); 
    setRandomQuote(quote); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-screen overflow-y-hidden">
      <img
        src={logo}
        alt="logo"
        className="h-24 w-40 my-8"
      />
      <div className="overflow-y-scroll scrollbar flex flex-col  justify-between align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-3/4 sm:h-4/6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="my-6 sm:my-10 font-bold text-center text-xl sm:text-4xl">
          Mighty Mini Minds
        </h1>
        {isLoading? <p className="my-2 text-center text-base sm:text-lg">Loading...</p> : null}
        {isError? <p className="my-2 text-center text-base sm:text-lg">{errorMessage}</p> : null}
        {randomQuote && (
          <div className="flex flex-col my-4">
            <p className="sm:text-xl font-semibold mx-5">{randomQuote.quote}</p>
            <p className="italic text-sm mt-1">
              {randomQuote.book} by {randomQuote.author}
            </p>
          </div>
        )}

        <div className="flex flex-col items-center">
          <label className="text-lg sm:text-2xl mt-4">Username</label>
          <input
            aria-label="username"
            name="username"
            onChange={handleChange}
            className="bg-skin-input shadow-md p-1 rounded-lg w-[75%] sm:w-80"
          />
          <label className="text-lg sm:text-2xl mt-5">Password</label>
          <input
            aria-label="password"
            type="password"
            name="password"
            onChange={handleChange}
            className="bg-skin-input shadow-md p-1 rounded-lg w-[75%] sm:w-80"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="rounded-md w-32 h-14 sm:w-40 sm:h-16 sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 my-8"
          >
            Login
          </button>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <button className="text-skin-primary" onClick={handleAutofillAndLogin}>Don't want to sign up? Click here</button>
      </div> 
      <div className="space-y-2 my-6 text-center">
        <div className="underline sm:text-xl text-skin-primary">
          <NavLink to="signup">No account? Sign up here!</NavLink>
        </div>
        <div className="underline sm:text-lg text-skin-primary mt-2">
          <NavLink to="./about">About Us</NavLink>
        </div>
      </div>
    </div>
  );
}
