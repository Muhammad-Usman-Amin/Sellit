import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

// import AppButton from '../components/AppButton';
// import AppTextInput from '../components/AppTextInput';
// import AppText from '../components/AppText/AppText';
// import ErrorMessage from '../components/Forms/ErrorMessage';
import Screen from '../components/Screen';

import { ErrorMessage, AppFormField, SubmitButton, AppForm } from "../components/Forms";
// import AppFormField from '../components/Forms/AppFormField';
// import SubmitButton from '../components/Forms/SubmitButton';
// import AppForm from '../components/Forms/AppForm';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen() {

    // const authContext = useContext(AuthContext);
    const auth = useAuth();

    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) {
            return setLoginFailed(true);
        }
        setLoginFailed(false);

        auth.logIn(result.data);
        // const user = jwtDecode(result.data);
        // authContext.setUser(user);
        // authStorage.storeToken(result.data);
        // console.log(user);
    }

    return (
        <Screen style={{ paddingHorizontal: 10 }}>


            <Image
                style={styles.logo}
                source={require('../assets/logo.png')} />

            <AppForm
                initialValues={{ email: "", password: "" }}
                // onSubmit={values => console.log(values)}
                onSubmit={handleSubmit}
                validationSchema={validationSchema} >

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Your Email                                                     "
                    textContentType="emailAddress"
                />

                <ErrorMessage
                    error="invalid password and/or email!"
                    visible={loginFailed}
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Your Secret Password                                      "
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 60
    }
});
