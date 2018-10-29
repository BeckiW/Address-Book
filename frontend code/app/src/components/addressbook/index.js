import React from "react"

class Addressbook extends React.Component {

  constructor(props) {
      super(props)
}


  render() {
    return (
      <table className="table">
      <div className="club-list-item" onClick={this.onClickHandler}>
        <p> </p>
        <span className="contact-list-name" >{this.props.name}</span>
        <p></p>
        <span className="contact-list-email" >{this.props.email}</span>
        <p> </p>
      </div>
      </table>
    )
  }
}

export default Addressbook
