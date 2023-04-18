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
    DateofBirth: "",
    Country: "",
    City: "",
    Province: "",
    Street_Address: "",
    Email: "",
    Phone_Number: "",
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
        key="firstName"
        placeholder="First Name"
        value={InputValues.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
      />
      <TextInput
        key="middleName"
        placeholder="Middle Name"
        value={InputValues.MiddleName}
        onChangeText={(value) => handleInputChange("MiddleName", value)}
      />
      <TextInput
        key="dateOfBirth"
        placeholder="Date of Birth"
        value={InputValues.DateofBirth}
        onChangeText={(value) => handleInputChange("DateofBirth", value)}
      />

      <TextInput
        key="country"
        placeholder="Country"
        value={InputValues.Country}
        onChangeText={(value) => handleInputChange("Country", value)}
      />
      <TextInput
        key="city"
        placeholder="City"
        value={InputValues.City}
        onChangeText={(value) => handleInputChange("City", value)}
      />
      <TextInput
        placeholder="Province"
        value={InputValues.Province}
        onChangeText={(value) => handleInputChange("Province", value)}
      />
      <TextInput
        placeholder="Street Address"
        value={InputValues.Street_Address}
        onChangeText={(value) => handleInputChange("Street_Address", value)}
      />
      <View>
        <Text style={{ color: "#DD4438", fontSize: 12 }}>
          Contact Information
        </Text>
        <TextInput
          placeholder="Email"
          value={InputValues.Email}
          onChangeText={(value) => handleInputChange("Email", value)}
        />
        <TextInput
          placeholder="Phone Number"
          value={InputValues.Phone_Number}
          onChangeText={(value) => handleInputChange("Phone_Number", value)}
        />
      </View>

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
