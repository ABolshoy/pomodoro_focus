import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { s } from "./Timer.style";

export function Timer() {
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);

    useEffect(() =>{
        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    console.log("FIN");
                    return (0);
                }
                return (prev - 1);
            });
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    const format = (n) => n.toString().padStart(2, "0");

    return (
        <View style={s.container}>
            <View style={s.timer }>
                <Text style={s.time}>{format(minutes)}:{format(seconds)}</Text>
            </View>
            <Text style={s.text}>Next break: 19:06</Text>
        </View>
    )
}