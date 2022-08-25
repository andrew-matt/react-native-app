import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const PADDING = 15;
const WIDTH = width - PADDING * 2
const ratio = WIDTH / 920;

export const styles = StyleSheet.create({
    imageWrapper: {
        backgroundColor: '#f2f1f6',
        marginVertical: 10,
        padding: PADDING,
    },
    image: {
        width: WIDTH,
        height: 400 * ratio,
        borderRadius: 10,
    },
});