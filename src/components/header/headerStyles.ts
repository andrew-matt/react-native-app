import {Dimensions, StyleSheet} from 'react-native';

const {width: WIDTH} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#1875ff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: WIDTH - 18,
        height: 38,
        borderRadius: 10,
        margin: 10,
    },
    icon: {
        marginHorizontal: 5,
        height: 18,
        width: 18,
    },
    input: {
        width: WIDTH - 53,
        fontSize: 16,
    },
});