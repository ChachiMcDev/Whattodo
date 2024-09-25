
class VisibilityApp extends React.Component {
    constructor(props) {
        super(props)
        this.showDetails = this.showDetails.bind(this)
        this.state = {
            visible: false
        }
    }

    showDetails() {
        this.setState((prevState) => {

            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        console.log(this.state.visible)
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <button onClick={this.showDetails}>{this.state.visible ? "Hide Details" : "Show Details"}</button>

                {this.state.visible && (
                    <div>
                        <p>Here are some details</p>
                    </div>
                )}
            </div>
        )
    }
}





let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<VisibilityApp />);