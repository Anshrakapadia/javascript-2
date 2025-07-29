var mathmagic = prompt("Select any math magic trics: \n\n 1)Forward Counting \n 2) Backward Counting \n 3) Multiplication Table").toLowerCase();
if (mathmagic === "1" || mathmagic === "forward counting") {
  var start = +prompt("Enter start number (e.g., 1):");
   var end = +prompt("Enter end number (e.g., 20):")
    document.writeln(`<div class="forward"> `); 
        document.writeln(`<h2 class="heading-forward-2">Forward Counting from ${start} - ${end}</h2>`);
        document.writeln(`<div class="circle">`);
    for (let i = start; i <= end; i++) {
        document.writeln(`<div class="count">${i}</div>`);
    } document.writeln(`</div>`); 
     document.writeln(`</div>`); 

}
 else if (mathmagic === "2" || mathmagic === "backward counting"){
    var start = +prompt("Enter start number :");
     var end = +prompt("Enter end number :");
     document.writeln(`  <div class="backward">`);
     document.writeln(`<h2 class="heading-forward-2">Backward Counting from ${start} - ${end}</h2>`)
     document.writeln(`<div class="backward-main">`);
     document.writeln(`<div class="backward-card">`);
         document.writeln(`<div class="circle">`);
 for (let i = start; i >= end; i--) {
        document.writeln(`<div class="count-back">${i}</div>`);
    } document.writeln(`</div>`); 
     document.writeln(`</div>`); 
     document.writeln(`</div>`); 

    }
else if(mathmagic === "3"|| mathmagic ==="table"){
var table = prompt("enter any number for Tabel");   
var length = prompt("enter table length");   
document.writeln( `<div class=" table">`);

document.writeln( `<div class="table-hea"><h2>Multiplication table of  ${table}</h2>`);
document.writeln(`<div class="table-le">`)

for (var i = 1; i <= length; i++) {
     document.writeln(`<div class="table-line"> ${table} x ${i} = ${table * i} </div>`);
}
  document.writeln(`</div>`);
  document.writeln(`</div>`);
    document.writeln(`</div>`);
}
else(document.writeln(`<div class="main"> 
       <nav class="nav">
            <h2>Math Magics
                <span style="font-size: 0.9em; text-shadow: 2px 2px 2px white;">➕➗🧮🔣 </span>
            </h2>
        </nav>
        <div class="content">
           
            <h1>Learn With Us🎓📚</h1>
             <h2>❌ Oops! Something went wrong. Try again. 😢</h2>
            <p>📚 Welcome to the world of learning where fun meets knowledge. <br>let's grow, explore, and shine
                together! 🌟✏</p>

        </div>  </div>`))