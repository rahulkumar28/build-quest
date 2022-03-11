class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 0,
                name: "Buy milk"
            }, {
                id: 1,
                name: "Write unit tests"
            }, {
                id: 2,
                name: "Cook a meal"
            }]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        console.log(`${value} clicked`);
    }

    renderTodos() {
        return this.state.items.map((item, idx) => {
            return (< li className='list-group-item'
                key={
                    idx
                } > {
                    item.name
                } < button onClick={
                    () => this.handleClick(item.id)
                } > X < /button>
            </li >
            )
        })
    }
    render() {
        return (< ul id="todo" > {
            this.renderTodos()
        } < /ul>
            ) 
  }
}

            ReactDOM.render(
            <App /> ,
            document.getElementById('react_example')
            );