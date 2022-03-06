import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText/AppText';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import ListingDetailsScreen from './ListingDetailsScreen';
import ViewImageScreen from './ViewImageScreen';

export default function App2() {
    return <ViewImageScreen />
}
{/* <View
        style={{
            // backgroundColor: "dodgerblue",
            // width: 100,
            // height: 100,
            // padding: 20,
            // paddingHorizontal: 10,
            //paddingLeft: 30, //this overwrite the upper padding (only if overlaps)

            //borderWidth: 10,
            //borderColor: "royalblue",
            //borderRadius: 50, //atleast half the box size to get round circle
            // borderTopWidth: 20,
            // borderTopLeftRadius: 50,

            //for iOS and android we have different shodows properties

            // FOR IOS
            //shadowColor: 'gray',
            //shadowOffset: { width: 10, height: 10 },
            //shadowOpacity: 1,
            //shadowRadius: 10, //make shadows softer

            //FOR ANDROID (android don't supply more controls over shadows)
            //elevation: 20 //adds a subtle shadow blurred

        }}
    >
        <View style={{
            backgroundColor: 'gold',
            width: 50,
            height: 50,
        }}></View>

    </View>

    <View style={{
        backgroundColor: 'tomato',
        width: 100, height: 100,
        margin: 20,
    }}></View> */}

{/* <Text style={{
        // fontFamily: 'Roboto',
        //fontSize: 30,
        // fontStyle: 'italic',
        // fontWeight: "600", fontWeight: 'bold', //integer should be in quotes (android not working for default font)
        // color: 'tomato',
        // textTransform: 'capitalize',
        // textDecorationLine: 'line-through',
        // textAlign: 'center',
        // lineHeight: 30,
    }}>I Love React Native. This is my first react native course. I'm loving this course.</Text> */}

{/* <AppText>
    I Love custom Text Components!
</AppText>
<MaterialCommunityIcons
    name="email"
    size={500}
    color={"tomato"} />
<AppButton title={"login"} onPress={() => console.log('pressed')} /> */}
