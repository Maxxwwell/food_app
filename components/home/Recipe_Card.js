/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { images } from '../../constants';
import { IntroText, RecipeCard, RecipeImage, RecipeItems, RecipeText, SmallSpace, TextContainer } from './home-components.style';


const Recipe_Card = () => {
    return (
        <RecipeCard>
            <RecipeItems>
                <RecipeImage source={images.recipe} />
            </RecipeItems>

            <TextContainer>
                <IntroText>You have 12 recipes that you haven't tried yet</IntroText>

                <SmallSpace />

                <TouchableOpacity>
                    <RecipeText>See all recipes</RecipeText>
                </TouchableOpacity>

            </TextContainer>

        </RecipeCard>
    );
};

export default Recipe_Card;
