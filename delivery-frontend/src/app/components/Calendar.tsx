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

  // Create an array of day numbers for the current month
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <Card color="primary" size="lg" variant="solid" invertedColors>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Typography level="h4">{currentDate.toLocaleString('default', { month: 'long' })} {year}</Typography>
        </Box>
      </CardContent>
      <CardContent>
        <Grid container spacing={1}>
          {[...Array(startDay)].map((_, i) => (
            <Grid item xs={1} key={`empty-${i}`} />
          ))}
          {days.map(day => (
            <Grid item xs={1} key={day}>
              <Card variant="outlined">
                <CardContent>
                  <Typography level="body-sm">{day}</Typography>
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
