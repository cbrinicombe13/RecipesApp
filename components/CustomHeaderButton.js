import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../themes/colors';

const CustomHeaderButton = (props) => {
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={theme.primary} />
    );
}

export default CustomHeaderButton;

const styles = StyleSheet.create({

});