import React, { useState, useCallback, useContext } from 'react';
import { withRouter, Redirect ,Link} from 'react-router-dom';
import firebaseConfig from './firebase'
import { AuthContext } from './Auth';
import { Button } from '@material-ui/core';







const Main = ({ history }) => {
    const [showNav, setShowNav] = useState(false);
    const [openLogIn, setOpenLogIn] = useState(false)

    //Modal
    const handelOpen = () =>{
        setOpenLogIn(!openLogIn);
        
    }

    

    


    const handleLogIn = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        }
        catch (error) {
            alert(error)
        }
    }, [history]);
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />

    }

    return (

        <div className="">
            <div className="header">
                <div className="hamburger" onClick={() => { setShowNav(!showNav) }} >
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                </div>
                <h1 className="headerText">Katana</h1>
            </div>

            <div className={showNav ? "navBar" : "hidden"}>
                <div className="hamburger" onClick={() => { setShowNav(!showNav) }} >
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                </div>
                <div className="line"></div>
                <div className="loginButton">
                    <Button  variant="contained" color="primary" onClick={handelOpen}>
                        Log In
                    </Button>
                </div>
                <div className={openLogIn ? "loginForm":"hidden"}>
                <h1 className="Login_Header">Log In</h1>
                <form className="loginFields" onSubmit={handleLogIn}>
                        <label htmlFor="">Email </label>
                <input type="email" name="email" placeholder="Email" />
                    
                        <label htmlFor="">Password </label>
                <input type="password" name="password" placeholder="Password" />
                    
                    <button className="loginButton" type="submit">Log In</button>
                </form>
            </div>

               <div className="about">
                    <Link to="pages/About" >About</Link>
               </div>
            </div>
        </div>
    )
}
export default withRouter(Main)
