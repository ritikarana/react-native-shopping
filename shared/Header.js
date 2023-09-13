import React from 'react';

import {View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginRight: 25,
        }}
      />
    </View>
  );
};

export default Header;