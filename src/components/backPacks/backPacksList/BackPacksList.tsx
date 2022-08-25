import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './backPacksListStyles';
import {data} from './backPacksListData';

export const BackPacksList = () => {
    return (
        <View>
            <Text style={styles.title}>Top backpack models</Text>
            <View style={styles.imageContainer}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <View style={styles.imageWrapper}>
                            <Image
                                source={item.image}
                                key={index}
                                style={styles.image}
                            />
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.imageTitle}>{item.title}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};