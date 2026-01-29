import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import ContainerCard from "./components/ContainerCard/ContainerCard";
import Card from "./components/Card/Card";
import FooterComponent from "./components/FooterComponent/FooterComponent";

export default function App() {
  


  return (
    <>
      <div className={styles.app}>
        <div className="container h-100">
          <Navbar></Navbar>
        </div>
        <div className="container h-100">
          <ContainerCard>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

          </ContainerCard>
        </div>
        <FooterComponent></FooterComponent>
      </div>
      
    </>
  );
}
