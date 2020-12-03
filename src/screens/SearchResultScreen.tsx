import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { onSearch, searchState, ApplicationState, SearchedRecipe } from '../redux'
import { ReadyInThirtyCard } from '../components'
import { connect } from 'react-redux'
import { useNavigation } from '../utils'

interface SearchProps{
    navigation: { getParam: Function },
	searchReducer: searchState,
	onSearch: Function,
}

export const _SearchResultScreen: React.FC<SearchProps> = (props) => {
    
    const { navigate } = useNavigation()
    const { getParam } = props.navigation
    const keyword = getParam('food')
	const { searchResults } = props.searchReducer;
	const { results } = searchResults

    useEffect(() => {
        props.onSearch(keyword)
    }, [])

    const onTapReadyInThirtyRecipe = (item: SearchedRecipe) => {
        navigate('RecipeDetailPage', { recipe: item, noInfo: true})
    }

    return (
        <View style={styles.container}>
             <View style={styles.body}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={ results }
                    renderItem = {({ item }) => <ReadyInThirtyCard item={item} onTap={onTapReadyInThirtyRecipe} /> }
                    keyExtractor={(item) => item.id}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    body: {
        flex:10,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

const mapToStateProps = (state: ApplicationState) => ({
    searchReducer: state.searchReducer,
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const SearchResultScreen = connect(mapToStateProps, { onSearch })(_SearchResultScreen)


export { SearchResultScreen };