const React = require('react')
const ReactDOM = require('react-dom')
const FillerText = require('../components/FillerText')

class Webpage extends React.Component{
  render(){
    return (
      <div>
      "The world's coolest webpage"
      <FillerText />
      <FillerText />
      </div>)
  }
}

module.exports = Webpage
