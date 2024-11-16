import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../components/Shoes';
import { useNavigation } from '@react-navigation/native';  // Correção aqui para o hook 'useNavigation'

export default function Home() {

  const navigation = useNavigation();  // Corrigido para 'navigation'

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image
          source={require('../assets/banner.png')}
          style={Styles.image}
        />

        <View style={Styles.textContainer}>
          <Text style={Styles.text}>TÊNIS</Text>
          <Text style={[Styles.text,{color:'#CECECF'}]}>●</Text>
          <Text style={[Styles.text,{color:'#CECECF'}]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: "center" }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
     <View style={Styles.line}/>

      <ScrollView>
         <Text style={Styles.text}>LANÇAMENTOS</Text>
         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Shoes img={require('../assets/1.png')} cost="R$140,99" > Nike AIR MAX</Shoes >
          <Shoes img={require('../assets/2.png')} cost="R$250.75"onClick={()=> navigation.navigate('Detail')}> Nike Downshifther 10</Shoes>
         </View>

         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Shoes img={require('../assets/3.png')} cost="R$600,00"> Nike Supreme</Shoes>
          <Shoes img={require('../assets/4.png')} cost="R$1.000,00"> Nike Cash</Shoes>
         </View>

         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Shoes img={require('../assets/5.png')} cost="R$750,00"> Nike Ultra</Shoes>
          <Shoes img={require('../assets/6.png')} cost="R$3.500"> Nike Nike</Shoes>
         </View>

      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});
