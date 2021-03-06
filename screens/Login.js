/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackgroundImage, ButtonContainer, Details, GradientContainer, GradientPosition, LoginButton, LoginText, Scaffold, SignupButton, Title, TitleContainer, VerticalSpace } from '../components/login.styled.components/styled';
import { images } from '../constants';
import { COLORS } from '../constants/theme/COLORS';
import { SIZES } from '../constants/theme/SIZES';

const Login = ({ navigation }) => {
    return (
        <Scaffold>
            <StatusBar translucent
                backgroundColor="rgba(0,0,0,0)" />

            <BackgroundImage
                source={images.loginBackground}
                resizeMode="cover" />
            <TitleContainer>
                <Title>Cooking Delicious Food Easily</Title>
            </TitleContainer>

            <GradientContainer>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.black,
                    ]}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        height: 35,
                        paddingHorizntal: SIZES.base,
                    }}
                />
                <Details>Discover more than 1200 food recipes in your hands and cooking it easily</Details>
            </GradientContainer>

            <ButtonContainer>

                <LoginButton
                    activeOpacity={0.8}
                    onPress={() => navigation.push('HomePage')}
                >
                    <LoginText>Login</LoginText>
                </LoginButton>

                <VerticalSpace />

                <SignupButton activeOpacity={0.8}>
                    <LoginText>Sign up</LoginText>
                </SignupButton>

            </ButtonContainer>

        </Scaffold>

    );
};

export default Login;
