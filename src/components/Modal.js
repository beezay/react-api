import { Component } from "react";




class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const hideModal = () => {
        document.querySelector('.modal').style.display = 'none'
        console.log('Hide Me')
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <button className="btn btn-close" onClick={hideModal} >Close</button>
          <div className="header">
            <h4>This is header</h4>
          </div>
          <div className="footer">
            <p>This is Footer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
