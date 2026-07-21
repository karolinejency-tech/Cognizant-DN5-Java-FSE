import React, { useState } from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div style={{ margin: "100px 180px" }}>

            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}

            <br />

            {button}

        </div>
    );
}

export default LoginControl;