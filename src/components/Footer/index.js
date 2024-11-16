import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR </Text>

            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal:10}}>
                       <Shoes img={require('../../assets/1.png')} cost="R$140,99"> Nike AIR Max</Shoes>
                    </View>

                    <View style={{marginHorizontal:10}}>
                       <Shoes img={require('../../assets/3.png')} cost="R$600,00"> Nike Supreme</Shoes>
                    </View>

                    <View style={{marginHorizontal:10}}>
                       <Shoes img={require('../../assets/4.png')} cost="R$1000"> Nike Cash</Shoes>
                    </View>

                    <View style={{marginHorizontal:10}}>
                       <Shoes img={require('../../assets/5.png')} cost="R$750,00"> Nike Ultra</Shoes>
                    </View>

                    <View style={{marginHorizontal:10}}>
                       <Shoes img={require('../../assets/6.png')} cost="R$3.500"> NIKE NIKE</Shoes>
                    </View>
                </ScrollView>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    title:{
         fontSize:24,
         marginVertical:'2%',
         paddingHorizontal:'2%'
    }
});