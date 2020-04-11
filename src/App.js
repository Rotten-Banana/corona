import React,{Component} from 'react';
import SearchField from './searchField.js'
import Card from './cards.js'
import './index.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      data_global: [],
      searchField: '',
      data_country: []
    }
  }

  async componentDidMount(){
    const response = await fetch('https://coronavirus-19-api.herokuapp.com/all')
    const data = await response.json()
    this.setState({ data_global: data});
    const response_country = await fetch('https://coronavirus-19-api.herokuapp.com/countries/india')
    const data_country = await response_country.json()
    this.setState({ data_country: data_country});
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  onEnter = async (event) => {
    if (event.key === 'Enter')
    {
      const response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${this.state.searchField}`)
      const data = await response.json()
      this.setState({ data_country: data});
    }
  }

  render(){
    return(
      <div>
        <div className="box">
          <h1>Global</h1>
          <p>Cases: {this.state.data_global.cases}</p>
          <p>Death: {this.state.data_global.deaths}</p>
          <p>Recovered: {this.state.data_global.recovered}</p>
        </div>
        <SearchField onSearch={this.onSearchChange} onEnter={this.onEnter}/>
        <div className="box">
          <Card data={this.state.data_country}/>
        </div>
      </div>
    );  
  }

}

export default App;
