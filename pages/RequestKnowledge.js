import React from "react";
import { StyleSheet, Text, Linking, ScrollView, Button, View, Image, TouchableOpacity } from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";
import Learn from "./Learn";

export default function RequestKnowledge() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{width: "95%", justifyContent: "space-between",
            alignItems: "baseline", flexDirection: "row",}}>
          
          <TouchableOpacity onPress={() => navigation.navigate(Learn)}>
          <View>
            <Image style={{ width: 40, height: 40, }}
                source={require("../assets/BackButton.png")}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(AccountSetting)}>
            <View style={{ alignItems: "flex-end", height: 40, width: 40,
                        borderRadius: 40, backgroundColor: "gray"}}>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:"center", justifyContent: "center", marginVertical: 20,
                      width:'100%', height: 35, backgroundColor: "#2E5C65",}}>
        <Text style={{fontSize: 20, fontWeight: "bold",
                      color: "#fff"}}>
            Request Knowledge</Text>
        </View>

        <View style={{ paddingHorizontal: 5 }}>
            <Text style={{ fontSize: 17, paddingBottom: 10 }}>Unit I</Text>
            <TouchableOpacity>
            <View style={{padding: 15, justifyContent: "center", borderColor: "gray",
                  height: 170, width: '100%', borderRadius: 8, borderWidth: 0.5,}}>
              
              <View style={{width: "95%", justifyContent: "space-between",
                  alignItems: "baseline", flexDirection: "row",}}>
              <Text style={{ fontSize: 25, paddingBottom: 10, fontWeight:"bold"}}>
                Requirements</Text>

                <Text style={[styles1.setColor,{ alignItems: "flex-end",fontSize: 15, 
                      paddingBottom: 10, fontWeight:"bold",}]}>
                15%</Text>
              </View>

              <Image style={{ width: '100%', height: 10, borderRadius: 8,}}
                source={require("../assets/ProgressBarBlue.png")}/>

              <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <View style={{height: 50, width: 250, margin: 10}}>
                <Text style={{fontSize: 12, paddingTop: 20}}>
                  Before proceeding with the request,
                </Text>
                <Text style={{fontSize: 12,}}>
                  recipients have to take note of the following
                </Text>
                </View>
                
                <Image style={{ width: 40, height: 40, 
                marginTop: 25,transform: [{ scaleX: -1 }]}}
                source={require("../assets/BackButton.png")}/>
              </View>
            </View>
            </TouchableOpacity>

            <View style={{height: 20, width: '100%',}}/>
                {/*Request Form*/}
                <TouchableOpacity>
                <View style={{padding: 15, justifyContent: "center", borderColor: "gray",
                  height: 170, width: '100%', borderRadius: 8, borderWidth: 0.5,}}>
              
              <View style={{width: "95%", justifyContent: "space-between",
                  alignItems: "baseline", flexDirection: "row",}}>
              <Text style={{ fontSize: 25, paddingBottom: 10, fontWeight:"bold"}}>
                Request Form</Text>

                <Text style={[styles1.setColor,{ alignItems: "flex-end",fontSize: 15, 
                      paddingBottom: 10, fontWeight:"bold",}]}>
                15%</Text>
              </View>

              <Image style={{ width: '100%', height: 10, borderRadius: 8,}}
                source={require("../assets/ProgressBarBlue.png")}/>

              <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <View style={{height: 50, width: 250, margin: 10}}>
                <Text style={{fontSize: 12, paddingTop: 20}}>
                  How do you get request form? Which personal
                </Text>
                <Text style={{fontSize: 12,}}>
                  and medical informations are needed?
                </Text>
                </View>
                
                <Image style={{ width: 40, height: 40, 
                marginTop: 25,transform: [{ scaleX: -1 }]}}
                source={require("../assets/BackButton.png")}/>
              </View>
            </View>
            </TouchableOpacity>

            <View style={{height: 20, width: '100%',}}/>

            {/* Unit II */}
            <Text style={{ fontSize: 17, paddingBottom: 10 }}>Unit II</Text>

            {/* Blood Service Fee */}
            <TouchableOpacity>
            <View style={{padding: 15, justifyContent: "center", borderColor: "gray",
                  height: 170, width: '100%', borderRadius: 8, borderWidth: 0.5,}}>
              
              <View style={{width: "95%", justifyContent: "space-between",
                  alignItems: "baseline", flexDirection: "row",}}>
              <Text style={{ fontSize: 25, paddingBottom: 10, fontWeight:"bold"}}>
                Blood Service Fee</Text>

                <Text style={[styles1.setColor,{ alignItems: "flex-end",fontSize: 15, 
                      paddingBottom: 10, fontWeight:"bold",}]}>
                15%</Text>
              </View>

              <Image style={{ width: '100%', height: 10, borderRadius: 8,}}
                source={require("../assets/ProgressBarBlue.png")}/>

              <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <View style={{height: 50, width: 250, margin: 10}}>
                <Text style={{fontSize: 12, paddingTop: 20}}>
                  Blood bags are processed and stored by
                </Text>
                <Text style={{fontSize: 12,}}>
                  professionals. These requires processing fees
                </Text>
                </View>
                
                <Image style={{ width: 40, height: 40, 
                marginTop: 25,transform: [{ scaleX: -1 }]}}
                source={require("../assets/BackButton.png")}/>
              </View>
            </View>
            </TouchableOpacity>

            <View style={{height: 20, width: '100%',}}/>

            {/* Unit III */}
            <Text style={{ fontSize: 17, paddingBottom: 10 }}>Unit III</Text>

            {/* The Next Steps */}
            <TouchableOpacity>
            <View style={{padding: 15, justifyContent: "center", borderColor: "gray",
                  height: 170, width: '100%', borderRadius: 8, borderWidth: 0.5,}}>
              
              <View style={{width: "95%", justifyContent: "space-between",
                  alignItems: "baseline", flexDirection: "row",}}>
              <Text style={{ fontSize: 25, paddingBottom: 10, fontWeight:"bold"}}>
                The Next Steps</Text>

                <Text style={[styles1.setColor,{ alignItems: "flex-end",fontSize: 15, 
                      paddingBottom: 10, fontWeight:"bold",}]}>
                15%</Text>
              </View>

              <Image style={{ width: '100%', height: 10, borderRadius: 8,}}
                source={require("../assets/ProgressBarBlue.png")}/>

              <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <View style={{height: 50, width: 250, margin: 10}}>
                <Text style={{fontSize: 12, paddingTop: 20}}>
                  {/* Enter text here */}
                </Text>
                <Text style={{fontSize: 12,}}>
                  {/* Enter text here */}
                </Text>
                </View>
                
                <Image style={{ width: 40, height: 40, 
                marginTop: 25,transform: [{ scaleX: -1 }]}}
                source={require("../assets/BackButton.png")}/>
              </View>
            </View>
            </TouchableOpacity>

        </View>
        <View style={{height: 120, width: '100%',}}/>
      </View>
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
