import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { auth } from "../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(inputValues.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }
    if (!PASSWORD_REGEX.test(inputValues.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }
    if (inputValues.password !== inputValues.confirmPassword) {
      Alert.alert("Passwords do not match", "Please enter matching passwords");
      return;
    }
    auth
      .createUserWithEmailAndPassword(inputValues.email, inputValues.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Success", "Account created successfully");
        navigation.navigate("NavigationScreen", { screen: "NavigationScreen" });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Welcome to SAGIP!</Text>

      <View>
        <Text style={styles.text1}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("email", text)}
          value={inputValues.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View>
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("password", text)}
          value={inputValues.password}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text style={styles.text1}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("confirmPassword", text)}
          value={inputValues.confirmPassword}
          secureTextEntry={true}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    width: 300,
    height: 48,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  text2: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default SignUp;
