/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardImage, CardInfo, NameText, ServingText } from './home/home-components.style';

const Category_card = ({ categoryItem, onPress }) => {
    return (
        <Card onPress={onPress}>
            <CardImage
                source={categoryItem.image}
                resizeMode="cover"
            />
            <CardInfo>
                <NameText>
                    {categoryItem.name}
                </NameText>

                <ServingText>
                    {categoryItem.duration} | {categoryItem.serving} Serving
                </ServingText>
            </CardInfo>
        </Card>
    );
};

export default Category_card;
