/////////////////////////////////////////// javascript Code/////////////////////////////////////////////
        
    // const element = document.createElement("h1");
    // element.innerHTML = "Hello World";
    // const root = document.getElementById("root")
    // root.appendChild(element);


    // const heading = document.createElement("h1");
    // heading.innerHTML = "hey Abhishek";
    // const root = document.getElementById("root");
    // root.appendChild(heading);
       
/////////////////////////////////////////// javascript Code/////////////////////////////////////////////
       
       
/////////////////////////////////////////// React Code/////////////////////////////////////////////

    // const heading = React.createElement("h1", {}, "Hello World with React");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    // const heading = React.createElement("h1", {}, "Hello Abhishek in React");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    // const heading = React.createElement("h2", {}, "Hello Abhi");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);


    // const heading = React.createElement("h2", {}, "Hello Sir Kaise Ho");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    const element = React.createElement("div", {id: "parent"}, 
        [React.createElement("div", {id: "child"}, 
            [React.createElement("h1", {class: "heading"}, "Hello Code chal gaya"), 
                React.createElement("h2", {class: "heading"}, "Hello Code chal gaya")] ), 
                React.createElement("div", {id: "child"}, 
                    [React.createElement("h1", {class: "heading"}, "Hello Code chal gaya"), 
                        React.createElement("h2", {class: "heading"}, "Hello Code chal gaya")] )]  );
       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(element);
    
    
    
    
    
    /////////////////////////////////////////// React Code/////////////////////////////////////////////