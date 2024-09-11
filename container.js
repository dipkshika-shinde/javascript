var video=[
    {
        task:"wake up"
           
    },
    {
        task:"wake up"
           
    },{
        task:"wake up"
           
    },{
        task:"wake up"
           
    },{
        task:"wake up"
           
    },
        
];                                                   





// function add(){

// var inputfeild=document.querySelector(".inputFeild").value;
// var TaskList= document.querySelector(".TaskList");


// var container=document.createElement("div");
// container.className="container";

// var h4Element=document.createElement("h4");
// h4Element.textContent=inputfeild;

// container.appendChild(h4Element);

// TaskList.appendChild(container);

// var containerBox=document.createElement("div");
// containerBox.className="containerBox";

// container.appendChild(containerBox);

// }




video.forEach( serv => {

var containerBox=document.createElement("div");
containerBox.className="containerBox";

var h4Element=document.createElement("h4");
h4Element.textContent= serv.task;

containerBox.appendChild(h4Element);

var container=document.getElementById("playlist");

container.appendChild(containerBox);


}
)






