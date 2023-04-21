import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
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
    <ScrollView style={styles.opencontainer}>
      <Text style={styles.mainheader}>Personal Information Confirmation:</Text>

      <Text style={styles.subheader}>Confirm your personal information</Text>


      <Text style={styles.inputheader}>First name</Text>
      <TextInput style={styles.input}
        key="firstName"
        value={InputValues.FirstName}
        onChangeText={(value) => handleInputChange("FirstName", value)}
      />

      <Text style={styles.inputheader}>Middle name</Text>
      <TextInput style={styles.input}
        key="middleName"
        value={InputValues.MiddleName}
        onChangeText={(value) => handleInputChange("MiddleName", value)}
      />

      <Text style={styles.inputheader}>Last name</Text>
      <TextInput style={styles.input}
        key="LastName"
        value={InputValues.LastName}
        onChangeText={(value) => handleInputChange("LastName", value)}
      />

      <Text style={styles.inputheader}>Date of birth</Text> 
      <TextInput style={styles.input}
        key="dateOfBirth"
        value={InputValues.DateofBirth}
        onChangeText={(value) => handleInputChange("DateofBirth", value)}
      />

      <Text style={styles.inputheader}>Country</Text>
      <TextInput style={styles.input}
        key="country"
        value={InputValues.Country}
        onChangeText={(value) => handleInputChange("Country", value)}
      />

      <Text style={styles.inputheader}>City</Text>
      <TextInput style={styles.input}
        key="city"
        value={InputValues.City}
        onChangeText={(value) => handleInputChange("City", value)}
      />

      <Text style={styles.inputheader}>Province</Text>
      <TextInput style={styles.input}
        value={InputValues.Province}
        onChangeText={(value) => handleInputChange("Province", value)}
      />

      <Text style={styles.inputheader}>Street address</Text>
      <TextInput style={styles.input}
        value={InputValues.Street_Address}
        onChangeText={(value) => handleInputChange("Street_Address", value)}
      />

        <Text style={[styles.subheader,{color: "#DD4438", paddingTop: 20}]}>
          Contact Information
        </Text>

        <Text style={styles.inputheader}>Email</Text>
        <TextInput style={styles.input}
          value={InputValues.Email}
          onChangeText={(value) => handleInputChange("Email", value)}
        />

        <Text style={styles.inputheader}>Phone number</Text>
        <TextInput style={styles.input}
          value={InputValues.Phone_Number}
          onChangeText={(value) => handleInputChange("Phone_Number", value)}
        />

      <View style={{width: '100%', height: 30}}/>

      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        {/*Back button*/}
        <TouchableOpacity>
          <View style={[styles.centerall,{borderColor: '#DD4438', borderWidth: 0.5, 
                        borderRadius: 10, width: 100, height: 35}]}>
            <Text style={{color: '#DD4438'}}>
              Back</Text>
            </View>
        </TouchableOpacity>

        {/*Next button*/}
        <TouchableOpacity onPress={handleNextStep}>
            <View style={[styles.centerall, {backgroundColor: '#DD4438',
                        borderRadius: 10, width: 200, height: 35}]}>
            <Text style={{color: "white"}}>
              Next question</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={{width: '100%', height: 110}}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  opencontainer:{
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 65,
    backgroundColor: '#fff',
  },

  centerall:{
    justifyContent: "center",
    alignItems: "center",
  },

  input:{
    width: '100%',
    height: 40,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    paddingLeft: 10,
  },

  mainheader:{
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 12,
  },

  subheader:{
    fontSize: 15,
    paddingBottom: 12,
  },

  inputheader:{
    fontSize: 15,
    paddingBottom: 2,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
