import React from 'react'
import '../../styles/scrolly.css'

class Scrolly extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            ...nextProps
        }
    }

    render() {
        return (
            <div className="header">
                <h2>Scroll for more articles</h2>
                <div className="progress-container">
                    <div className="progress-bar" style={{width:`${this.state.scrollPercentage}%`}}>
                        {this.state.scrollPercentage} %
                     </div>
                </div>
            </div>
        )
    }
}

export default Scrolly