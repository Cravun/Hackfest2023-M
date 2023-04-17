import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  Linking,
  Button,
  View,
} from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={[styles1.setFontSizeThree, { fontWeight: "bold" }]}>
        {" "}
        SIGN IN{" "}
      </Text>

      <Text style={{ paddingTop: 5, opacity: 0.5 }}>Welcome back! </Text>
      <Text style={{ opacity: 0.5, paddingBottom: 10 }}>
        {" "}
        You've been missed!{" "}
      </Text>

      <View style={{ margin: 5 }}>
        <Text> Email address: </Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 0.5,
          }}
          underlineColorAndroid="transparent"
        />

        <Text style={{ paddingTop: 5 }}> Password: </Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 0.5,
          }}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={{ width: "80%" }}>
        <Text
          style={{
            paddingTop: 2,
            paddingBottom: 20,
            color: "gray",
            textAlign: "right",
          }}
          onPress={() => Linking.openURL("https://www.google.com/")}
        >
          Forgot Password{" "}
        </Text>
      </View>

      <View
        style={[
          {
            width: "70%",
            margin: 10,
            backgroundColor: "red",
            alignContent: "center",
          },
        ]}
      >
        <Button onPress={this.buttonClickListener} title="LOGIN" color="red" />
      </View>

      <Text style={{ opacity: 0.5 }}>
        ---------- Or continue with ----------
      </Text>

      <View
        style={[
          {
            width: "70%",
            margin: 10,
            backgroundColor: "gray",
            alignContent: "center",
          },
        ]}
      >
        <Button
          onPress={this.buttonClickListener}
          title="Continue with Google"
          color="gray"
        />
      </View>

      <Text numberOfLines={1}>
        <Text> Don't have an account yet? </Text>
        <Text
          style={{ color: "red" }}
          onPress={() => Linking.openURL("https://www.google.com/")}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const label = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

const searchSection = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setFontSizeOne: {
    fontSize: 15, // Define font size here in Pixels
  },
  setFontSizeTwo: {
    fontSize: 20, // Define font size here in Pixels
  },
  setFontSizeThree: {
    fontSize: 25, // Define font size here in Pixels
  },
  setFontSizeFour: {
    fontSize: 30, // Define font size here in Pixels
  },
});
