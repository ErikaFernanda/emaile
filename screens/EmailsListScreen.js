import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Constants from 'expo-constants';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";

export default function EmailsListScreen({ navigation }) {
  const [emails, setEmails] = useState([]);

  useEffect(function () {
    async function getData() {
      const response = await fetch("https://mobile.ect.ufrn.br:3002/emails");
      const emails = await response.json();
      setEmails(emails);
    }
    getData();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.containerEmail} onPress={()=>navigation.navigate('EmailScreen',{id:item.id})}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={{ uri: item.picture }} />
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'white'}}>{item.to}</Text>
            <Text style={{color:'#7f7d7d'}}>{item.tittle}</Text>
          </View>
        </View>

        <View style={styles.containerHour}>
          <Text style={{color:'#7f7d7d'}}>{item.time}</Text>
          <Icon name={item.star ? 'star' : 'star-outline'} size={30} color={item.star ? 'orange' : 'white'} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
      <FlatList
        data={emails}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor:'white'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  containerEmail: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
    marginBottom: 0,
    justifyContent: "space-between",
    backgroundColor:'black',
    borderRadius:10
  },
  containerHour: {
    width: 60,
    margin: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "column",
    height: 60,
  },
});
