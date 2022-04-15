import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addition,subtraction ,reset,multiplication} from './Redux/Action'


const Counter = () => {
    const data = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
  return (
    <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
      <Text style={styles.Text}>{data}</Text>
      <View >
      <Button style={{margin:45}} title='INCREMENT'onPress={()=>dispatch(addition())} />
      <Text></Text>
      <Button  style={styles.button} title='DECREMENT'onPress={()=>dispatch(subtraction())}/>
      <Text></Text>
      <Button  style={styles.button} title='RESET' onPress={()=>dispatch(reset())}/>
      <Text></Text>
      {/* <Button  style={styles.button} title='MULTIPLY BY 2' onPress={()=>dispatch(multiplication())}/>
      */}
      </View>
       
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    button:{

    },
    Text:{
        display:"flex",
fontSize:280,
justifyContent:"center",
alignContent:"center",
textAlign:"center",
backgroundColor:'#68a0cf',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:1278


    }
}
    )