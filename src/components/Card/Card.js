import React, {useState} from "react";
import { View, Pressable, Text } from 'react-native';
import styles from './Card.style';

const Card = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const cardPress = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            props.handleCount(preState=>preState + 1);
        } else {
            props.handleCount(preState=>preState - 1);
        }
    }
    const cardDelete = () => {props.deleteFunction(props.id)}

    return(
        <Pressable onPress={cardPress} onLongPress={cardDelete}>
            <View style={isChecked ? [styles.container, {backgroundColor: '#37474f'}] : styles.container}>
                <Text style={isChecked ? [styles.text, {textDecorationLine: 'line-through', color: '#7f7f7f'}] : styles.text}>{props.task}</Text>
            </View>
        </Pressable>
    );
}

export default Card;