import { StyleSheet } from 'react-native'
export  const globalStyles = StyleSheet.create({
  textStyle1: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 25,
    textAlign: 'center',
    color:'#808080',
  },
  textStyle3: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle4: {
    fontSize: 35,
    textAlign: 'center',
    color:'#808080',
  },
  textStyle5: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle6: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle7: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'red',
    marginTop:20
  },
  textButtonStyle:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle:{
    height:55,
    borderColor:'black',
    borderWidth: 2,
    borderRadius:8,
    marginLeft:30,
    marginRight:30,
    paddingLeft:10,
    margin:30,
    fontWeight:'bold',
  },
  textButtonStyle1:{
    fontSize:20,
    backgroundColor:'green',
    color:'white',
    padding: 10,
    paddingLeft: 65,
    paddingRight: 65,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
    flipCard: {
      width: 300,
      height:200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#ffffff",
      borderRadius: 10,
      backfaceVisibility: 'hidden',
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }
    },
    flipCardBack: {
      backgroundColor: "#ffffff",
      borderRadius:8,
      position: "absolute",
      top: 0,
    },
    container: {
      flex: 1,
      justifyContent:'center',
      backgroundColor:'white'
    },

})
