import Card from "./components/Card";
import "./App.scss";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import Button from "./components/Button";
import ProfilePic from "./components/ProfilePic";
import MyComponent from "./components/MyComponent";
import PlacesToVisit from "./components/PlacesToVisit";
import Counter from "./components/Counter";
import OnchangePractice from "./components/Onchange";
import ColorPicker from "./components/ColorPicker";
import CardsLayout from "./components/CardsLayout";
import AddFoodAndRemoveFood from "./components/AddAndRemoveFood";
import AddAndRemoveCars from "./components/AddAndRemoveCars";
import ToDoList from "./components/ToDoList";
import HooksPractice from "./components/HooksPractice";
import DigitalClock from "./components/DigitalClock";
import UseRefPractice from "./components/UseRefPractice";
import StopWatch from "./components/StopWatch";
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 70 },
    { id: 2, name: "banana", calories: 22 },
    { id: 3, name: "orange", calories: 50 },
    { id: 4, name: "pinaple", calories: 74 },
  ];
  const vegetables = [
    { id: 6, name: "cucumber", calories: 123 },
    { id: 7, name: "tomato", calories: 456 },
    { id: 8, name: "carrot", calories: 88 },
    { id: 9, name: "potato", calories: 74 },
  ];
  const carbohydrates = [
    { id: 10, name: "bread", calories: 79 },
    { id: 11, name: "sugar", calories: 67 },
    { id: 12, name: "bla bla", calories: 69 },
    { id: 13, name: "bla bla", calories: 75 },
  ];
  return (
    <>
      <Card />
      {/* this is the parent component that sends the props to the child component */}
      <Student name="Body" age={17} favSubj="Math" isStudent={true} />
      <Student name="Shimaa" age={27} favSubj="" isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={true} userName={"body"} />
      <UserGreeting />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="vegetables" />
      <List items={carbohydrates} category="carbohydrates" />
      <Button />
      <ProfilePic />
      <MyComponent />
      <PlacesToVisit />
      <Counter />
      <OnchangePractice />
      <ColorPicker />
      <CardsLayout />
      <AddFoodAndRemoveFood />
      <AddAndRemoveCars />
      <ToDoList />
      <HooksPractice />
      <DigitalClock />
      <UseRefPractice />
      <StopWatch />
    </>
  );
}

export default App;
