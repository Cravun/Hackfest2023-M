import React from "react";
import { StyleSheet, Text, Linking, Button, ScrollView,View, Image, TouchableOpacity } from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Learn() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
      <View style={{width: "95%", justifyContent: "space-between",
            alignItems: "baseline", flexDirection: "row",}}>
          <View>
          <Text style={{ fontSize: 25, paddingBottom: 10,}}>Learn</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate(AccountSetting)}>
            <View style={{ alignItems: "flex-end", height: 40, width: 40,
                        borderRadius: 40, backgroundColor: "gray"}}>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Section I</Text>

        <View style={{ alignItems: "center", justifyContent: "center",
            height: 290, width: 320,
            borderRadius: 8, borderWidth: 0.5, borderColor: "gray",
          }}>
          <Image style={{ width: 106, height: 107 }}
          source={require("../assets/BDLearnPic.png")}></Image>

          <Text style={{fontSize: 17, paddingTop: 10, fontWeight: "bold"}}>
            Blood Donation</Text>
            <Text style={{fontSize: 10, paddingTop: 2, color:"gray"}}>
            1/8 Units</Text>
            <Image style={{ width: 290, height: 10, borderRadius: 8,}}
          source={require("../assets/ProgressBar.png")}></Image>
          <Text style={{fontSize: 10, paddingVertical: 10,paddingHorizontal: 55, textAlign: "center",}}>
           Start with essential information and benefits on
           blood donation.</Text>

           <TouchableOpacity>
              <View style={{ alignItems: "center", justifyContent: "center",
            height: 30, width: 200, borderRadius: 8, backgroundColor: "#DD4438",
              }}>
                <Text style={{fontSize: 13, color: "#fff",}}>
                  Start</Text> 
              </View>
           </TouchableOpacity>

        </View>
        

        <View style={{ alignItems: "center", justifyContent: "center",
            height: 20, width: 320, }}/>

        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Section II</Text>

        <View style={{ alignItems: "center", justifyContent: "center",
            height: 300, width: 320,
            borderRadius: 8, borderWidth: 0.5, borderColor: "gray",
          }}>
          <Image style={{ width: 87, height: 117, transform: [{ scaleX: -1 }]}}
          source={require("../assets/BDLearnPic.png")}></Image>

          <Text style={{fontSize: 17, paddingTop: 10, fontWeight: "bold"}}>
            Blood Request</Text>
            <Text style={{fontSize: 10, paddingTop: 2, color:"gray"}}>
            1/8 Units</Text>
            <Image style={{ width: 290, height: 10, borderRadius: 8,}}
          source={require("../assets/ProgressBar.png")}></Image>
          <Text style={{fontSize: 10, paddingVertical: 10,paddingHorizontal: 55, textAlign: "center",}}>
           Lorem Ipsum.</Text>

           <TouchableOpacity>
              <View style={{ alignItems: "center", justifyContent: "center",
            height: 30, width: 200, borderRadius: 8, backgroundColor: "#DD4438",
              }}>
                <Text style={{fontSize: 13, color: "#fff",}}>
                  Start</Text> 
              </View>
           </TouchableOpacity>

        </View>


      </View>
      
      <View style={{width:'100%', height: 70}}/>

    </ScrollView>
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
