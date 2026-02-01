import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import ContainerCard from "./components/ContainerCard/ContainerCard"
import Card from "./components/Card/Card"
import FooterComponent from "./components/FooterComponent/FooterComponent"
import InputCreateCard from "./components/InputCreateCard/InputCreateCard"

export default function App() {
  const [questionCard, setQuestionCard] = useState(() => {
    const saved = localStorage.getItem("flashcards_data")
    return saved ? JSON.parse(saved) : []
  })

  const [optionCreateCard, setOptionCreateCard] = useState(false)
  const [question, setQuestion] = useState("")
  const [description, setDescription] = useState("")
  const [answer, setAnswer] = useState("")

  const handleDeleteCard = (index) => {
    const newList = questionCard.filter((_, i) => i !== index)
    setQuestionCard(newList)
    localStorage.setItem("flashcards_data", JSON.stringify(newList))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCard = {
      question,
      description,
      answer,
    }

    if (!question.trim() || !description.trim() || !answer.trim()) return alert("Preencha todos os campos")
    const newList = [...questionCard, newCard]
    
    setQuestionCard(newList)
    localStorage.setItem("flashcards_data", JSON.stringify(newList))
    
    setQuestion("")
    setDescription("")
    setAnswer("")
    setOptionCreateCard(false)
  }

  return (
    <>
      <div className={styles.app}>
        <div className="container h-100 mt">
          <Navbar
            onClickCreateCard={() => setOptionCreateCard(!optionCreateCard)}
          ></Navbar>
        </div>

        {optionCreateCard && (
          <InputCreateCard
            handleSubmit={handleSubmit}
            question={question}
            description={description}
            answer={answer}
            setQuestion={setQuestion}
            setDescription={setDescription}
            setAnswer={setAnswer}
          ></InputCreateCard>
        )}
        
        <div className="container h-100">
          <ContainerCard>
            {questionCard.map((card, index) => (
              <Card
                key={index}
                question={card.question}
                description={card.description}
                answer={card.answer}
                onDelete={() => handleDeleteCard(index)}
              />
            ))}
          </ContainerCard>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </>
  )
}