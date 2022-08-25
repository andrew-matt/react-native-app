import {Dimensions, StyleSheet} from 'react-native';

const {width: WIDTH} = Dimensions.get('screen');
const PADDING = 30;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING / 2,
    },
    title: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '500',
    },
    imageWrapper: {
        width: (WIDTH - PADDING) / 3 - 5,
        height: (WIDTH - PADDING) / 3 - 5,
        borderRadius: 10,
        marginVertical: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
});