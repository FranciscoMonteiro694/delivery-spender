import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';

// Utility functions to get days and starting day of the month
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getStartDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const totalDays = getDaysInMonth(month, year);
  const startDay = getStartDayOfMonth(month, year);

  // Get the previous and next month details
  const prevMonth = month === 0 ? 11 : month - 1;
  const nextMonth = month === 11 ? 0 : month + 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const nextMonthYear = month === 11 ? year + 1 : year;

  const totalDaysPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const endDay = (startDay + totalDays) % 7;
  const prevMonthDays = Array.from({ length: startDay }, (_, i) => totalDaysPrevMonth - startDay + i + 1);
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const nextMonthDays = Array.from({ length: endDay === 0 ? 0 : 7 - endDay }, (_, i) => i + 1);


  return (
    <Card color="primary" size="lg" variant="solid" invertedColors>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Typography level="h4" color="primary">{currentDate.toLocaleString('default', { month: 'long' })} {year}</Typography>
        </Box>
      </CardContent>
      <CardContent>
        <Grid container spacing={1}>
          {/* Render days of the week */}
          {daysOfTheWeek.map((day, index) => (
            <Grid item xs={1.714} key={index}>
              <Card variant="outlined">
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography level="body-sm" textColor="text.primary">{day}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {/* Render previous month's days */}
          {prevMonthDays.map(day => (
            <Grid item xs={1.714} key={`prev-${day}`}>
              <Card variant="outlined" sx={{ backgroundColor: 'black', height: '110px' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography level="body-sm" textColor="text.secondary">
                    {day}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Render current month's days */}
          {days.map(day => (
            <Grid item xs={1.714} key={day}>
              <Card variant="outlined" sx={{ height: '110px' }}>
                <CardContent sx={{ textAlign: 'center'}}>
                  <Typography level="body-sm">{day}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Render next month's days */}
          {nextMonthDays.map(day => (
            <Grid item xs={1.714} key={`next-${day}`}>
              <Card variant="outlined" sx={{ backgroundColor: '#f0f0f0' }}>
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
