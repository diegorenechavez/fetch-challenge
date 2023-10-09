import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { deleteSession } from "../../authApiUtil";
import { useState, useEffect } from "react";

export default function NavBar({user, setUser}) {
 
    const location = useLocation();
    const navigate = useNavigate();
    


    const toggleNavBar = ()=>{
        if(location.pathname === "/login"){
            return "hide"
        } else {
            return null;
        }
    }
   
    const logOut = async ()=> {
        const res = await deleteSession();
        sessionStorage.removeItem("currentUser");
        setUser(null);
        localStorage.clear()
        navigate("/")

    }

    const sessionToggle = ()=>{
        if(user){
            return (
                <>
                <h1 id="greeting">Welcome, {user.firstName}</h1>
                <button className="header__button button-secondary" onClick={logOut}>log out</button> 
                {location.pathname !== "/feed" &&
                <button className="header__button " onClick={()=> navigate("/feed")}>Search Page</button> 
                
                }

                </>
            )
        }else{
            return (
                <Link className="header__button" to="/login">Login</Link>
            )
        }
      
    }
    

    return (
        <header className={`header ` + toggleNavBar()}>
            <h1 className="header__title" onClick={()=>navigate("/")}>Fetch <span className="logo">!</span></h1>
            <nav className="header__nav">
                {sessionToggle()}

            </nav>
        </header>
    )
}
