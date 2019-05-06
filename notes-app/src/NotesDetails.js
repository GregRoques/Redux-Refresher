import React, { Component } from 'react';

const NotesEditor = ({text, handleChange}) =>{
    return(
        <textarea value ={text} 
            onChange={(e)=>{ handleChange(e.target.value)}}
        />
    )
}

export default class NotesDetail extends Component{
    state = {
        isEditing: false,
        draftText: this.props.note.text
    }
    
    render(){
        // declares the className and Note variables 
        // and assigns them to the properties from this.props
        // where the name matches
        const {className, note} = this.props
        const {isEditing, draftText} = this.state;
        return(
            <div className={className}>
                {
                    isEditing ? <NotesEditor 
                        handleChange = {this._changeDraftText}
                        text={draftText} 
                    
                    /> : note.text
                    
                }
                <br/>
                <button onClick={this._toggleIsEditing}>Toggle</button>
            </div>
        )
    }

    _changeDraftText = (newText) =>{
        this.setState({
            draftText: newText
        })
    }

    _toggleIsEditing = () =>{
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
}