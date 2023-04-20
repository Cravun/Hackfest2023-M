import React from "react";
import {
  StyleSheet,
  Text,
  Linking,
  Button,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

// Firebase Authentication
import { auth } from "../firebase";

export default function AccountSetting() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("SignIn");
    });
  };

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate(Dashboard)}>
            <View>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/BackButton.png")}
              />
            </View>
          </TouchableOpacity>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 25, paddingBottom: 10 }}>Account</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
          <View
            style={{
              height: 110,
              width: "100%",
              borderRadius: 10,
              borderWidth: 0.5,
              color: "gray",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: 66,
                width: 66,
                borderRadius: 66,
                backgroundColor: "gray",
                margin: 21,
                justifyContent: "center",
                alignContent: "center",
              }}
            ></View>

            <View style={{ flexDirection: "column", marginVertical: 21 }}>
              <View
                style={{
                  height: 22,
                  width: 90,
                  backgroundColor: "#DD4438",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "white",
                    marginVertical: 2,
                  }}
                >
                  Blood Type:{" "}
                </Text>
              </View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                First Name Last Name
              </Text>
              <Text style={{ fontSize: 15, color: "gray" }}>Show Profile</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={[styles.setColor, { fontSize: 20, paddingTop: 20 }]}>
          Account Settings
        </Text>

        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Personal Information
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Appearance
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Login and Security
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Notification
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Privacy and Sharing
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.setColor, { fontSize: 20, paddingTop: 20 }]}>
          Support
        </Text>

        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Report an issue
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              FAQ
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.setColor, { fontSize: 20, paddingTop: 20 }]}>
          Account Session
        </Text>

        <TouchableOpacity onPress={handleSignOut}>
          <View style={AccountSettingButtons.container}>
            <Text style={[styles.setFontSizeOne, { marginHorizontal: 10 }]}>
              Sign out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", height: 130 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: "bold",
    letterSpacing: -0.4,
  },
  setFontSizeThree: {
    fontSize: 25, // Define font size here in Pixels
  },
  setFontSizeFour: {
    fontSize: 30, // Define font size here in Pixels
  },
  // Gray
  setColor: {
    color: "#434343",
  },
  // Red
  setColor2: {
    color: "#DD4438",
  },
});

const AccountSettingButtons = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderBottomWidth: 0.3,
    borderColor: "gray",
    justifyContent: "center",
  },
});

const DonationButton = StyleSheet.create({
  // I want to donate
  Container1: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 130,
  },
  // I need Blood
  Container2: {
    backgroundColor: "#DD4438",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 130,
  },
  Button1: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
    position: "absolute",
    bottom: 10,
  },
  Button2: {
    color: "#DD4438",
    fontWeight: "700",
    fontSize: 14,
    position: "absolute",
    bottom: 10,
  },
});
