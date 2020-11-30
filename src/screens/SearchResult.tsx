import React from 'react';
import {
	ScrollView,
	ImageBackground,
	Text,
	View,
	FlatList,
	TouchableOpacity
} from 'react-native';
import ReadyInThirtyCard from '../components/RecipeCard'

//displays 3 recipes from search result for now
class SearchResult extends React.Component{
	getRecipe=(recipeID)=>{
		console.log("recipe tapped\t")
		console.log("recipeID")
	}

	render(){
		// var result = this.props.data;
		// return(
		// 	<ScrollView style={{flex:1}}>
		// 		<FlatList
		// 			data={result}
		// 			renderItem={({item})=>
		// 				<ReadyInThirtyCard
		// 					item={item}
		// 					onTap={()=>{alert('recipe tapped')}}
		// 				/>}
  //          	keyExtractor={(item)=>item.id}
		// 		/>
		// 	</ScrollView>
		// )

		<ScrollView>
			<View>
				<Button
					style={styles.button}
					onPress{()=>{this.getRecipe(this.props.data[0].id)}}
				/>
			</View>
		</ScrollView>
	}
}

const styles={
	header:{
		fontSize: 30,
		color: 'red',
		textAlign: 'center',
	},
	button:{
		justifyContent: 'center',
		alighItems:'center',
		height: 400,
		width:400,
		opacity: 0,
	},
	img:{
		height: 400,
		width:400,
		justifyContent: 'center',
		alignItems: 'center',
	},
}

export default SearchResult;

/*
							<ListItem>
								<ReadyInThirthyCard
									item={item}
									onTap={()=>getRecipe()}
								/>
							</ListItem>
*/