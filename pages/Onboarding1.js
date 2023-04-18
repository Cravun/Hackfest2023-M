import React from "react";
import { StyleSheet, Text, Linking, Button, View, Image } from "react-native";

export default function Onboarding1() {
  return (
    <View style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, paddingBottom: 10 }}></Text>

        <View
          style={{
            alignItems: "center", justifyContent: "center",
            height: 180, width: 320,}}>
          <Text style={{ fontSize: 20, paddingBottom: 10,textAlign:"center"}}>
            SAGIP is an ease-of-use blood donation and blood request application
            that aims to make traditional processes digitalized and to
            spread awareness to everyone.
            </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 320,
          }}
        />


      </View>
      

      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          borderWidth: 0.5,
          shadowOpacity: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 80,
          }}
        >
          <Text style={{ color: "red" }}>Home</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 80,
          }}
        >
          <Text style={{ color: "red" }}>Donate</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 80,
          }}
        >
          <Text style={{ color: "red" }}>Request</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 80,
          }}
        >
          <Text style={{ color: "red" }}>Learn</Text>
        </View>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  setFontSizeZero:{
    fontSize: 10, // Define font size here in Pixels
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