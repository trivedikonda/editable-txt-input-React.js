import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isSaved: false, userInput: ''}

  onClickEvent = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {isSaved, userInput} = this.state
    return (
      <div className="app-container">
        <div className="input-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="paragraph-and-button">
            {isSaved ? (
              <p className="saved-text">{userInput}</p>
            ) : (
              <input
                className="input-element"
                type="text"
                value={userInput}
                onChange={this.onChangeUserInput}
              />
            )}
            {isSaved ? (
              <button
                type="button"
                onClick={this.onClickEvent}
                className="button"
              >
                Edit
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.onClickEvent}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
