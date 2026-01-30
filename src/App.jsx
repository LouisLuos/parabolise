import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ContainerCard from "./components/ContainerCard/ContainerCard";
import Card from "./components/Card/Card";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import InputCreateCard from "./components/InputCreateCard/InputCreateCard";

export default function App() {
  const [optionCreateCard, setOptionCreateCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.app}>
        <div className="container h-100">
          <Navbar
            onClickCreateCard={() => setOptionCreateCard(!optionCreateCard)}
          ></Navbar>
        </div>

        {optionCreateCard && (
          <InputCreateCard handleSubmit={handleSubmit}></InputCreateCard>
        )}
        <div className="container h-100">
          <ContainerCard>
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
