class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        //returning the object
        const getTheNums = localStorage.getItem('thenums')
        this.setState(() => ({ count: !getTheNums ? 0 : getTheNums }))

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            localStorage.setItem('thenums', this.state.count)
            console.log('save the data')
        }
    }

    handleAddOne() {
        console.log('add one')

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });

    }

    handleMinusOne() {
        console.log('minus one')
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        console.log('reset one')
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    //<Counter />
    render() {
        return (
            <div>


                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+ One</button>
                <button onClick={this.handleMinusOne}>- One</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>

        );

    }

}

const Counter = ({ theCount = 0 }) => {
    return (
        <h1>Count: {theCount}</h1>
    )
}


let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<CounterApp />);
