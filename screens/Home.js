/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import Category_card from '../components/Category_card';
import Header from '../components/home/Header';
import { Scaffold } from '../components/home/home-components.style';
import Recipe_Card from '../components/home/Recipe_Card';
import SearchBar from '../components/home/SearchBar';
import { dummyData } from '../constants';
import { COLORS } from '../constants/theme/COLORS';

const Home = ({ navigation }) => {

    return (
        <Scaffold>
            <StatusBar
                backgroundColor={COLORS.darkGreen}
                animated={true}
            />
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <Header />
                        <SearchBar />
                        <Recipe_Card />
                    </View>


                }
                renderItem={({ item }) => {
                    return (
                        <Category_card
                            categoryItem={item}
                            onPress={() => navigation.navigate('Recipe', { recipe: item })}
                        />
                    );
                }}
                ListFooterComponent={
                    <View style={{}} />
                }
            />

        </Scaffold>
    );
};

export default Home;
