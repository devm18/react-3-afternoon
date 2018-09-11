import React, { Component } from 'react';
import './Edit.css';
import Post from '../Post'; 

//// THIS COMPONENT IS RENDERED IN POST
export default class Edit extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      text: props.text
    };
    this.updatePost = this.updatePost.bind( this );
  }

  updateText( value ) {
    this.setState({ text: value });
  }

  updatePost() {
    const { id, updatePostFn, hideEdit } = this.props;
    updatePostFn( id, this.state.text );
    hideEdit();
  }

  render() {
    return (
      <section className="Edit__parent">

        <textarea 
          className="Edit__textarea" 
          value={ this.state.text } 
          onChange={ ( e ) => this.updateText( e.target.value ) }></textarea>

        <div className="Edit__controls">
          <button 
            id="Edit__controls-update" 
            className="Edit__control-btn"
            onClick={ this.updatePost }>
            Update
          </button>

          <button id="Edit__controsl-cancel"
                  className="Edit__control-btn"
                  onClick={ this.props.hideEdit }>
            Cancel
          </button>
        </div>

      </section>
    )
  }
}