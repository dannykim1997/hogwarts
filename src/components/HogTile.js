import React from "react"
import MoreDetails from "./MoreDetails"

class HogTile extends React.Component {
    
    state = {
        showDetails: false
    }

    handleClick = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        console.log(this.state.showDetails)
        let formattedImg = this.props.hogDetails.name.toLowerCase().split(" ").join("_")
        let pigImage = require(`../hog-imgs/${formattedImg}.jpg`)
    
        return (
            <div className="card ui three wide column pigTile" onClick={this.handleClick}>
                {this.props.hogDetails.name}
                <img className="card ui" src={pigImage}/>
                <div>
                    {this.state.showDetails ? <MoreDetails hog={this.props.hogDetails}/> : null}
                </div>
            </div>
        )
    }
}

export default HogTile