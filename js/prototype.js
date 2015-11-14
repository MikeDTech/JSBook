function Car(make, model, color)
{
    //Three properties

    this.make = make;
    this.model = model;
    this.color = color;
}

function init() {
    var panel = document.getElementById("panel");
    var myCar = new Car("Ford", "Focus", "Red ");

    //extend object properties using "prototype"
    Car.prototype.doors = 4;

    for (property in myCar) {
        if (myCar[property] !== "")
        {
            panel.innerHTML +=
                (property + ": " + myCar[property] + "<br>");
        }
    }
    panel.innerHTML += "<hr>";

    myCar.make = "Dodge";
    myCar.model = "Viper";
    myCar.color = "Black";
    myCar.doors = 2;

    for (property in myCar) {
        if (myCar[property] !== "") {
            panel.innerHTML +=
                (property + ": " + myCar[property] + "<br>");
        }
    }
    panel.innerHTML += "<hr>";

}
document.addEventListener("DOMContentLoaded", init, false);