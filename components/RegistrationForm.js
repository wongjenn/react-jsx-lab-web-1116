const React = require('react')

class RegistrationForm extends React.Component{
  render(){
    return(
    <form >
       <input type="text" />
       <input type="password" />
      <button type="submit" value="Submit"/>
    </form>)
  }
}

module.exports = RegistrationForm
