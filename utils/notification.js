import {Permissions,Notifications} from 'expo'
import { AsyncStorage } from 'react-native'
const NOTIFICATION_KEY = 'Udacicards'

export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createLocalNotification(){
  return {
    title:"Take up Quiz",
    body:"Do not forget to take up Quiz today!!",
    android:{
      sound:true,
      priority:'high',
      sticky:false,
      vibrate:true,
    }
  }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow  = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(10)
              tomorrow.setMinutes(30)
              Notifications.scheduleLocalNotificationAsync(
                createLocalNotification(),
                {
                  time:tomorrow,
                  repeat:'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
            }
          })
      }
    })
}
