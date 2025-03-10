import React, { forwardRef } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { themes } from "../../global/themes.js";

export const Input = forwardRef((props, ref) => {
    const {
        IconLeft,
        IconRight,
        iconLeftName,
        iconRightName,
        title,
        onIconLeftPress,
        onIconRightPress,
        height,
        labelStyle,
        ...rest
    } = props;

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%';
        } else if (IconLeft || IconRight) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    };

    return (
        <>
            {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}
            <View style={[
                style.boxInput,
                {
                    paddingLeft: calculateSizePaddingLeft(),
                    height: height ? height : 50,
                    padding: 5
                }
            ]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName} size={20} color={themes.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input,
                        {
                            width: calculateSizeWidth(),
                            height: '100%'
                        }
                    ]}
                    ref={ref}
                    multiline
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={iconRightName} size={20} color={themes.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
});

const style = StyleSheet.create({
    titleInput: {
        marginLeft: 5,
        color: themes.Colors.gray,
        marginTop: 20,
    },
    boxInput: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themes.Colors.lightGray,
        backgroundColor: themes.Colors.bgScreen,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // paddingHorizontal:20
    },
    Button: {
        width: '10%',
    },
    Icon: {
        width: '100%',
    },
    input: {
        borderRadius: 40,
        // paddingHorizontal:20
    },
})