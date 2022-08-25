import {Image, View} from 'react-native';
import {styles} from './footerStyles';

const data = [
    require('../../common/images/footer/homeSelected.png'),
    require('../../common/images/footer/search.png'),
    require('../../common/images/footer/shopping-cart.png'),
    require('../../common/images/footer/scale-of-justice.png'),
    require('../../common/images/footer/user.png'),
];

export const Footer = () => {
    return (
        <View style={styles.footer}>
            {
                data.map((icon, index) => {
                    return (
                        <Image
                            source={icon}
                            key={index}
                            style={styles.icon}
                        />
                    );
                })
            }
        </View>
    );
};