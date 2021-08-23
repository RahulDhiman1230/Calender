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

  //increaseLoop function
  const increaseLoop = (year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result) =>{
    for(let i=DAY_SELECTED; i<DAYS_INTERVAL ; i++){

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
  }}

  // decrementLoop function
  const decrementLoop = (year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result) =>{
    for(let i=DAY_SELECTED; i>=0 ; i--){

      if(day >= DAYS_INTERVAL){
        //starting date
        if(i === 6)
        {
          setEndDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
          dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day-- : day--}`] = {endingDay: true, color: '#50cebb', textColor: 'white'};
        }
        //end date
        else if(i === 0){
          setStartDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
          dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day-- : day--}`] = {startingDay: true, color: '#50cebb', textColor: 'white'};
        }
        //intermediate dates
        else{
          dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day-- : day--}`] = {color: '#70d7c7', textColor: 'white'};
        }
      }

      else{
        console.log("DAY DATE : ",day)
        if(day === 0){
          if(month === 3){
            const result = checkLeap(year);
            day = result === 'LEAP_YEAR' ? 29 : 28;
            month = 2;
          }
          /*DAYS WITH 31 DAYS*/
          else if ((month <=7 && month%2 !== 0) || (month>=8 && month%2 === 0)){
          day = (month == 1 ? 31 : 30); 
          year =  (month == 1 ? year-1 : year);
          month = (month == 1 ? 12 : month-1);
          console.log("CHANGED : ", month);
          }
          /* MONTH WITH 30 DAYS */
          else{
          day = 31; 
          year =  (month == 1 ? year-1 : year);
          month = (month == 1 ? 12 : month-1);
          console.log("CHANGED : ", month);
          }
        }
        //starting date
        if(i === 6){
          setEndDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
          dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day-- : day--}`] = {endingDay: true, color: '#50cebb', textColor: 'white'};
         }
        //end date
        else if(i === 0){
          setStartDate(`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day : day}`);
          dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day-- : day--}`] = {startingDay: true, color: '#50cebb', textColor: 'white'};
        }
        //intermediate dates
        else{
          dateInterval[`${year}-${month>9 ? month : `0`+month}-${day<10 ? `0`+day-- : day--}`] = {color: '#70d7c7', textColor: 'white'};
        }
      }
  }

  }

  //intervalCreater function
  const intervalCreater = (year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result ) =>{
    /* RANGE OF DAY_SELECTED IS FROM 0-6 => 0= 'SUNDAY' AND 6='SATURDAY' */

      if(DAY_SELECTED === 0){
        increaseLoop(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result );
      }
      else if((DAY_SELECTED<DAYS_INTERVAL-1 && DAY_SELECTED>0)){
        increaseLoop(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result);
        decrementLoop(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result);
      }
      else {
        decrementLoop(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result);
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
  const onDayPress = (DAY) => {
    console.log("Day :", DAY.dateString);
    let year = DAY.year;
    let day = DAY.day;
    let month = DAY.month;
   
    /* checking if selected date is on SUNDAY */
    const Date = new window.Date(DAY.dateString);
    const DAY_SELECTED = Date.getDay();
    console.log("DAY_SELECTED : ", DAY_SELECTED);
    /* if month is FEBURARY */
    if(month === 2 ){
      const result = checkLeap(year);
      if (result === 'LEAP_YEAR'){
        const CHANGE_DECIDER = 30;
        const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
        return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result );
      }
      else{
        const CHANGE_DECIDER = 29;
        const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
        return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED, result);
      }
   }

    /* if selected date is from 31 days month */
    else if( (month <=7 && month%2 !== 0) || (month>=8 && month%2 === 0))
    {
      const CHANGE_DECIDER = 32;
      const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
      return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED);
    }
    /* months with 30 days */
    else {
      const CHANGE_DECIDER = 31;
      const MIN_DATE = CHANGE_DECIDER - DAYS_INTERVAL + 1;
      return intervalCreater(year, month, day, CHANGE_DECIDER, MIN_DATE, DAY_SELECTED);
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
