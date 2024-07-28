

// <div id="parent">
//     <div id="parent">
//         <h1>raghav 1</h1>
//         <h2>raghav 2</h2>
//     </div>
// </div>

//hello

const hedding=React.createElement("div",{id:'parent'},
  [
    React.createElement("div",{id:'Child'},[
        React.createElement("h1",{id:'raghav'},"Raghav Agravat :) 1"),
        React.createElement("h2",{id:'raghav2'},"Raghav Agravat :) 2"),

    ]),
    React.createElement("div",{id:'Child2'},[
        React.createElement("h1",{id:'raghav3'},"Raghav Agravat :) 4"),
        React.createElement("h2",{id:'raghav4'},"Raghav Agravat :) 5"),

    ])

  ]
);

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(hedding);