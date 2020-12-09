//BRUH
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native'

class LikeButton extends React.Component{
	state={
		liked: false,
	}
	like = async()=>{
		const likeState = await !this.state.liked
		console.log("10like button clicked")
		Alert.alert(this.props.id)
		console.log(this.props.id)
		this.setState({liked:likeState})
		console.log(this.state.liked)
		console.log("set State")
	}
	render(){
		const {liked} = this.state
		const icon = liked ? require('../images/star_icon.png') : require('../images/star_n_icon.png')
		console.log("liked?"+liked)
		return(
			<View style={styles.btn}>
				<TouchableOpacity
					onPress={this.like}
				>
					<Image style={styles.btnIcon} source={icon}/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    likebtn:{
        width:40,
        height:40,
        flex:1,
        alignItems:'flex-start'
    },
    btnIcon:{
        width:38,
        height:38,
    }
})

export default LikeButton;