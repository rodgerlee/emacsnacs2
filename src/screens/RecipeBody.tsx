import React from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
	FlatList,
} from 'react-native'
import { List, ListItem } from 'native-base'


/*
<List>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            avatar={{ uri: item.picture.thumbnail }}
          />
        )}
      />
    </List>
*/

class RecipeBody extends React.Component{
	render(){
		// this.getRecipe();
		var recipe = this.props.data;
		if(!recipe){
			console.log("RecipeBody not found")
			return (
				<View style={{flex:1}}>
					<Image
						source={{uri:"https://4.bp.blogspot.com/-9NPxbuGOiR8/Wni5zFj24ZI/AAAAAAAAAj8/f3I1wUzrrs48HlEicgrtG76pRM31hROiwCEwYBhgL/s1600/84955212af7a341762bdc508ff3cd7ca.gif"}}
						style={styles.loadImg}
					/>
				</View>
			)
		}
		return(
			<View>
				<Text style={styles.header}>{recipe.title}</Text>
				<Image
					source={{uri:recipe.image}}
					style={styles.recipeImg}
				/>
				<FlatList
					data={recipe.extendedIngredients}
					keyExtractor={(item)=>item.name}
					renderItem={({item})=>(
						<ListItem
							title={item.name}
							subtitle={`${item.measures.us.amount} ${item.measures.us.unitShort}`}
							Thumbnail={{uri:item.image}}
						/>
					)}
				/>
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
  recipeImg:{
		height: 400,
		width:400,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadImg:{
		height:800,
		width:400,
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'cover'
	},
	info:{
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.8,
	},
}

export default RecipeBody;