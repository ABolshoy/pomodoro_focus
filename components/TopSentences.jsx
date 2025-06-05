import { Text, View } from "react-native";
import { s } from "./TopSentences.style";

export function TopSentences({mode}) {
    return (<View>
        {mode ? (   <>
                        <Text style={s.text}>Time to focus!</Text>
                        <Text style={s.text}>Keep going, you're doing great!</Text>
                    </>)
                  :
                  ( <>
                        <Text style={s.text}>Time to relax!</Text>
                        <Text style={s.text}>Recharge and come back stronger!</Text>
                    </>)
        }
        


    </View>);
}