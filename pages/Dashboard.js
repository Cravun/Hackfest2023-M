import React from "react";
import {
  StyleSheet,
  Text,
  Linking,
  Button,
  View,
  Image,
} from "react-native";

export default function Dashboard() {
    return(
        <View style={{paddingTop: 30, backgroundColor: '#fff', flex: 1}}>
            <View style={{paddingHorizontal: 20,}}>
            <Image style={{width: 100, height: 50,}} 
            source={require("../assets/SAGIPLogo.png")}/>

        <View style={{paddingTop: 20, flexDirection: "row", justifyContent: "space-around",}}>
            <View style={{alignItems: "center", justifyContent: "center",
                height: 110, width: 130, borderRadius: 8,
                borderWidth: 0.5, shadowOpacity: 1}}>
                <Image style={{width: 35, height: 35,}} 
                source={require("../assets/Group12.png")}/>
                <Text style={{color: "red"}}>Donate Blood</Text>
            </View>
            
            <View style={{alignItems: "center", justifyContent: "center",
                height: 110, width: 130, borderRadius: 8,
                borderWidth: 0.5, shadowOpacity: 1}}>
                <Image style={{width: 35, height: 35,}} 
                source={require("../assets/Group12.png")}/>
                <Text style={{color: "red"}}>Request Blood</Text>
            </View>
        </View>

        <Text style={[styles1.setFontSizeTwo, { fontWeight: "bold", paddingTop: 10, paddingBottom: 5 }]}>
            Meet Ana
        </Text>
        
        <Image source={{
            width: 310,
            height: 160,
            uri: "https://images.unsplash.com/photo-1507250671672-b76f9dde4188?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}}/>

        <Text numberOfLines={4} style={{paddingTop: 5}}>
            Ana is a 9-year old girl suffering from anemia
            due to disease-modifying treatments, such as
            chemotherapy for cancer. Take part in keeping
            Ana's smile shine the world.
            <Text style={{color: "red"}}> on press punta sa donate blood
                Donate for Ana.
            </Text>
        </Text>

        <View style={{ width: "95%", justifyContent: "space-between", 
                        alignItems: "baseline", flexDirection: "row"}} >
            <View>
                
                <Text style={[styles1.setFontSizeTwo, {paddingTop: 8,
                paddingBottom: 5, alignItems: "flex-start",}]}
                numberOfLines={1}>
                Learn
                </Text>
            </View>
            
            <View style={{alignItems: "flex-end",}}>
                <Text >See more</Text>
            </View>

        </View>

        <View style={{paddingTop: 5, flexDirection: "row", justifyContent: "space-around",}}>
            
            <View style={{alignItems: "flex-start", justifyContent: "flex-start", flexDirection:"column",
                height: 120, width: 150, borderRadius: 8, paddingHorizontal: 7, paddingVertical: 7,
                borderWidth: 0.5, shadowOpacity: 1, backgroundColor: "tomato"}}>
                <View>   
                <Text style={{color: "white", fontSize: 15}}>Benefits of donating blood</Text>
                </View> 

                <Text numberOfLines={4} style={{color: "white", paddingTop: 8,fontSize: 10}}>
                    It depends on the condition, but many medical conditions
                    do not necessarily disqualify you from donating blood.
                </Text>

            </View>
            
            <View style={{alignItems: "flex-start", justifyContent: "flex-start", flexDirection:"column",
                height: 120, width: 150, borderRadius: 8, 
                paddingHorizontal: 7, paddingVertical: 7, paddingBottom: 10,
                borderWidth: 0.2, shadowOpacity: 0.5, backgroundColor: "darkblue"}}>
                
                <View>
                <Text style={{color: "white", fontSize: 15}}>Eligibility for blood donation
                </Text>
                </View>
                
                <Text numberOfLines={4} style={{color: "white", paddingTop: 8,fontSize: 10}}>
                    It depends on the condition, but many medical conditions
                    do not necessarily disqualify you from donating blood.
                </Text>

            </View>
        </View>
        </View>

        <View style={{width: '100%', height: 15,}}></View>

        <View style={{width: '100%', flex: 1, paddingTop: 5, flexDirection: "row", 
              justifyContent: "space-around", borderWidth: 0.5, shadowOpacity: 1}}>
            <View style={{alignItems: "center", justifyContent: "center",
                height: 40, width: 80,}}>
                <Text style={{color: "red"}}>Home</Text>
            </View>
            
            <View style={{alignItems: "center", justifyContent: "center",
                height: 40, width: 80,}}>
                <Text style={{color: "red"}}>Donate</Text>
            </View>

            <View style={{alignItems: "center", justifyContent: "center",
                height: 40, width: 80,}}>
                <Text style={{color: "red"}}>Request</Text>
            </View>

            <View style={{alignItems: "center", justifyContent: "center",
                height: 40, width: 80,}}>
                <Text style={{color: "red"}}>Learn</Text>
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