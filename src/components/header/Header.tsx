import {TextInput, View} from 'react-native';
import {styles} from './headerStyles';
import {useState} from 'react';

export const Header = () => {

    const [value, setValue] = useState('');

    const onChangeTextHandler = (text: string) => {
        setValue(text);
    };

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTextHandler}
                placeholder={'Search'}
                value={value}
            />
        </View>
    );
};