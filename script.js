/*
const firstDiv = () => {
    return <div>Test Numéro Un</div>;
}
*/

function createMessage(message) {
    return React.createElement("div", {className: "message"}, message);
}

const firstDiv = createMessage("Alerte");

const secondDiv = createMessage("Second Change");

ReactDOM.createRoot(document.getElementById("react-first")).render(firstDiv);
ReactDOM.createRoot(document.getElementById("react-second")).render(secondDiv);

