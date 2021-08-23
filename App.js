import React from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calender'


const App = () => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [interval, setInterval] = React.useState();
  
  
  let dateInterval = {};

  React.useEffect(()=>{},[interval]);
  //leap Year function
  const leapYear = (year, month, day) =>{
    for( let i=0 ; i<7 ; i++){
      //if day.day is less than 29
      if(day <29)
      {
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
    //when month changes from FEB to MARCH
    else{
      //reset the day to 1 for next month
      if(day === 30)
      {day = 1; month = month+1};
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

    setInterval(dateInterval);
    dateInterval={};
   }
  }

  //notLeap function
  const notLeapYear = (year, month, day) =>{
    for( let i=0 ; i<7 ; i++){
      //if day is less than 28
      if(day < 28)
      {
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
    //when month changes from FEB to MARCH
    else{
      //reset the day to 1 for next month
      if(day === 29)
      {day = 1; month = month+1};
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
   }
   setInterval(dateInterval);
   dateInterval={};
  }

  //setInterval_30
  const setInterval_30 = (year, month, day) =>{
    console.log("MONTH WITH 30 DAYS : ",day)
    for(let i=0; i<7 ;i++){
      if(day <= 24)
      {
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
    //when month changes
    else{
      //reset the day to 1 for next month
      if(day === 31)
      {day = 1; month = month+1};
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

    }
    setInterval(dateInterval);
    console.log(interval);
    dateInterval={};
  }

  //setInterval_31 function
  const setInterval_31 = (year, month, day) =>{
    console.log("MONTH WITH 31 DAYS : ",day)
    
    for(let i=0; i<7 ;i++){
      if(day <= 25)
      {
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
    //when month changes
    else{
      //reset the day to 1 for next month
      if(day === 32)
      {
        day = 1; 
        year =  (month == 12 ? year+1 : year);
        month = (month == 12 ? 1 : month+1);
      };
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

    }
    setInterval(dateInterval);
    console.log(interval);
    dateInterval={};
  }

  //onDayPress
  const onDayPress = (DAY) =>{
  
    console.log("Day :", DAY.dateString);
    let year = DAY.year;
    let day = DAY.day;
    let month = DAY.month;
   
    //checking if selected date is on SUNDAY
    const Date = new window.Date(DAY.dateString);
    if(Date.getDay() === 0){
    
    //if month is FEBURARY
    if(month === 2 ){
     //checking for leap year
     if (year % 400 == 0) {
       //is leap year 
       leapYear(year, month, day);
       console.log("INTERVAL ARRAY Leap : ", interval);
     }
     // not a leap year if divisible by 100
    // but not divisible by 400
    else if (year % 100 == 0) {
      //not a leap year
      notLeapYear(year, month, day);
      console.log("INTERVAL ARRAY NotLeap: ", interval);
     
    }
    // leap year if not divisible by 100
    // but divisible by 4
    else if (year % 4 == 0) {
       //leap year
       leapYear(year, month, day);
       console.log("INTERVAL ARRAY LEAP: ", interval);
    }
    // all other years are not leap years
    else {
       notLeapYear(year,month, day);
       console.log("INTERVAL ARRAY Not Leap: ", interval);
    }}

    //if selected date is from 31 days month
    else if( (month <=7 && month%2 !== 0) || (month>=8 && month%2 === 0))
    {
      setInterval_31(year, month, day);
    }
    // months with 30 days
    else {
      setInterval_30(year, month, day);
    }
   }
   else{
     console.log("SELECT A DATE THAT IS ON SUNDAY");
   }

   }

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
