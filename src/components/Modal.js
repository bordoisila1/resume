import React from 'react'
import interests from '../lib/interests'

window.onclick = (e) => {
    let modal = document.querySelector('.modal');
    if (modal && e.target == modal) {
        modal.style.display = "none";
    }
}

const handleModalClose = (e) => {
    e.stopPropagation();
    let modal = document.querySelector('.modal');
    if(modal) {
        modal.style.display = "none"
    }
}

const handleDisplayModel = (e) => {
    let modal = document.querySelector('.modal');
    if(modal) {
        modal.style.display = "block";
    }
}

class Modal extends React.Component {

    constructor(props) {
        console.log("Inside constructor")
        super(props)
        this.state = {
            ...props
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Inside WRP")
        this.state = {
            ...nextProps
        }
    }

    componentDidUpdate() {
        console.log("Inside CDU")
        handleDisplayModel()
    }

    componentDidMount() {
        console.log("Inside CDM")
        handleDisplayModel()
    }

    render() {
        console.log(this.state.description)
        return(
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleModalClose}>&times;</span>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
    }
}

export default Modal