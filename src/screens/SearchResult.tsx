import React from 'react';
import {
	ScrollView,
	ImageBackground,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Button
} from 'react-native';
import ReadyInThirtyCard from '../components/RecipeCard'
import RecipeBody from './RecipeBody'

//displays 3 recipes from search result for now
class SearchResult extends React.Component{
	// state={
	// 	id:"",
	// }

	// renderBody=()=>{
	// 	if (!this.state.id){
	// 		console.log("searchResult renderBody() blank")
	// 		return;
	// 	}
	// 	return(
	// 		<RecipeBody recipeID={this.state.id}/>
	// 	)
	// }

	render(){
		var HARDCODEDRECIPE = this.props.data[0].id;
		return(
			<ScrollView>
				<View>
					<Button
						style={styles.button}
						onPress={()=>{this.props.getRecipe(HARDCODEDRECIPE)}}
						title={this.props.data[0].title}
					>
						<Text>{this.props.data[0].id}</Text>
					</Button>
				</View>
			</ScrollView>
		)
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