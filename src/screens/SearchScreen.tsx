import React from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';

import RecipeLoader from "./RecipeLoader"
// import RecipeBody from "./RecipeBody"
import SearchResult from "./SearchResult"
import axios from 'axios'
import { BASE_URL, APIKEY } from '../utils'

class SearchScreen extends React.Component{
	state={
		recipeSearch: "",
		onCall: true,
		data:{}
	}

	searchRecipe=()=>{
		this.setState({onCall:true});
		var self = this;
		axios.get(`${BASE_URL}/recipes/complexSearch`,
						{	params: { query: self.state.recipeSearch,
						          	number: 3,
						            apiKey: APIKEY,
						            instructionsRequired: true,
						            maxReadyTime: 30,
            					}
            }
		).then(function(response){
			console.log(response.data);
			self.setState({data:response.data});
			self.setState({onCall:false});
		}).catch(function(error){
			console.log(error)
		})
	}

	// getRecipe=()=>{
	// 	this.setState({onCall:true});
	// 	var self = this;
	// 	axios.get({BASE_URL}+"/recipes/"+this.state.recipeID+"information?includeNutrition=false")
	// 	.then(function(respons){
	// 		console.log(reponse.data);
	// 		self.setState({data:response.data});
	// 		self.setState({onCall:false});
	// 	}).catch(function(error){
	// 		console.log(error)
	// 	})
	// }

	renderBody=()=>{
		if(this.state.onCall){
			return(
				<RecipeLoader />
			)
		}
		else{
			console.log("recipe found")
			if (!this.state.data){
				return <View />
			}
			return(
				<SearchResult data={this.state.data.results}/>
			)
		}
	}

	render(){
		return(
			<View style={{flex:1}}>
				<Header
					searchBar
					rounded
				>
				<Item>
					<Icon
						name="search"
						onPress={this.searchRecipe}
					/>
					<Input
						value={this.state.recipeSearch}
						placeHolder='Searh for a Recipe'
						onChangeText={(recipeSearch)=>this.setState({recipeSearch:recipeSearch.toLowerCase()})}
					>
					</Input>
				</Item>
				</Header>
				{this.renderBody()}
			</View>
		)
	}
}

export default SearchScreen;