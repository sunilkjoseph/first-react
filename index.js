ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById("root"))
ReactDOM.render(<ul><li>React</li><li>Node</li></ul>, document.getElementById("root"))
function Mycustom(){
    return (
        <ul className="mycustom">
            <li>Item 1</li>
            <li>Item 2</li>    
        </ul>
    )
}
ReactDOM.render(
    <div>
        <Mycustom />
    </div>, document.getElementById("root"))