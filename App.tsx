import {View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Header} from './src/components/header/Header';
import {PCAccessories} from './src/components/pcAcessories/PCAccessories';
import {styles} from './appStyles';
import {Footer} from './src/components/footer/Footer';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="inverted"/>
            <Header/>
            <PCAccessories/>
            <Footer/>
        </View>
    );
}
