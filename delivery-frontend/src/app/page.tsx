import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import styles from "./page.module.css";
import { CssVarsProvider, Button } from '@mui/joy';
//import theme from './themes'; 

export default function Home() {
  return (
    //<CssVarsProvider theme={theme}>
      <main className={styles.main}>
        <Header/>
        <MainPage/>
        {/* <Footer/> */}
      </main>
    //</CssVarsProvider>
  );
}
