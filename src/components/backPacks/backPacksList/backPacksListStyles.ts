import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const LENGTH = width / 2

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '500',
    },
    imageContainer: {
        marginBottom: 10,
    },
    imageWrapper: {
        padding: 10,
    },
    image: {
        width: LENGTH,
        height: LENGTH,
        resizeMode: 'contain',
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '700'
    },
    imageTitle: {
        width: LENGTH,
        marginTop: 10,
    },
});