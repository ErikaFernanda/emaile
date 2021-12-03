import React, { useEffect } from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
      <View style={styles.containerEmail}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={{ uri: item.picture }} />
          <View>
            <Text>{item.to}</Text>
            <Text>{item.tittle}</Text>
            <Text style={{color:'gray'}}>{item.summary}</Text>
          </View>
        </View>

        <View style={styles.containerHour}>
          <Text style={{color:'#16A0F7'}}>{item.time}</Text>
          <Icon name={item.star ? 'star' : 'star-outline'} size={30} color={item.star ? 'orange' : 'black'} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
  containerEmail: {
    height: 80,
    flexDirection: "row",
    borderColor: "#d3d3d3",
    borderBottomWidth:1,
    alignItems: "center",
    margin: 5,
    justifyContent: "space-between",
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
