import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Firebase Authentication
import { auth } from "../firebase";

const SignIn = () => {
  // Navigation and route
  const navigation = useNavigation();
  const route = useRoute();

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
    auth
      .signInWithEmailAndPassword(InputValues.email, InputValues.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Success", "Account Login successfully");
        navigation.navigate("NavigationScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome back! </Text>
        <Text
          style={{
            opacity: 0.5,
            fontSize: 13,
            color: "gray",
            textAlign: "center",
            paddingHorizontal: 20,
          }}
        >
          We have missed you! Enter your credentials
        </Text>
        <Text
          style={{
            opacity: 0.5,
            fontSize: 13,
            color: "gray",
            textAlign: "center",
            paddingHorizontal: 20,
          }}
        >
          to sign in to Sagip.
        </Text>
      </View>

      {/* Email Place holder */}
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

      {/* Password Place holder */}
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

      {/* Sign In Button */}
      <TouchableOpacity onPress={handleSubmit}>
        <View style={[styles.centerall, styles.nextbutton]}>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>

      {/* Dont Have an Account yet? */}
      <View style={[styles.centerall, { paddingVertical: 10 }]}>
        <Text numberOfLines={1}>
          <Text style={{ fontSize: 13 }}>Don’t have an account?</Text>
          <Text
            style={{ color: "#DD4438", fontSize: 13 }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Register Now
          </Text>
        </Text>
      </View>

      {/* Or with */}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          paddingBottom: 10,
          marginVertical: 10,
          width: 342,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
            position: "relative",
            backgroundColor: "#FFFFFF",
            width: 100,
            top: 70,
            left: "50%",
            transform: [{ translateX: -50 }, { translateY: -50 }],
          }}
        >
          Or with
        </Text>
      </View>

      {/*Sign in with*/}
      <View style={[styles.centerall, { paddingVertical: 10 }]}>
        {/*Apple*/}
        <TouchableOpacity>
          <View
            style={[
              styles.centerall,
              styles.signinwithbutton,
              { backgroundColor: "black" },
            ]}
          >
            <Text style={{ fontSize: 15, color: "#fff" }}>
              Sign in with Apple
            </Text>
          </View>
        </TouchableOpacity>

        {/*Google*/}
        <TouchableOpacity>
          <View
            style={[
              styles.centerall,
              styles.signinwithbutton,
              { backgroundColor: "white", borderWidth: 0.3, marginTop: 10 },
            ]}
          >
            <Text style={{ fontSize: 15 }}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  input: {
    width: 342,
    height: 54,
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
  nextbutton: {
    backgroundColor: "#DD4438",
    width: "100%",
    width: 342,
    height: 54,
    borderRadius: 10,
  },
  centerall: {
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 0,
  },
  buttonSubmit: {
    backgroundColor: "#DD4438",
    width: 342,
    height: 54,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
  DontHaveanAccount: {
    paddingTop: 50,
  },
  signinwithbutton: {
    width: 300,
    height: 44,
    borderRadius: 10,
  },
});

export default SignIn;
