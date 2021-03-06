import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
});

function GoSendHeaderView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where do you want to send a package?</Text>
      <Text>GoSend has more delivery options for you now! Check it out.</Text>
    </View>
  );
}

function GoSendWithInCity({navigate}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
      }}
      // TODO: navigate()
      onPress={() =>
        navigate('GoSendDestinationDetails', {
          navigateTo: 'GoSendPickUpDetails',
          nextRoute: 'GoSendPackageDetails',
        })
      }>
      <View style={{marginHorizontal: 8}}>
        <Image source={require('../../../assets/GoSend_Dalam_kota.jpg')} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Within City</Text>
        <Text>Instant or Same Day it is! Read at your service.</Text>
      </View>
    </TouchableOpacity>
  );
}

function GoSendIntercity({navigate}) {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      // TODO: navigate()
      onPress={() => navigate('GoSendDestinationCity')}>
      <View style={{marginHorizontal: 8}}>
        <Image source={require('../../../assets/GoSend_Intercity.jpg')} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Intercity</Text>
        <Text>We can help you deliver things to other cities, too.</Text>
      </View>
    </TouchableOpacity>
  );
}

function GoSendNavigate({navigate}) {
  return (
    <View
      style={{
        marginHorizontal: 18,
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'silver',
      }}>
      <GoSendWithInCity navigate={navigate} />

      <View style={styles.divider} />

      <GoSendIntercity navigate={navigate} />
    </View>
  );
}

export default function GoSendScreen({navigation: {navigate}}) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <GoSendHeaderView />
      <GoSendNavigate navigate={navigate} />
      <View style={{flex: 1}} />
      <Image
        source={require('../../../assets/GoSend_Screen.jpg')}
        style={{width: '100%'}}
      />
    </View>
  );
}
