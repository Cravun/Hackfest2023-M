import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  DatePicker,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function DonorForm() {
  const [InputValues, setInputValues] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
  });

  const RequestCollectionRef = collection(db, "Donor Form");

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...InputValues,
      [fieldName]: value,
    });
  };
  const handleNextStep = () => {
    setInputValues({
      ...InputValues,
      Step: InputValues.Step + 1,
    });
    if (String(InputValues.FirstName).trim() === "") {
      alert("First Name is required");
      return;
    }
    if (String(InputValues.LastName).trim() === "") {
      alert("Last Name is required");
      return;
    }
    if (String(InputValues.Sex).trim() === "") {
      alert("Sex is required");
    }
    if (String(InputValues.RelationshipStatus).trim() === "") {
      alert("Status is required");
    }
    if (
      !isNameValid(InputValues.FirstName) ||
      !isNameValid(InputValues.MiddleName) ||
      !isNameValid(InputValues.LastName)
    ) {
      alert("Please Enter a Valid Name");
      return;
    }
    // Submit form data
  };

  const handlePrevStep = () => {
    setInputValues({
      ...InputValues,
      Step: InputValues.Step - 1,
    });
    console.log(InputValues);
  };

  const HandleSubmit = () => {
    addDoc(RequestCollectionRef, InputValues).then(() => {
      alert("Form Submitted Successfully");
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={InputValues.FirstName}
        onChangeText={(value) => handleInputChange("FirstName", value)}
      />
      <TextInput
        placeholder="Last Name"
        value={InputValues.LastName}
        onChangeText={(value) => handleInputChange("LastName", value)}
      />
      <TextInput
        placeholder="Middle Name"
        value={InputValues.MiddleName}
        onChangeText={(value) => handleInputChange("MiddleName", value)}
      />
      <Button title="Submit" onPress={HandleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
