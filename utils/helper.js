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
  textStyle8:{
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
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
  textInputStyle1:{
    height:50,
    borderColor:'black',
    borderWidth: 2,
    borderRadius:5,
    marginLeft:30,
    marginRight:30,
    paddingLeft:10
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
  textButtonStyle2:{
    fontSize:20,
    backgroundColor:'#B22222',
    color:'white',
    padding: 10,
    paddingLeft: 58,
    paddingRight: 58,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
  },
  textButtonStyle3:{
    fontSize:20,
    backgroundColor:'green',
    color:'white',
    padding: 10,
    paddingLeft: 56,
    paddingRight: 56,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  textButtonStyle4:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
    flipCard: {
      justifyContent:'flex-start',
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
    container1: {
      flex: 1,
      justifyContent:'center',
      backgroundColor:'white',
      justifyContent:'flex-start'
    },
    container2: {
      flex: 1,
      backgroundColor:'white',
      justifyContent:'flex-start',
      alignSelf:'flex-start',
      paddingLeft:10,
      paddingTop:10
    },
    container3: {
      flex: 4,
      justifyContent:'center',
      backgroundColor:'white',
      alignItems:'center'
    },
    container5: {
      flex: 3,
      backgroundColor:'white',
      justifyContent:'flex-start',
      alignItems:'center'
    },
    container6: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems:'stretch',
      backgroundColor:'white'
    },
    container7: {
      flex: 1,
      justifyContent:'flex-start',
      backgroundColor:'white',
      alignSelf:'center'
    },
    container8: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
    },
    container9: {
      flex: 1,
      justifyContent:'center',
      alignItems:'stretch',
      backgroundColor:'white'
    },
    container10: {
      flex: 3,
      justifyContent:'center',
      alignItems:'stretch',
      backgroundColor:'white'
    },
    container11: {
      flex: 4,
      justifyContent:'center',
      alignItems:'stretch',
      backgroundColor:'white',
      margin:25
    },
    container12: {
      flex: 2,
      justifyContent:'flex-start',
      alignItems:'stretch',
      backgroundColor:'white'
    },
    deckStyle: {
      height:175,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 4,
      borderWidth: 0.5,
    },
    textButton: {
      textAlign: 'center',
      color:'white'
    }
})
