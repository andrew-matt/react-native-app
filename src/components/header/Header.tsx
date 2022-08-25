import {TextInput, Image, View} from 'react-native';
import {styles} from './headerStyles';
import {useState} from 'react';

const searchIcon = require('../../common/images/header/search.png');

export const Header = () => {

    const [value, setValue] = useState('');

    const onChangeTextHandler = (text: string) => {
        setValue(text);
    };

    return (
        <View style={styles.header}>
            <View style={styles.inputWrapper}>
                <Image source={searchIcon} style={styles.icon}/>
                <TextInput
                    inlineImageLeft={searchIcon}
                    style={styles.input}
                    onChangeText={onChangeTextHandler}
                    placeholder={'Search'}
                    value={value}
                />
            </View>
        </View>
    );
};