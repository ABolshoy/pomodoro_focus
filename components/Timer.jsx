import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { s } from "./Timer.style";

export function Timer({duration, secondsLeft, setSecondsLeft, isRunning}) {
    const animatedHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const progress = 1 - secondsLeft / duration;
        const fillHeight = 300 * progress;

        Animated.timing(animatedHeight, {
            toValue: fillHeight,
            duration: 900,
            useNativeDriver: false,
            easing: Easing.out(Easing.ease),
        }).start();
    }, [secondsLeft, duration])

    useEffect(() =>{
        if (isRunning) {
            const interval = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return (0);
                    }
                    return (prev - 1);
                });
            }, 1000)
            
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    const format = (n) => n.toString().padStart(2, "0");

    return (
        <View style={s.container}>
            <View style={s.timer }>
                <Animated.View style={[s.fillMask, {height: animatedHeight}]}></Animated.View>
                <Text style={s.time}>{format(minutes)}:{format(seconds)}</Text>
            </View>
            <Text style={s.text}>Next break: 19:06</Text>
        </View>
    )
}