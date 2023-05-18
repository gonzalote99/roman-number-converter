import React, {Component} from "react";
import "./style.css";
import Conversion from './Conversion';

const convertNatural = new Conversion();

class App extends Component {
state = {
  natural: '',
  roman: ''
}

componentDidMount() {
  convertNatural.convertRoman(this.state.natural)
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleKeyPress = e => {
  if(e.key === "Enter") {
    this.setState({
      roman: convertNatural.convertRoman(this.state.natural),
      natural: ''
    })
  }
}

handleSubmit = e => {
  e.preventDefault()

  this.setState({
    roman: convertNatural.convertRoman((this.state.natural)),
    natural: ''
  })

}


render() {
  const {natural , roman} = this.state;
  return (
    <div className="container">
      <div className="root-container d-flex justify-content-center">
       <div className="main-body w-md-50 bg-light p-5 rounded">
        <form>
         <div className="form-group">
          <label htmlFor="natural">enter natural number</label>
          <input 
            type="text" 
            name="natural"
            id="natural"
            className="form-control"
            value={natural}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="ex: 13"
          />
           </div>
           <div className="form-group my-3">
            <input 
              type="button"
              className="btn btn-sm btn-success"
              onClick={this.handleSubmit}
              value="convert"
            />
             </div>
            <div className="form-group">
             <label htmlFor="roman">coverted roman numeral</label> 
             <input 
               disabled
               type="text"
               name="roman"
               id="roman"
               className="form-control"
               value={roman}

 
               />
            
              </div>
          </form>
         </div>

        </div>
      </div>
  )
}
}


export default App
 