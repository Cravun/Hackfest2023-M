import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";

const SignUp = () => {
  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const [inputValues, setInputValues] = useState({
    name: "",
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
    if (!NAME_REGEX.test(inputValues.name)) {
      Alert.alert("Invalid Name", "Please enter a valid name");
      return;
    }
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
    Alert.alert("Success", "You have successfully signed up");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Create Account </Text>
      <View>
        <Text style={styles.text1}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("name", text)}
          value={inputValues.name}
          autoCapitalize="words"
        />
      </View>
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
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
});

export default SignUp;
