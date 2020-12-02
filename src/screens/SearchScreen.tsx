import React from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';

import RecipeLoader from "../components/RecipeLoader"
import RecipeBody from "../components/RecipeBody"
import SearchResult from "../components/SearchResult"
import axios from 'axios'
import { BASE_URL, APIKEY_2, APIKEY } from '../utils'

class SearchScreen extends React.Component{
	state={
		recipeSearch: "",
		// recipeid: "",
		searching: true,
		retrieving: false,
		searchData:{},
		recipeData:{},
	}

	searchRecipe=()=>{
		this.setState({searching:true});
		var self = this;
		axios.get(`${BASE_URL}/recipes/complexSearch`,
						{	params: { query: self.state.recipeSearch,
						          	number: 1,
						            apiKey: APIKEY_2,
						            instructionsRequired: true,
						            maxReadyTime: 30,
            					}
            }
		).then(function(response){
			console.log("got recipe list");
			self.setState({searchData:response.data});
			self.setState({searching:false});
		}).catch(function(error){
			console.log(error)
		})
	}

	//https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
	getRecipe=(recipeid)=>{
		this.setState({retreiving:true});
		var self = this;
		axios.get(`${BASE_URL}/recipes/${recipeid}/information?apiKey=${APIKEY_2}&includeNutrition=false`
		).then(function(response){
			console.log("GOT RECIPE")
			// console.log(response.data);
			self.setState({recipeData:response.data});
			self.setState({retrieving:false});
		}).catch(function(error){
			console.log(error)
		})
	}

	/*
	Object {
  "number": 3,
  "offset": 0,
  "results": Array [
    Object {
      "id": 1096210,
      "image": "https://spoonacular.com/recipeImages/1096210-312x231.jpg",
      "imageType": "jpg",
      "title": "Sweet Potato Toast (Whole30 Approved)",
    },
    Object {
      "id": 1095762,
      "image": "https://spoonacular.com/recipeImages/1095762-312x231.jpg",
      "imageType": "jpg",
      "title": "Sweet Potato Hash with Chorizo & Mushrooms",
    },
    Object {
      "id": 157086,
      "image": "https://spoonacular.com/recipeImages/157086-312x231.jpg",
      "imageType": "jpg",
      "title": "Country Potato",
    },
  ],
  "totalResults": 8,
}
	*/

	renderBody=()=>{
		if(this.state.searching || this.state.retrieving){
			console.log("on call")
			return(
				<RecipeLoader />
			)
		}
		else{
			if (!this.state.searchData && !this.state.recipeData){
				return <View />
			}
			else if (Object.keys(this.state.recipeData).length){
				console.log("this.state.recipeData")
				console.log(Object.keys(this.state.recipeData).length)
				// console.log(this.state.recipeData);
				return(
					<RecipeBody data={this.state.recipeData}/>
				)
			}
			else{
				console.log("showing search data");
				return(
					<SearchResult
						data={this.state.searchData.results}
						// id={this.state.recipeid}
						getRecipe={this.getRecipe}
					/>
				)
			}
		}
	}

	render(){
		// console.log(this.state.recipeData)
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
						placeHolder='Search for a Recipe'
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