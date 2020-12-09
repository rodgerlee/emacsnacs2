import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'

import { connect } from 'react-redux'
import { onSearch, ApplicationState } from '../redux'
import { useNavigation } from '../utils'
import { SearchBar, SearchButton } from '../components'

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;


export const _SearchScreen: React.FC = () => {

	const { navigate } = useNavigation()
	const [isEditing, setIsEditing] = useState(false)
	const [keyword, setKeyword] = useState('')

	const onTapSearch = (searchEntry: string) => {
        navigate('SearchResultsPage', { food: searchEntry })
	}

	return(
		<View style={styles.container}>
            <View style={styles.top}>
                <View style={{ display: 'flex', height: 60, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', marginLeft: 2, marginRight: 5}}>
					<SearchBar
                        onTextChange={setKeyword}
                        onEndEditing={() => setIsEditing(false)}
                        didTouch={() => setIsEditing(true)}
                    />
					<SearchButton
                        searchEntry={keyword}
                        onTap={onTapSearch}
                        icon={require('../images/arrow_icon.png')}
                        width={40} height={40}
                    />
				</View>
            </View>

            <View style={styles.middle}>
				<Image
					source={{uri:"https://i.pinimg.com/originals/53/f1/2c/53f12ca26caf8ada3835a99da78f60c8.gif"}}
					style={styles.img}
				/>
			</View>


        </View>
	)
}

const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: '600',
        color: '#f15b5d',
        marginLeft: 20,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
	img: {
		height: HEIGHT,
		width:WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 9
	}

})

const mapToStateProps = (state: ApplicationState) => ({
    searchReducer: state.searchReducer,
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const SearchScreen = connect(mapToStateProps, { onSearch })(_SearchScreen)


export { SearchScreen };