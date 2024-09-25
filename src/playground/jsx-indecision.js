

//console.log('app.js is actually running')

//JSX
var appRoot = document.getElementById("app")

var app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: [],
    addOption(option) {
        this.options.push(option)
    }
}


const onFormSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.option.value != "") {
        app.addOption(e.target.elements.option.value)
    }

    e.target.elements.option.value = ""
    renderOptions()
}

const removeAll = () => {
    app.options = []
    renderOptions()
}

const randomOption = () => {
    alert(app.options[Math.floor(Math.random() * app.options.length)])
}

const yesOptions = () => {
    return <div>
        <p>Here are your options</p>

        <button onClick={randomOption}>Select Option</button>
        <button onClick={removeAll}>Remove Options</button>
    </div>
}


const renderOptions = () => {

    const templateOne = <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <div>{app.options.length > 0 ? yesOptions() : "No options"}</div>
        <div>
            <ol>
                {
                    app.options.map((item, index) => {
                        return <li key={[index]}>{item}</li>
                    })}

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>

        </div>
    </div>
    root.render(templateOne)
}



let root = ReactDOM.createRoot(appRoot)

renderOptions()
