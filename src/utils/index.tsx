//base url from rapidAPI, attached to the BASE_URL, can be /food, or /recipes, etc.
export const BASE_URL = "https://api.spoonacular.com"
export const APIKEY = "013c92878d5b4b198faa13d241b413dd"
export const APIKEY_2 = "7e43abbfed7d481ca378331340ed35f0"
export const APIKEY_3 = "2e86bfa51146448ea9f6a3e088f5822a"
export const APIKEY_4 = "1f93a02af3a3452389f5fec46d43b724"
export const APIKEY_5 = "3a2f6b7949ac496d86dafc2c4a11288e"
export const APIKEY_6 = "8206f25eabc140b8b0429ec5bc3b164f"
export const APIKEY_7 = "47119e03ad594ceb987139a2d170c48b"
export const INGREDIENT_PIC_URL = "https://spoonacular.com/cdn/ingredients_100x100"

//screen dimensions
import { Dimensions } from 'react-native';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

//backend server
export const SERVER = "http://10.0.2.2/api/users"
//"http://192.168.86.156/api/users"
export * from './useNavigation'