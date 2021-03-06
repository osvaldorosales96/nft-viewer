import React from 'react';
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderContainer from "container/header/HeaderContainerThree";
import HeaderConfig from "components/header/elements/config/HeaderConfigOne";

import logo from 'assets/img/logo/home-architecture-logo.png'

const HeaderFour = () => {
    return (
        <HeaderContainer>
            <div className="header-left flex-80">
                <Logo logo={logo}/>
                <Navbar className="flex-grow-0 pl--40"/>
            </div>

            <div className="header-right pr_md--30 pr_sm--30 flex-20">
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderFour;