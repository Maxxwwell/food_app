/* eslint-disable prettier/prettier */
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(SafeAreaView)`
    flex: 1;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.black}
`;

export const BackgroundImage = styled(ImageBackground)`
    flex: 0.65
`;

export const Title = styled(Text)`
    width: 90%;
    color: ${({ theme }) => theme.COLORS.white}
    font-size: ${({ theme }) => theme.SIZES.largeTitle}px
    font-weight: 700;
    line-height: 40px
`;

export const TitleContainer = styled(View)`
    height: 47%;
    width: 100%;
    bottom: 10px;
    position: absolute;
    padding-horizontal: 20px;
`;

export const GradientContainer = styled(View)`
    height:20%;
    width: 100%;
    top: 60%
    position: absolute;
`;

export const Details = styled(Text)`
    width: 70%;
    color: ${({ theme }) => theme.COLORS.white}
    font-size: ${({ theme }) => theme.SIZES.body3}px
    font-weight: 400;
    opacity:0.6;
    padding-horizontal: 20px;
    margin-vertical: -15px;
`;

export const LoginButton = styled(TouchableOpacity)`
    height: 90%;
    width: 100%
    background-color: ${({theme}) => theme.COLORS.lime};
    align-items: center;
    justify-content: center;
    elevation: 10;
    border-radius:15px;
    padding-horizontal: 40%
`;

export const ButtonContainer = styled(View)`
    height:10%;
    width: 100%;
    bottom: 15%;
    position: absolute;
    align-items: center;
    padding-horizontal: 20px
    justify-content: center;

`;


export const LoginText = styled(Text)`
    width: 90%;
    color: ${({ theme }) => theme.COLORS.white}
    font-size: ${({ theme }) => theme.SIZES.body2}px
    font-weight: 700;
    justify-content: center;

    
`;
