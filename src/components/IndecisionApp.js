import React from 'react';
import { AddOption } from './AddOption';
import { Action } from './Action';
import { Options } from './Options';
import { Header } from './Header';
import { OptionModal } from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        subTitle: "Put your life in the hands of a computer!",
        options: [],
        selectedOption: undefined
    }
    // constructor(props) {
    //     super(props)
    //     // this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     // this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     // this.handleAddOption = this.handleAddOption.bind(this)
    //     // this.handlePick = this.handlePick.bind(this)
    //     // this.state = {
    //     //     // title: "Indecision App",
    //     //     subTitle: "Put your life in the hands of a computer",
    //     //     options: []
    //     // }
    // }

    handleAddOption = (theOption) => {
        if (!theOption) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(theOption) > -1) {
            return 'This option already exists';

        }

        this.setState((prevState) => ({ options: prevState.options.concat(theOption) }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        console.log('delete me', optionToRemove)
        this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optionToRemove) }));
    };

    handlePick = () => {
        //alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        this.setState(() => ({ selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)] }));
    };

    handleCloseModal = () => {
        this.setState({ selectedOption: undefined });
    }

    componentDidMount() {
        //returning the object
        const getTheOptions = JSON.parse(localStorage.getItem('options'));
        this.setState(() => ({ options: !getTheOptions ? [] : getTheOptions }));
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log('component unmount');
    }


    render() {
        return (
            <div>
                <h1><Header subtitle={this.state.subTitle} /></h1>
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        pickOption={this.handlePick}
                    />
                    <div className="widget">
                        <Options

                            handleDeleteOptions={this.handleDeleteOptions}
                            options={this.state.options}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}
