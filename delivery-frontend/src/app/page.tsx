import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import styles from "./page.module.css";
import ThemeProvider from "./ThemeProvider"

export default function Home() {
  return (
    <ThemeProvider>
      <main className={styles.main}>
        <Header/>
        <MainPage/>
        {/* <Footer/> */}
      </main>
    </ThemeProvider>
  );
}
