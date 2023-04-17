import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

export default function Map(){
return(
    <Provider>
        <View>
            <Text>Map</Text>
        </View>


    </Provider>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});