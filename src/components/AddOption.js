import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    // constructor(props) {
    //     super(props)
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    //     // this.state = {
    //     //     error: undefined
    //     // }
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        let getValue = e.target.elements.addoption.value.trim();
        //sets the const to the return value, if a return value then there is an error
        const error = this.props.handleAddOption(getValue);

        this.setState(() => ({ error: error }));
        if (!error) {
            e.target.elements.addoption.value = ''
        }


    }
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form
                    className='add-option'
                    onSubmit={this.onFormSubmit}>
                    <input
                        className='add-option__input'
                        type="text"
                        name="addoption" >
                    </input>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}

export { AddOption }