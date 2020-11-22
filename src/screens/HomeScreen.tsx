import React from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight} from 'react-native'



export const HomeScreen = () => {
    const fetchApiCall = () => {
        async function getCrypto ( query: object ): Promise<object> {
          const url = new URL('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=2&tags=vegetarian%252Cdessert');
          // url.search = new URLSearchParams( query ).toString();
          const headers = {
              "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              "x-rapidapi-key": "4cfc845398msh8ef01df1a88c5cdp13b6f9jsn39afa8e55c0e",
          };
          const response = await fetch( url.toString(), {headers} );
          return await response.json();
       };
        const query = {
            asset: "BTC",
            exchange: "Kraken",
            denominator: "USD",
        };
        (async () => {
            const data = await getCrypto( query );
            console.log(data)
        })()
          
      }

    return (
        <View style={styles.container}>
            <View style={styles.navigation}> 
                <Text>Navigation </Text> 
            </View>
            <View style={styles.body}>
                <TouchableHighlight onPress={fetchApiCall}>
                    <View style={styles.button}>
                        <Text >Console Log Random Recipe</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.footer}>
                <Text> Footer </Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    navigation: {
        flex: 2,
        backgroundColor: 'red'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    button: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: 'coral'
      },

})

