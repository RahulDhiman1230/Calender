import React from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calender'

const DAYS_INTERVAL = 7;
const App = () => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [interval, setInterval] = React.useState();
  
  
  let dateInterval = {};

  React.useEffect(()=>{},[interval]);

  //intervalCreater function
  const intervalCreater = (year, month, day, CHANGE_DECIDER, MIN_DATE ) =>{
      for(let i=0; i<DAYS_INTERVAL ; i++){

        if(day < MIN_DATE){
          //starting date
          if(i === 0)
          {
            setStartDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
            dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day++ : day++}`] = {startingDay: true, color: '#50cebb', textColor: 'white'};
          }
          //end date
          else if(i === 6){
            setEndDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
            dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day++ : day++}`] = {endingDay: true, color: '#50cebb', textColor: 'white'};
          }
          //intermediate dates
          else{
            dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day++ : day++}`] = {color: '#70d7c7', textColor: 'white'};
          }
        }

        else{
          if(day === CHANGE_DECIDER){
            day = 1; 
            year =  (month == 12 ? year+1 : year);
            month = (month == 12 ? 1 : month+1);
          }

          //starting date
          if(i === 0){
            setStartDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
            dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day++ : day++}`] = {startingDay: true, color: '#50cebb', textColor: 'white'};
           }
          //end date
          else if(i === 6){
            setEndDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
            dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day++ : day++}`] = {endingDay: true, color: '#50cebb', textColor: 'white'};
          }
          //intermediate dates
          else{
            dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day++ : day++}`] = {color: '#70d7c7', textColor: 'white'};
          }
        }
      }
      setInterval(dateInterval);
        console.log(dateInterval);
        dateInterval={};
  }

  //checkLeap function
  const checkLeap = (year) =>{
      /* checking for leap year */
      if (year % 400 == 0) {
        return 'LEAP_YEAR';
      }
      /* not a leap year if divisible by 100
         but not divisible by 400 */
     else if (year % 100 == 0) {
      return 'NOT_LEAP_YEAR';
     }
     /* leap year if not divisible by 100
        but divisible by 4 */
     else if (year % 4 == 0) {
      return 'LEAP_YEAR';
     }
     /* all other years are not leap years */
     else {
       return 'NOT_LEAP_YEAR';
     }
  };

  //onDayPress
  const onDayPress = (DAY) =>{
    console.log("Day :", DAY.dateString);
    let year = DAY.year;
    let day = DAY.day;
    let month = DAY.month;
   
    /* checking if selected date is on SUNDAY */
    const Date = new window.Date(DAY.dateString);
    if(Date.getDay() === 0){
    /* if month is FEBURARY */
    if(month === 2 ){
      const result = checkLeap(year);
      if (result === 'LEAP_YEAR'){
        const CHANGE_DECIDER = 30;
        const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
        return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE );
      }
      else{
        const CHANGE_DECIDER = 29;
        const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
        return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE);
      }
   }

    /* if selected date is from 31 days month */
    else if( (month <=7 && month%2 !== 0) || (month>=8 && month%2 === 0))
    {
      const CHANGE_DECIDER = 32;
      const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
      return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE);
    }
    /* months with 30 days */
    else {
      const CHANGE_DECIDER = 31;
      const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
      return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE);
    }}

   else{
     console.log("SELECT A DATE THAT IS ON SUNDAY");
   }};

  return (
    <SafeAreaView style={styles.mainView}>
    <View style={styles.dateView}>
      <Text style={styles.date}>{`(${startDate})    TO    (${endDate})`}</Text>
    </View>
    <View style={styles.calendarView}>
      <Calendar
     // minDate={}
      markingType={'period'}
      markedDates={interval}
      onDayPress={onDayPress}
      />
    </View>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainView:{
    flex:1,
  },
  dateView:{
    flex:0.2
  },
  date:{
    alignSelf:'center'
  },
  calendarView:{
    flex:0.8
  }
  
})
