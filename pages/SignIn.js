import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const SignIn = () => {
  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [InputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (name, value) => {
    setInputValues({
      ...InputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(InputValues.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }
    if (!PASSWORD_REGEX.test(InputValues.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }
    Alert.alert("Success", "You have successfully logged in");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Welcome back! </Text>
      <View>
        <Text style={styles.text1}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("email", text)}
          value={InputValues.email}
          keyboardType="email-address"
          autoCapitalize="words"
        />
      </View>
      <View>
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("password", text)}
          value={InputValues.password}
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
  text1: {
    fontSize: 20,
    fontWeight: 600,
  },
  text2: {
    fontSize: 32,
    fontWeight: 600,
    marginTop: 60,
    position: "relative",
  },
});

export default SignIn;
