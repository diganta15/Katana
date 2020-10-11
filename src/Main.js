import React, { useState, useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import firebaseConfig from './firebase'
import { AuthContext } from './Auth';
import { Button } from '@material-ui/core';
import { BsMoon, BsSun} from 'react-icons/bs';
import Overview from './components/Overview'







const Main = ({ history }) => {
    const [showNav, setShowNav] = useState(false);
    const [openLogIn, setOpenLogIn] = useState(false);
    const [loginText, setLoginText] = useState('LOG IN');
    const [nightMode, setNightMode] = useState(false);

    //Modal
    const handelOpen = () => {
        setOpenLogIn(!openLogIn);
        setLoginText(openLogIn?"LOG IN":"CANCEL");

    }

    const nightModeToggle = () => {
        setNightMode(!nightMode)
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
            <div className={nightMode?"headerDark":"header"}>
                <div className={nightMode ? "hamburgerDark" : "hamburger"} onClick={() => { setShowNav(!showNav); setOpenLogIn(!setOpenLogIn); setLoginText("LOG IN") }} >
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                </div>
                <div className="headerText"><h1>Katana</h1></div>
                
                <div className="modes" onClick={nightModeToggle}>
                    {nightMode ? (<div style={{ color: 'white', backgroundColor:'black' }}><BsSun size={32} /></div>) : (<div><BsMoon size={32} /></div>)}
                </div>
            </div>

            <div className={showNav ? "navBar" : "hidden"}>
                <div className={nightMode ? "navDark" : ""}>
                    <div className={nightMode ? "hamburgerDark" : "hamburger"} onClick={() => { setShowNav(!showNav) }} >
                        <div className="div"></div>
                        <div className="div"></div>
                        <div className="div"></div>
                    </div>
                    <div className="line"></div>
                    <div className="loginButton">
                        <Button variant="contained" color="primary" onClick={handelOpen}>
                            {loginText}
                        </Button>
                    </div>
                    <div className={openLogIn ? "loginForm" : "hidden"}>
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
                        <Link to="/pages/about" >About</Link>
                    </div>
                    <div className="github">
                        <Link to="/pages/github" >GitHub</Link>
                    </div>
                </div>
                
            </div>

            <Overview />
        </div>
    )
}
export default withRouter(Main)
