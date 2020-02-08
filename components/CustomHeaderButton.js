import React from 'react'
import { StyleSheet } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../themes/colors';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={colors.basic.dark} />
    );
}

export default CustomHeaderButton;

const styles = StyleSheet.create({

});