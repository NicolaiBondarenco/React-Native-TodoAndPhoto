import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {PhotoItem} from '../Components/PhotoItem';
import {Error} from '../Components/Error';
import axios from 'axios';

export const Photo = ({navigation}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDatabase() {
      await axios
        .get(
          'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
        )
        .then(res => {
          setData(res.data);
          setError(!error);
        })
        .catch(err => {
          setError(!error);
        });
    }
    getDatabase();
  }, []);

  if (error) return <Error />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
        numColumns={3}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PhotoItem
            navigation={navigation}
            img={item.links.download}
            id={item.id}
            name={item.user.first_name}
            desc={item.alt_description}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
