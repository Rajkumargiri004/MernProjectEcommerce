import { useState } from "react";
import { Link } from "react-router-dom";

import useStyles from "../UserSignup/style";

const UserSignup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const readinput = (e) => {
    const { name, value } = e.target;
    console.log("name=", name);
    console.log("value=", value);
    setInput({ ...input, [name]: value });
  };

  // const handleSumbit = (e) =>{
  //   e.preventDefault();
  //   axios.post("http://localhost:5000/api/register",{
  //     name: input.name,
  //     email: input.email,
  //     phone: input.phone,
  //     password: input.password,
  //     confirmPassword: input.confirmPassword
  //   })
  //   .then(res=>{
  //     console.log(res.input)
  //   })

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = input;
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        confirmPassword,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("invalid registration");
      console.log("invalid registraiton");
    }
  };
  // toggle usersignup to login

  const toggleMember = () => {
    setInput({ isMember: !input.isMember });
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.formpage}>
        <div className={classes.login}>
          <h3 className={classes.Registerp}>
            {input.isMember ? "Login" : "Register"}
          </h3>
          <p className={classes.regipara}>
            IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO
            ACCESS THE REGISTRATION FORM. BY GIVING US YOUR DETAILS, PURCHASING
            IN ZARA.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.
          </p>
        </div>

        {input.isMember ? (
          <form method="post" className={classes.formcntrl}>
             <div className="form-group">
              <label htmlFor="Name ">Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                className="form-control"
                id="Name"
                onChange={readinput}
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={readinput}
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              onClick={PostData}
              className="btn btn-primary"
            >
              Submit
            </button>
            <div className="logintext">
              <p>
                {input.isMember ? "Not a member yet?" : "Already a member ?"}
                <button type="button" onClick={toggleMember}>
                  {input.isMember ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </form>
        ) : (
          <form method="post" className={classes.formcntrl}>
            <div className="form-group">
              <label htmlFor="Name ">Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                className="form-control"
                id="Name"
                onChange={readinput}
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={readinput}
                className="form-control"
                id="Email"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="mobile">Phone No </label>
              <input
                type="contact"
                name="phone"
                value={input.phone}
                onChange={readinput}
                className="form-control"
                id="mobile"
                placeholder="Enter Contact No"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={readinput}
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={readinput}
                className="form-control"
                placeholder="Confirm  Password"
              />
            </div>

            <button
              type="submit"
              onClick={PostData}
              className="btn btn-primary"
            >
              Submit
            </button>
            <div className="logintext">
              <p>
                {input.isMember ? "Not a member yet?" : "Already a member ?"}
                <button type="button" onClick={toggleMember}>
                  {input.isMember ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UserSignup;
