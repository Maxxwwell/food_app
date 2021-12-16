/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(SafeAreaView)`
    flex: 1;
    padding-top: 10px;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.white};
`;

export const Card = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    elevation: 5;
    border-radius: ${({ theme }) => theme.SIZES.radius}px
    background-color: ${({ theme }) => theme.COLORS.gray2};
`;

export const CardImage = styled(Image)`
    width: 100px;
    height: 100px;
    border-radius: ${({ theme }) => theme.SIZES.radius}px
`;

export const CardInfo = styled(View)`
    width: 65%;
    padding-horizontal: 20px;
`;

export const NameText = styled(Text)`
    flex: 1
    font-size: ${({ theme }) => theme.SIZES.h2}px
    font-weight: 800;
    color: ${({ theme }) => theme.COLORS.black};
`;

export const ServingText = styled(Text)`
    font-size: ${({ theme }) => theme.SIZES.body4}px
    font-weight: 600;
`;

//<__________________________HEADER_______________________________>

export const HeaderStyle = styled(View)`
    flex-direction: row;
    margin-top: 15px;
    margin-horizontal: ${({ theme }) => theme.SIZES.padding}px
    align-items: center;
    height: 80px;
`;

export const HeaderItems = styled(View)`
    flex: 1;
`;

export const GreetnsText = styled(Text)`
    color: ${({ theme }) => theme.COLORS.darkGreen};
    font-size: ${({ theme }) => theme.SIZES.h2}px
    font-weight: 700;
`;

export const IntroText = styled(Text)`   
    font-weight: 600;
    width: 80%
`;

export const ProfilePic = styled(Image)`
    width: 55px;
    height: 55px;
    border-radius: 30px;
    margin-top: 10px;
`;

//<__________________________SEARCH BAR_______________________________>
export const Search = styled(View)`
    flex-direction: row;
    align-items: center;
    margin-vertical: 10px;
    margin-horizontal: ${({ theme }) => theme.SIZES.padding}px;
    padding-horizontal: ${({ theme }) => theme.SIZES.radius}px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.lightGray}
`;


export const SearchImage = styled(Image)`
    width: 25px;
    height: 25px;
    tint-color: ${({ theme }) => theme.COLORS.gray}
`;

export const TextField = styled(TextInput)`
    flex: 1;
    margin-left: ${({ theme }) => theme.SIZES.radius}px;
    font-size: ${({ theme }) => theme.SIZES.body3}px
`;


//<__________________________RECIPE CARD_______________________________>
export const RecipeCard = styled(View)`
    flex-direction: row;
    margin-top: ${({ theme }) => theme.SIZES.base}px;
    margin-horizontal: ${({ theme }) => theme.SIZES.radius}px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.lightGreen}
`;

export const RecipeItems = styled(View)`
    width: 20%;
    align-items: center;
    justfify-content: center;
`;

export const RecipeImage = styled(Image)`
    width: 80px;
    height: 80px;
`;

export const TextContainer = styled(View)`
    padding-horizontal: 10%;
    margin-vertical: 1%
`;

export const SmallSpace = styled(View)`
    height: 5%
`;

export const RecipeText = styled(Text)`   
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.darkGreen};
    text-decoration-line: underline;
`;
