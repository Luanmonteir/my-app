import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Dot from '../components/Dot';
import SizeButton from '../components/SizeButton';
import Button from '../components/Button';
import Footer from '../components/Footer';


export default function Detail({ navigation }) {


  navigation.setOptions({
    headerTitle: 'Nike'
  })


  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$250.75</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifther 10</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379F4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100% ' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
            <SizeButton>41</SizeButton>
            <SizeButton>42</SizeButton>
            <SizeButton>39</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Downshifter 10
          </Text>
          <Text style={styles.textContent}>
            O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

        <Button/>

        <View style={styles.line}/>

      <Footer/>


      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'

  },
  image: {
    width: '100%'
  },
  title: {
    paddingHorizontal: '4%'

  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
    paddingHorizontal: '5%',
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical:'5%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
  borderWidth:1,
  borderColor:'#DDD',
  marginVertical:'2%'
  }

})