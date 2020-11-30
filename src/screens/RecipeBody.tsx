import React from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
} from 'react-native'
import { ListItem, List } from 'native-base';

class RecipeBody extends React.Component{
	render(){
		//change this
		var recipe = this.props.data;
		if(!recipe){
			return <View />
		}
		return(
			<View>
				<Text style={styles.header}>{recipe.title}</Text>
				<Image source={{uri:recipe.image}} style={styles.img}></Image>
			</View>
		)
	}
}

const styles={
  header:{
    fontSize: 25,
    fontWeight: '600',
    color: '#f15b5d',
    marginLeft: 20,
    padding: 10,
   },
  img:{
		height: 400,
		width:400,
		justifyContent: 'center',
		alignItems: 'center',
	},
	info:{
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.8,
	},
}

export default RecipeBody;