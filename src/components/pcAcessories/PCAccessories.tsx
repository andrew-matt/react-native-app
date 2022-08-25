import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './pcAccessoriesStyles';
import {BackPacks} from '../backPacks/backPacks/BackPacks';

const data = [
    {image: require('../../common/images/pcAcessories/CPU.jpeg'), title: 'CPU'},
    {image: require('../../common/images/pcAcessories/motherboard.png'), title: 'Motherboards'},
    {image: require('../../common/images/pcAcessories/videocard.png'), title: 'Video cards'},
    {image: require('../../common/images/pcAcessories/fan.png'), title: 'Fans'},
    {image: require('../../common/images/pcAcessories/dram.png'), title: 'DRAM'},
    {image: require('../../common/images/pcAcessories/ssd.png'), title: 'SSD'},
    {image: require('../../common/images/pcAcessories/powersupply.png'), title: 'Power supplies'},
    {image: require('../../common/images/pcAcessories/chassis.png'), title: 'Chassis'},
    {image: require('../../common/images/pcAcessories/display.png'), title: 'Displays'},
];

export const PCAccessories = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={3}
                columnWrapperStyle={{justifyContent: 'center'}}
                ListHeaderComponent={<Text style={styles.title}>PC accessories</Text>}
                ListFooterComponent={BackPacks}
                renderItem={({item, index}) => (
                    <View>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={item.image}
                                key={index}
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.imageTitle}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};