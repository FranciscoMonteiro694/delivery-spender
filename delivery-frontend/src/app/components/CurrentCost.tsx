import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

export default function CurrentCost() {
  return (
    <Card variant="solid" color="primary" sx={{ color: 'red', bgcolor: 'primary.200' }}>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={100} >
          <SvgIcon sx={{ color: 'red'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </SvgIcon>
        </CircularProgress>
        <CardContent>
          <Typography level="title-lg" sx={{ color: '#30313D'}}>Current month expenses</Typography>
          <Typography level="h2" textColor="red">$ 432.6 (+30%)</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
