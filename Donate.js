import React from "react";
import { StyleSheet, Text, Linking, Button, View, Image } from "react-native";

export default function Donate() {
  return (
    <View style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, paddingBottom: 10 }}>Donate</Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 180,
            width: 320,
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: "tomato",
          }}
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 320,
          }}
        />

        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Your Past Donations
        </Text>
      </View>
      <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
        <View style={{ width: "100%", height: 100, borderWidth: 0.3 }}></View>
        <View style={{ width: "100%", height: 20 }}></View>
        <View style={{ width: "100%", height: 100, borderWidth: 0.3 }}></View>
        <View style={{ width: "100%", height: 80 }}></View>
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
