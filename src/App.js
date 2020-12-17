import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons:[
      {name:"yuling", age:38},
      {name:"richard", age:28},
      {name:"lennart", age:180},
    ],

    books:[
      {person:'yuling', book:'medications'},
      {person:'kitty', book:'how to be a professional purrer'},
      {person: 'alex', book:'microhabbits'}
    ], 

    showPerson: false,
    // inputLength: 0,
    inputLetter:""

  }

  // switchNameHandler = (newName) => {
  //   // console.log("the button was clicked!")
  //   this.setState ({
  //     persons:[
  //       {name:"yuling", age:19},
  //       {name:"richard", age:40},
  //       {name:newName, age:29},
  //     ]
  //   })
  // }


  nameToggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  deletePersonHandler = (personsIndex) => {
    const persons = this.state.persons;
    persons.splice(personsIndex, 1);
    this.setState({persons: persons})
  }

  inputChangeHandler = (event) => {
    const input = event.target.value;
    this.setState({inputLetter: input});
  
  }

  deleteInputHandler = (index) =>{
    const text = this.state.inputLetter.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState ({inputLetter:updatedText});
  }

  

  render() {

    const inputList = this.state.inputLetter.split('').map( (char, index) => {
      return <CharComponent 
      character={char} 
      key={index}
      clicked={()=>this.deleteInputHandler(index)}/>
    })

    const style = {
      backgroundColor: "pink",
      font:"helvetica",
      border:'2px solid purple',
      padding: '8px',
      curser: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
      <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={()=> this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}/>
          })
          }
          
        </div>
      )
    }

    return (
      <div className="App">
        <h1>heya! welcome to glassycoding!</h1>
        <button style={style}
        onClick={this.nameToggleHandler}>Toggle name!</button>
        {persons}

        {/* the first challenge */}
        <h1>Self-reflection time!</h1>
        <p>Please type in something crazy and random below!</p>
        <input type='text' 
        onChange={this.inputChangeHandler}
        value={this.state.inputLetter}/>
        <p>The length of your input is : {this.state.inputLength}</p>
        <Validation length={this.state.inputLength}></Validation>

        <CharComponent input={this.state.inputLetter}></CharComponent>
        {inputList}
        {/* <UserInput
        onChange={this.inputChangeHandler}/> */}
        
        {/* <UserOutput
        name="MIKO"
        reading="LOST IN TOKYO"
        click={this.bookChangeHandler}
        >Change PUUUUUURRR!
        </UserOutput> */}

        <button style={style}
        onClick={this.bookChangeHandler}>Switch boook!</button>
      </div>
    )
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'is this workinng?'))
  }
}

export default App;
