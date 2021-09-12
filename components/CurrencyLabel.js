import React from "react";
import{
    View,
    Text,
    Image
} from 'react-native';

import {COLORS, SIZES, FONTS, icons} from '../constants';

const Currency = ({icon,currency,code}) => {
    return (
        <View
            style={{flexDirection:'row',alignItems:'center'}}
        >
            <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width:25,
                    height:25,
                    marginTop:5
                }}
            />

            <View style={{marginLeft:SIZES.base}}>
                <Text style={{...FONTS.h3}}>{currency}</Text>
                <Text style={{color:COLORS.gray, ...FONTS.h4}}>{code}</Text>
            </View>
        </View>
    )
}

export default Currency;