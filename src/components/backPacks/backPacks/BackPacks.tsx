import {Image, View} from 'react-native';
import {styles} from './backPacksStyles';
import {BackPacksList} from '../backPacksList/BackPacksList';

const image = require('../../../common/images/backPacks/backPack/backPack.jpg');

export const BackPacks = () => {
    return (
        <View>
            <View style={styles.imageWrapper}>
                <Image
                    source={image}
                    style={styles.image}
                />
            </View>
            <BackPacksList/>
        </View>
    );
};