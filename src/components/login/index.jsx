import { Link } from "react-router-dom";
import { useState } from "react";
import { postSession } from "../../authApiUtil";
import { useNavigate } from 'react-router-dom';


export default function LoginPage({setCurrentUser}) {

    const navigate = useNavigate();


    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange = (field)=>{
        return (e)=>{
            setUser({...user ,[field]: e.target.value})
           
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const firstNameFormatted = capitalizeFirstLetter(user.firstName)
        const lastNameFormatted = capitalizeFirstLetter(user.lastName)
        const fullName = `${firstNameFormatted}` + " " + `${lastNameFormatted}`;
        const email = user.email;
        
        try {
           const res = await postSession(fullName, email);
           sessionStorage.setItem("currentUser", JSON.stringify(user));
           setCurrentUser(user)
           navigate("/feed")
            
        } catch (error) {
            alert("something Went wrong")
            
        }
        

    }

  const capitalizeFirstLetter = (str) => {
        return str.replace(/^[a-z]/, (match) => match.toUpperCase());
      }
    

    return (
       <div className="login-screen">
        
            <div className="login-screen__form-container">
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <Link to="/" id="back-button">Return Home</Link>
                    <h1 className="title welcome">Welcome Back</h1>
                    <label>
                        First Name:
                        <input type="text" placeholder="ex: Olivia" onChange={handleChange("firstName")} required />
                    </label>

                    <label>Last Name:
                        <input type="text" placeholder="ex: Rodrigo" onChange={handleChange("lastName")} required/>
                    </label>
                    <label>Email:
                        <input type="text" placeholder="ex: ORodgrido@mail.com" onChange={handleChange("email")}  required/>
                    </label>
                    <button id="login-button">Submit</button>
                </form>

            </div>
            <div className="login-screen__image-container">
                <img src="login-image.jpg" alt="" className="login-screen__image"/>

            </div>
       </div>
    )
}
