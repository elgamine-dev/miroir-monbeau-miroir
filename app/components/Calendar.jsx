import React, {createClass} from 'react'


const Rdv = createClass({
    render(){
        return (
            <div className="component">
                {this.props.children}
            </div>
        )
    }
})

module.exports = {
      Rdv
}