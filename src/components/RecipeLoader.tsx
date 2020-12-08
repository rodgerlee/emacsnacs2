import React from 'react';
import { View, Image, Dimensions, StyleSheet} from 'react-native';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class RecipeLoader extends React.Component{
	render(){
		return(
			<View style={{flex:1}}>
				<Image
					source={{uri:"https://i.pinimg.com/originals/53/f1/2c/53f12ca26caf8ada3835a99da78f60c8.gif"}}
					style={styles.img}
				/>
			</View>
		)
	}
}

const styles=StyleSheet.create({
	img:{
		height: HEIGHT,
		width:WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'cover'
	}
})

export default RecipeLoader;