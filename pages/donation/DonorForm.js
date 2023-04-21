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
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function DonorForm() {
  const [InputValues, setInputValues] = useState({
    Step: 1,
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
    if (String(InputValues.FirstName).trim() === "") {
      alert("First Name is required");
      return;
    }
    if (String(InputValues.LastName).trim() === "") {
      alert("Last Name is required");
      return;
    }
    if (String(InputValues.MiddleName).trim() === "") {
      alert("Middle Name is required");
      return;
    }
    if (String(InputValues.DateofBirth).trim() === "") {
      alert("Date of Birth is required");
      return;
    }
    if (String(InputValues.Country).trim() === "") {
      alert("Country is required");
      return;
    }
    if (String(InputValues.City).trim() === "") {
      alert("City is required");
      return;
    }
    if (String(InputValues.Province).trim() === "") {
      alert("Province is required");
      return;
    }
    if (String(InputValues.Street_Address).trim() === "") {
      alert("Street Address is required");
      return;
    }
    if (String(InputValues.Email).trim() === "") {
      alert("Email is required");
      return;
    }
    if (String(InputValues.Phone_Number).trim() === "") {
      alert("Phone Number is required");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        key="firstName"
        placeholder="First Name"
        value={InputValues.FirstName}
        onChangeText={(value) => handleInputChange("FirstName", value)}
      />
      <TextInput
        key="middleName"
        placeholder="Middle Name"
        value={InputValues.MiddleName}
        onChangeText={(value) => handleInputChange("MiddleName", value)}
      />
      <TextInput
        key="LastName"
        placeholder="Last Name"
        value={InputValues.LastName}
        onChangeText={(value) => handleInputChange("LastName", value)}
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

      <Button title="Next" onPress={handleNextStep} />
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
