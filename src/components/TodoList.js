import React, { useContext, useEffect, useState } from "react";
import TodoListCSS from "./TodoList.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DashboardContext from "./DashboardContext";

function TodoList() {
  const {isFormOpened, setIsFormOpened} = useContext(DashboardContext);
  const [lessons, setLessons] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("./todo.json");
        setLessons(response.lessons);
        setClickedButtons(new Array(response.lessons.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (index) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = !newClickedButtons[index];
    setClickedButtons(newClickedButtons);
    setIsButtonClicked(true);
    if(isFormOpened === false && newClickedButtons[index] === true){
        setIsFormOpened((prev) => !prev);
    }
    else{
        setIsFormOpened(false);
    }
  };

  useEffect(() => {
    // Check if any button is clicked
    if (isButtonClicked) {
      const completedIndex = clickedButtons.findIndex((value) => value);
      if (completedIndex !== -1) {
        // Set the corresponding index to true
        const newClickedButtons = [...clickedButtons];
        newClickedButtons[completedIndex] = true;
        setClickedButtons(newClickedButtons);
        
      }
      // Reset isButtonClicked after processing
      setIsButtonClicked(false);
    }
  }, [isButtonClicked, clickedButtons]);

  useEffect(() => {
    console.log(isFormOpened);
  },[isFormOpened]) 

  return (
    <>
      <div className={TodoListCSS["todo-container"]}>
        <div className={TodoListCSS["todo-header"]}>
          <div className={TodoListCSS["header-text"]}>Your assignments</div>
          <p>See all</p>
        </div>
        <div className={TodoListCSS["todo-list"]}>
          {lessons.map((lesson, index) => (
            <div key={index} className={TodoListCSS["todo-item"]}>
              <div className={TodoListCSS["item-info"]}>
                <div className={TodoListCSS["item-title"]}>{lesson.title}</div>
                <div className={TodoListCSS["item-date"]}>{lesson.date}</div>
              </div>
              <div className={TodoListCSS["item-right"]}>
                <div
                  className={TodoListCSS["item-point"]}
                >{`${lesson.point}/100`}</div>
                <Button variant="light" onClick={() => handleClick(index)}>
                  {clickedButtons[index] ? "Completed" : "To do"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
