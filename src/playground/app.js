


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            // title: "Indecision App",
            subTitle: "Put your life in the hands of a computer",
            options: []
        }
    }

    componentDidMount() {
        //returning the object
        const getTheOptions = JSON.parse(localStorage.getItem('options'))
        this.setState(() => ({ options: !getTheOptions ? [] : getTheOptions }))
        console.log('huh', this.state.options)
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
            console.log('save the data')
        }
    }

    componentWillUnmount() {
        console.log('component unmount')
    }

    handleAddOption(theOption) {
        if (!theOption) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(theOption) > -1) {
            return 'This option already exists'

        }

        this.setState((prevState) => ({ options: prevState.options.concat(theOption) }));


    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        console.log('delete me', optionToRemove)
        this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optionToRemove) }));
    }

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }
    render() {
        // const title = "Indecision App";
        // const subTitle = "Put your life in the hands of a computer";
        // const options = ['thing one', 'thing two', 'thing three'];


        return (
            <div>
                <h1><Header subtitle={this.state.subTitle} /></h1>
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.handlePick}
                />
                <Options

                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}

                />
                <AddOption

                    handleAddOption={this.handleAddOption} />

            </div>
        );
    }
}

const Header = (props, { title = "Default Option title: Indecision App" }) => {
    return (<div>
        <h1>{title}</h1>
        <h3>{props.subtitle}</h3>
        <p>This from header component</p></div>);
}

// Header.defaultProps = {
//     title: "Default Option title: Indecision App"
// }

// class Header extends React.Component {

//     render() {
//         return (<div>
//             <h1>{this.props.title}</h1>
//             <h3>{this.props.subtitle}</h3>
//             <p>This from header component</p></div>);
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.pickOption}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    );
}

// class Action extends React.Component {

//     render() {

//         return (
//             <div>
//                 <button
//                     onClick={this.props.pickOption}
//                     disabled={!this.props.hasOptions}
//                 >What should I do?</button>
//             </div>
//         );
//     };
// };

const Option = (props) => {
    return (
        <div>
            <h4>{props.optionText}</h4>
            <button onClick={(e) => props.handleDeleteOption(props.optionText)}>X</button>
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h4>{this.props.optionText}</h4>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
            {props.options.length === 0 && <p>Please Enter Some Options</p>}
            {props.options.map((option, key) => {
                return (<div key={key}><Option
                    key={option} optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                /></div>);
            })}

        </div>

    );
}

// class Options extends React.Component {
//     //overriding constructor function to bind this

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOption}>Remove All Options</button>
//                 {this.props.options.map((option, key) => {
//                     return (<div key={key}><Option optionText={option} /></div>);
//                 })}

//             </div>

//         );
//     };
// };

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="addoption" ></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



//stateless functional component
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: </p>
        </div>
    )
}



let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);
//root.render(<User name="chachi" />);
