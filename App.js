import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
// import Bugsnag from '@bugsnag/expo';
// Bugsnag.start();


import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import NetInfoFun from './app/demos/NetInfoFun';
import AsyncStorageDemo from './app/demos/asyncStorageDemo';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorageApp from './app/auth/storage';
import {navigationRef} from './app/navigation/rootNavigation';
import ShowNotificationDemo from './app/demos/ShowNotificationDemo';
import logger from './app/utility/logger';

logger.start();

export default function App() {
  // logger.log(new Error("Error in Sellit app"));

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorageApp.getUser();
    if(user) setUser(user);
  };

  if(!isReady)
    return (<AppLoading 
      startAsync={restoreUser}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />);

return (
  <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
       { user ? <AppNavigator/> : <AuthNavigator />}
      <OfflineNotice />
      </NavigationContainer>
    </AuthContext.Provider>
    );
  }

  // return (
  //   <ShowNotificationDemo/>
  //   );
  // }
  /* <AppNavigator /> */
  
  // <AsyncStorageDemo />
  
  // <NetInfoFun />




// import { StatusBar } from 'expo-status-bar';   
// import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Alert, Dimensions, FlatList } from 'react-native';
// import * as ImagePicker from "expo-image-picker";
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { MaterialCommunityIcons } from "@expo/vector-icons";


// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import App2 from './app/screens/App2';
// import MessagesScreen from './app/screens/MessagesScreen';
// import Screen from './app/components/Screen';
// import Icon from './app/components/Icon';
// import AccountScreen from './app/screens/AccountScreen';
// import ListingsScreen from './app/screens/ListingsScreen';
// import AppTextInput from './app/components/AppTextInput';
// import AppPicker from './app/components/AppPicker';
// import LoginScreen from './app/screens/LoginScreen';
// import ListingEditScreen from './app/screens/ListingEditScreen';
// import ImageInput from './app/components/ImageInput';
// import ImageInputList from './app/components/ImageInputList';
// import AppButton from './app/components/AppButton';
// import AppText from './app/components/AppText/AppText';

/* <StackNavigator /> */
/* <TabNavigator /> */





// const categories = [
// { label: 'Clothing', value: 1 },
// { label: 'Groceries', value: 2 },
//   { label: 'Camera', value: 3 },
// ]


// const Link = () => {
  //   const navigation = useNavigation();

//   return (<Button
//     title='Hellow Boys'
//     onPress={() => navigation.navigate('HelloTweet', { id: 1 })}
//   />);
// }

// const Tweets = ({ navigation: { navigate } }) => (
//   <Screen style={{ margin: 15 }}>

//     <Text>Tweets Header</Text>
//     <AppText>Hi Bros </AppText>

//     <AppButton
//       title="View Tweet"
//       color='secondary'
//       onPress={() => navigate("TweetDetails", { id: 1 })}
//     />
//     <Link />
//     {/* <Button
//       title='View Tweet'
//       onPress={() => navigate("TweetDetails")}
//     /> */}
//   </Screen>
// )
// const HelloTweet = ({ route }) => (
//   <Screen>
//     <Text>Hello World!</Text>
//     <Text>{route.params.id}</Text>
//   </Screen>
// )
// const TweetsDetails = () => (
//   <Screen>
//     <Text>Tweet Details</Text>
//   </Screen>
// )

// const Stack = createStackNavigator();
// const FeedNavigator = () => (
//   <Stack.Navigator initialRouteName='Tweets'
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//       // headerShown: false
//     }}
//   >
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetsDetails}
//       options={{
//         title: "Tweet Details",
//         headerStyle: { backgroundColor: "lightblue" },
//         headerTintColor: "red",
//       }}
//     />

//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//     />

//     <Stack.Screen
//       name="HelloTweet"
//       component={HelloTweet}
//       options={{ title: 'Hello Boys', headerStyle: { backgroundColor: 'tomato' } }}
//     />
//   </Stack.Navigator>
// );


// const Account = () => (<Screen><Text>Account Screen Shown</Text></Screen>);

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator tabBarOptions={{
//     activeBackgroundColor: 'tomato',
//     activeTintColor: "white",
//     inactiveBackgroundColor: '#eee',
//     inactiveTintColor: 'black',
//   }}>
//     <Tab.Screen
//       name="Feed"
//       component={FeedNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
//       }}

//     />
//     <Tab.Screen
//       name="Account"
//       component={Account}
//       options={{
//         tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
//       }}
//     />
//   </Tab.Navigator>
// );








  // console.log(Dimensions.get('screen'));
  // const [name, setName] = useState('Usman');
  // const [age, setAge] = useState('44');
  // const [person, setPerson] = useState({name: 'Mario', age: 20});
  // const clickHandler = () =>{
  //   setName('Asia');
  //   setPerson({name: 'Africa', age: 34});
  // }
  // const clickHandler = () => {
  // }

  // return <WelcomeScreen />;

  // const [category, setCategory] = useState(categories[0]);

  // return <ListingEditScreen />
  // return <AccountScreen />
  // return <MessagesScreen />
  // return <ListingEditScreen />




  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // }
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // }

  // return (
  //   <Screen style={{ backgroundColor: '#163424' }}>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={handleAdd}
  //       onRemoveImage={handleRemove}
  //     />
  //   </Screen>
  // );

// below is for picker item suff
// return (
//   <Screen>
//     <AppPicker icon='apps' items={categories} placeholder='Category'
//       selectedItem={category}
//       onSelectItem={item => setCategory(item)}
//     />
//     <AppTextInput placeholder='User Name' icon='email' />
//   </Screen>
// );

// <View
//   style={{
//     backgroundColor: '#fff',
//     flex: 1,
//     flexDirection: 'row', //horizontal
//     justifyContent: 'center', // this only apply to primary axix or to the value of flexDirection (above it's row so it will apply to row)
//     alignItems: 'center' // for secondary axix or the axix opposite of flexDirection value
//      flexWrap: "wrap",  // if this is active then alignItems property will work for individual item within its row or column value
//    alignContent: "center" // this will align everthing to the center if we have flexWrap applied due to more items with multiple row or columns
//   }}
// >
//   <View
//     style={{
//       backgroundColor: 'dodgerblue',
//       width: 100, height: 100
//      flexBasis: 100, //width or height (according to primary axix set by flexdDirection property)
//      flexShrink: 1, // to make space for others according to this value
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: 'gold',
//       width: 100, height: 100
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: 'tomato',
//       width: 100, height: 100
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: 'gray',
//       width: 100, height: 100
//     }}
//   />

/* <SafeAreaView >
      <View style={styles.wrapper}>
         <Image source={require("./assets/icon.png")} />
   <TouchableOpacity>
          <Image
            source={{
              width: 300,
              height: 400,
              uri: 'https://picsum.photos/300/400',
            }}
            fadeDuration={1000}
          />
        </TouchableOpacity>
  <TouchableHighlight>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
          fadeDuration={1000}
        />
      </TouchableHighlight>

   <TouchableNativeFeedback
          onPress={() => console.log('tnf')}
          style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}
        >
          <View>

          </View>
        </TouchableNativeFeedback>
 <Text>My Name is {name}</Text>
      <Text>Hello Sir!</Text>
      <Text>His name is {person.name} and his age is {person.age}.</Text>
   <StatusBar style="auto" />
   <View style={styles.btnContainer}>
          <Text>Enter Name:</Text>
          <TextInput
            multiline
            style={styles.input}
            placeholder='e.g. Asim'
            onChangeText={(e) => setName(e)}
          />

          <Button
            title="Press me now"
            onPress={() => Alert.alert('Simple Button pressed')}
          />

          <Text>Enter Age:</Text>
          <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder='e.g. 45'
            onChangeText={(e) => setAge(e)}
          />

          <Text>Name: {name}, Age: {age}</Text>
          <Text></Text>
          <Button title='update state' onPress={clickHandler}></Button>
        </View>
      </View>
    </SafeAreaView> */
// </View>


// styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'dodgerblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'rgba(14,14,14,1.0)'
//   },
//   wrapper: {
//     width: '85%',
//     alignItems: 'center',
//   }
//   ,
//   text: {
//     // color: 'rgba(255,255,255,1.0)'
//   },
//   btnContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   input: {
//     // color: 'rgba(255,255,255,1.0)',
//     borderWidth: 1,
//     borderColor: '#777',
//     padding: 8,
//     margin: 10,
//     width: 200,
//     borderRadius: 10,
//   }
// });
