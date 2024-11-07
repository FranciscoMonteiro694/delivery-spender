"use client"; // Ensure this component is client-side

import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

// Utility functions to get days and starting day of the month
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getStartDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentDay, setCurrentDay] = useState(today.getDate());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const totalDays = getDaysInMonth(currentMonth, currentYear);
  const startDay = getStartDayOfMonth(currentMonth, currentYear);

  // Get the previous and next month details
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  const totalDaysPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const endDay = (startDay + totalDays) % 7;
  const prevMonthDays = Array.from({ length: startDay }, (_, i) => totalDaysPrevMonth - startDay + i + 1);
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const nextMonthDays = Array.from({ length: endDay === 0 ? 0 : 7 - endDay }, (_, i) => i + 1);

  // Handlers to navigate months
  const goToPrevMonth = () => {
    setCurrentMonth(prevMonth);
    setCurrentYear(prevMonthYear);
    console.log("currentDay: "  + currentDay)
  };

  const goToNextMonth = () => {
    setCurrentMonth(nextMonth);
    setCurrentYear(nextMonthYear);
  };

  return (
    <Card sx={{ bgcolor: 'primary.200' }} size="lg" variant="solid">
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Button
            sx={{ minWidth: '40px' }}
            variant="outlined"
            onClick={goToPrevMonth}
          >
            &lt;
          </Button>
          <Typography level="h3" sx={{ color: '#30313D' }}>
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
          </Typography>
          <Button
            sx={{ minWidth: '40px' }}
            variant="outlined"
            onClick={goToNextMonth}
          >
            &gt;
          </Button>
        </Box>
      </CardContent>
      <CardContent>
        <Grid container spacing={1}>
          {/* Render days of the week */}
          {daysOfTheWeek.map((day, index) => (
            <Grid item xs={1.714} key={index}>
              <Card sx={{ bgcolor: 'neutral.500' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography level="title-lg" textColor="white">{day}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {/* Render previous month's days */}
          {prevMonthDays.map(day => (
            <Grid item xs={1.714} key={`prev-${day}`}>
              <Card variant="outlined" sx={{ bgcolor: 'neutral.300', height: '110px', cursor: 'pointer' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography level="body-sm" sx={{ marginTop: '-8px'}} textColor="text.secondary">
                    {day}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Render current month's days */}
          {days.map(day => (
            <Grid item xs={1.714} key={day}>
              <Card variant="outlined" sx={{ bgcolor: 'primary.100', height: '110px', cursor: 'pointer' }}>
                <CardContent sx={{ textAlign: 'center'}}>
                  <Typography level="body-sm" sx={{
                      marginTop: '-8px',
                      display: 'inline-flex', // Ensures the background is circular
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '30px', // Match the intended circle size
                      height: '30px',
                      borderRadius: '50%',
                      color: day === currentDay ? 'white' : 'inherit',
                      backgroundColor:
                        day === currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                          ? 'neutral.500' // Circle color for current day
                          : 'transparent', // No background for other days
        }}>{day}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Render next month's days */}
          {nextMonthDays.map(day => (
            <Grid item xs={1.714} key={`next-${day}`}>
              <Card variant="outlined" sx={{ backgroundColor: '#f0f0f0', cursor: 'pointer' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography level="body-sm" textColor="text.secondary">
                    {day}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Calendar;
