import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import styles from "./page.module.css";
import ThemeProvider from "./ThemeProvider"
import SessionWrapper from "./components/SessionWrapper";


export default function Home() {
  return (
    <SessionWrapper>
    <ThemeProvider>
      <main className={styles.main}>
        <Header/>
        <MainPage/>
      </main>
    </ThemeProvider>
    </SessionWrapper>
  );
}
