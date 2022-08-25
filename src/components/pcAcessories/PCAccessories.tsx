import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './pcAccessoriesStyles';

const data = [
    {image: require('../../common/images/CPU.jpeg'), title: 'CPU'},
    {image: require('../../common/images/motherboard.png'), title: 'Motherboards'},
    {image: require('../../common/images/videocard.png'), title: 'Video cards'},
    {image: require('../../common/images/fan.png'), title: 'Fans'},
    {image: require('../../common/images/dram.png'), title: 'DRAM'},
    {image: require('../../common/images/ssd.png'), title: 'SSD'},
    {image: require('../../common/images/powersupply.png'), title: 'Power supplies'},
    {image: require('../../common/images/chassis.png'), title: 'Chassis'},
    {image: require('../../common/images/display.png'), title: 'Displays'},
];

export const PCAccessories = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PC accessories</Text>
            <FlatList
                data={data}
                numColumns={3}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({item, index}) => (
                    <View>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={item.image}
                                key={index}
                                style={styles.image}
                            />
                        </View>
                        <Text style={{textAlign: 'center'}}>{item.title}</Text>
                    </View>
                )}
            ></FlatList>
        </View>
    );
};