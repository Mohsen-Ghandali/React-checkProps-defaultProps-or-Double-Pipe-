import Person from "../Persons/Person";

const App = () => {
  const firstName = "Mohsen"
  const lastName = "Ghandali"
  const age = "35"
const clickHandler =()=>{
  console.log("Hello-World!");
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">

      <Person firstName={firstName} lastName={lastName} age={age} clickHandler={clickHandler} />
      <Person  />

    </div>
  );
};


export default App;