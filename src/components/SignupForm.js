import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }

        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        }
        console.log("printing account data");
        console.log(accountData);

        navigate("/dashboard")
        
    }
    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sub>*</sub></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sub>*</sub></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter last Name'
                            value={formData.lastName}
                        />
                    </label>
                </div>

                <label>
                    <p>Email Address<sub>*</sub></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address '
                        value={formData.email}
                    />
                </label>

                <div>
                    <label>
                        <p>Create Password<sub>*</sub></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>


                    <label>
                        <p>Confirm Password<sub>*</sub></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>

                <button>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignupForm