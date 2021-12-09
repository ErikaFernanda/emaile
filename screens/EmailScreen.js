import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import WebView from "react-native-webview";

export default function EmailScreen({ route }) {
  const { id } = route.params;

  const [email, setEmail] = useState([]);

  useEffect(function () {
    async function getData() {
      const response = await fetch(
        "https://mobile.ect.ufrn.br:3002/emails/" + id
      );
      const email = await response.json();
      console.log("https://mobile.ect.ufrn.br:3002/emails/" + id);
      setEmail(email);
      
    }
    getData();
  }, []);

  //   function renderItem({ item }) {
  //     return (
  //       <View>
  //         <Text>{item.title}</Text>
  //         <Text>Informacoes de envio</Text>
  //         <Text>Corpo do email</Text>
  //       </View>
  //     );
  //   }
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text style={{ fontSize: 20, color: "white" }}>{email.tittle}</Text>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.image} source={{ uri: email.picture }} />
        <View>
          <Text>
            {email.from}...{email.time}
          </Text>
          <Text>Para mim </Text>
        </View>
      </View>

      <WebView
        source={{ html:"'"+email.body+"'"}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
});
