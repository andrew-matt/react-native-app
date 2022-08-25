import {View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Header} from './src/components/header/Header';
import {PCAccessories} from './src/components/pcAcessories/PCAccessories';
import {styles} from './appStyles';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="inverted"/>
            <Header/>
            <PCAccessories/>
        </View>
    );
}
