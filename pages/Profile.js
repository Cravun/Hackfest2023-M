import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Button,
  ScrollView,
  View,
  Image,
} from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";
import firebase from "firebase/compat";

export default function Profile() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ScrollView style={{ paddingTop: 50, flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate(AccountSetting)}>
            <View>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/BackButton.png")}
              />
            </View>
          </TouchableOpacity>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 25, paddingBottom: 10, color: "#E1E1E1" }}>
              User Profile
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              backgroundColor: "gray",
              marginTop: 10,
            }}
          />
          <View
            style={{
              height: 22,
              width: 90,
              backgroundColor: "#DD4438",
              borderRadius: 5,
              marginTop: 10,
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
          <Text
            style={[
              styles1.setFontSizeThree,
              { paddingVertical: 5, fontWeight: "bold" },
            ]}
          >
            {firebase.auth().currentUser.email}
          </Text>
          <Text style={styles1.setFontSizeOne}>Location</Text>
        </View>

        <View>
          <Text
            style={[
              styles1.setFontSizeTwo,
              { paddingBottom: 5, paddingTop: 10 },
            ]}
          >
            Badges
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "gray",
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "gray",
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "gray",
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />
          </View>
        </View>

        <View style={{ height: 20, width: "100%" }} />

        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Your Past Donations
        </Text>
      </View>

      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 0.3,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "gray",
              paddingHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles1.setFontSizeOne}>Your Past Donation</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
          </View>
        </View>
        <View style={{ width: "100%", height: 20 }}></View>
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 0.3,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "gray",
              paddingHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles1.setFontSizeOne}>Your Past Donation</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          paddingBottom: 10,
          paddingTop: 30,
          paddingHorizontal: 20,
        }}
      >
        Your Past Requests
      </Text>

      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 0.3,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "gray",
              paddingHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles1.setFontSizeOne}>Your Past Requests</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
          </View>
        </View>
        <View style={{ width: "100%", height: 20 }}></View>
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 0.3,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "gray",
              paddingHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles1.setFontSizeOne}>Your Past Requests</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "center", paddingVertical: 20 }}>
        <Text numberOfLines={1}>
          <Text>Can't find your request history? </Text>
          <Text style={{ color: "#2E5C65" }}>Contact us</Text>
        </Text>
      </View>
      <View style={{ width: "100%", height: 120 }}></View>
    </ScrollView>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  setFontSizeZero: {
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
