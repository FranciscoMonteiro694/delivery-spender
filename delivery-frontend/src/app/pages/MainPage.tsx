import Calendar from '../components/Calendar';
import CurrentCost from '../components/CurrentCost';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-div">
        {/* Current Cost */}
        <CurrentCost/>
        <br></br>
        {/* Calendar */}
        <div className="calendar-div">
            <Calendar/>
        </div>
    </div>
  );
}
