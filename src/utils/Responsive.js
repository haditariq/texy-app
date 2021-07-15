import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const wp = (p)=> width * (p/100);
export const hp = (p)=> height * (p/100);