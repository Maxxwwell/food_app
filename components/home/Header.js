/* eslint-disable prettier/prettier */
import React from 'react';
import { images } from '../../constants';
import { GreetnsText, HeaderItems, HeaderStyle, IntroText, ProfilePic } from './home-components.style';

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderItems>
                <GreetnsText>Hey you,</GreetnsText>
                <IntroText>What do you want to cook today?</IntroText>

            </HeaderItems>
        <ProfilePic source={images.UserProfile5} />

        </HeaderStyle>
    );
};

export default Header;
