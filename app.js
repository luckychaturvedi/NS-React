// 
// 
// 





const heading = React.createElement("h6", 
    {id: "heading", abc: "xyz"}, "value of div",  
    [ React.createElement("p", {className : "child"}, "value of child"),
        React.createElement("p", {className : "child"}, "value of child"),
        React.createElement("p", {className : "child2"}, "value of child"),
        React.createElement("p", {className : "child3"}, "value of child"),
        React.createElement("p", {className : "child4"}, "value of child")
    ],
        React.createElement("a", {href: "www.google.com", target: "_blank"}, "test link" )

);


console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)

