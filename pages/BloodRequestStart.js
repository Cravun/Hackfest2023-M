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
import Request from "./Request";

export default function BloodRequestStart() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>

      <View style={{width: "100%", justifyContent: "space-between",
            alignItems: "baseline", flexDirection: "row",}}>
          <TouchableOpacity onPress={() => navigation.navigate(Request)}>
          <View>
          <Image
          style={{ width: 40, height: 40 }}
          source={require("../assets/BackButton.png")}/>
          </View> 
          </TouchableOpacity>
        
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "100%", height: 50 }} />

          <Image
            style={{ width: 82, height: 248 }}
            source={require("../assets/BRSPic.png")}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              marginVertical: 10,
              fontWeight: "bold",
            }}
          >
            Blood Request Form
          </Text>

          <Text
            style={{ textAlign: "center", fontSize: 13, marginHorizontal: 25 }}
          >
            The following form will consist of personal and medical information
            questions to verify your need for blood.
          </Text>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#DD4438",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 100,
                marginVertical: 15,
              }}
            >
              <Text style={{ color: "white" }}>Proceed</Text>
            </View>
          </TouchableOpacity>

          <View style={{ width: "100%", height: 40 }} />

          <Text style={{ textAlign: "center", fontSize: 13 }} numberOfLines={2}>
            <Text style={{ color: "#839093" }}>
              By clicking proceed, you agree to our{" "}
            </Text>
            <Text style={{ color: "#DD4438" }}>
              community guidelines and terms and conditions
            </Text>
          </Text>
        </View>
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
