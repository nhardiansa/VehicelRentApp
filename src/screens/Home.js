import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {Box, Image as NBImage, Input} from 'native-base';

import {HOME_BANNER, CAR_PLACEHOLDER, BIKE_PLACEHOLDER} from '../assets/images';
import {fontFamily, fontSize, fontStyle} from '../helpers/styleConstants';
import {
  VEHICLE_DETAIL,
  VIEW_MORE_SCREEN,
} from '../helpers/destinationConstants';

import {baseURL} from '../helpers/constants';
import {getVehiclesHome} from '../redux/actions/vehicleActions';

export default function Home({navigation}) {
  const {vehiclesReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Home');
    console.log('baseURL', baseURL);
    getVehicles();
    console.log('vehiclesReducer', vehiclesReducer);
  }, []);

  const getVehicles = async () => {
    dispatch(getVehiclesHome());
  };

  const vehicles = [
    {
      id: 1,
      src: CAR_PLACEHOLDER,
    },
    {
      id: 2,
      src: CAR_PLACEHOLDER,
    },
  ];

  const bikes = [
    {
      id: 1,
      src: BIKE_PLACEHOLDER,
    },
    {
      id: 2,
      src: BIKE_PLACEHOLDER,
    },
  ];

  const goToViewMore = () => {
    console.log('Go to View More');
    navigation.navigate(VIEW_MORE_SCREEN);
  };

  const goToDetail = () => {
    console.log('Go to Detail');
    navigation.navigate(VEHICLE_DETAIL);
  };

  const styles = StyleSheet.create({
    banner: {
      marginBottom: 20,
    },
    text: {
      fontFamily: fontStyle(fontFamily.primary, 'bold'),
      marginRight: 11,
      lineHeight: 18,
    },
    link: {
      fontSize: fontSize.sm,
    },
    heading: {
      fontSize: fontSize.mlg,
      lineHeight: 28,
    },
    linkContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sectionHeader: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    item: {
      minHeight: 168,
      width: 265,
      marginHorizontal: 11,
      borderRadius: 15,
    },
    listContainer: {
      marginTop: 20,
    },
    vehicleSection: {
      marginBottom: 30,
    },
  });

  const vehicleCard = imgSrc => {
    return (
      <Pressable onPress={goToDetail}>
        <Image resizeMode="cover" style={styles.item} source={imgSrc} />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box w="full" position="relative" mb="5">
          <NBImage w="full" source={HOME_BANNER} />
          <Box px="5" mt="6" position="absolute" w="full">
            <Input
              bgColor="rgba(0, 0, 0, 0.5)"
              borderWidth="0"
              placeholder="Search vehicle"
              color="white"
              placeholderTextColor="white"
              fontFamily={fontStyle(fontFamily.primary, 'bold')}
              fontSize="md"
              InputRightElement={
                <Box mr="5">
                  <Icon name="search" size={20} color="white" />
                </Box>
              }
            />
          </Box>
        </Box>

        <View style={styles.contentContainer}>
          <View style={styles.vehicleSection}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.text, styles.heading]}>Cars</Text>
              <TouchableOpacity
                onPress={goToViewMore}
                style={styles.linkContainer}>
                <Text style={[styles.link, styles.text]}>View more</Text>
                <Icon name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <FlatList
                data={vehicles}
                renderItem={({item}) => vehicleCard(item.src)}
                horizontal={true}
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.vehicleSection}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.text, styles.heading]}>Motorbikes</Text>
              <TouchableOpacity style={styles.linkContainer}>
                <Text style={[styles.link, styles.text]}>View more</Text>
                <Icon name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <FlatList
                data={vehicles}
                renderItem={({item}) => vehicleCard(item.src)}
                horizontal={true}
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.vehicleSection}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.text, styles.heading]}>Bikes</Text>
              <TouchableOpacity style={styles.linkContainer}>
                <Text style={[styles.link, styles.text]}>View more</Text>
                <Icon name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <FlatList
                data={bikes}
                renderItem={({item}) => vehicleCard(item.src)}
                horizontal={true}
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
