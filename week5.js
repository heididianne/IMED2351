const petNames = [ "Tinkerbell", "Oliver", "Lilo", "Heidi", "Moana", "Brainy", "Flynn"];

for(name of petNames ) {
    if (name == 'Heidi') { continue; }
    console.log (name);
} // For Loop

let load = 50;

while(load < 75){
    console.log('Buferring...');
    load ++;
} // While Loop

function change() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 250) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

