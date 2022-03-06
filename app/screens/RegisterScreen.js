import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from '../components/ActivityIndicator';
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/Forms";
import usersApi from '../api/users'
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {

  const auth = useAuth();
  const [error, setError] = useState();
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    // const result = await usersApi.register(userInfo);
    const result = await registerApi.request(userInfo);

    console.log(result);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error accoured.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />

      <Screen style={styles.container}>

        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          // onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name                                                                  "
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email                                                                     "
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password                                                           "
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
