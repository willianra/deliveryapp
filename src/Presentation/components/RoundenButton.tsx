 import React from 'react'
import { TouchableOpacity, View ,Text,StyleSheet} from 'react-native'
import { colors } from '../../Presentation/theme/AppTheme'
 
 
interface Props{
  text: String,
  onPress:()=>void
  }
 export const RoundenButton = ({text,onPress}:Props) => {
   return (
     <TouchableOpacity
       style={styles.roundenButton}
       onPress={() => onPress() }
       
     >
       <Text style={styles.textButtom}>
         {text}
         
 
       </Text>
     </TouchableOpacity>

   )
 }
const styles = StyleSheet.create( {
    roundenButton: {
      width: '100%',
      height: 50,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:15
    },
    textButtom: {
      color: 'black',
      fontWeight:'bold'
    }
  }
);
 