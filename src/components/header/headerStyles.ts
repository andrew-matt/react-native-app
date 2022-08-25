import {Dimensions, StyleSheet} from 'react-native';

const {width: WIDTH} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#1875ff',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: 20,
        alignItems: 'center',
        padding: 10,
    },
    input: {
        width: WIDTH - 18,
        height: 38,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 16,
    },
});