// JS-1  74 skaidre 
// 1 ----------------------------------------------------------------------------------------------------------------------
// priskiriau kintamajam string reiksme ir ja pakeiciau, ats consoleje
console.log("Uzduotis JS-1 1");
let panda = 'durna';
    panda = 'kartais_durna';

console.log(panda);
console.log("-------------------------------------");

// 2 ----------------------------------------------------------------------------------------------------------------------
// priskiriau kintamajam number reiksme ir ja padidinau vienu du kartus naudodama ++ operatoriu
console.log("Uzduotis JS-1 2");
let pandaDidinam = 28;

console.log("Originalus numeris: ",pandaDidinam);
console.log("Padidintas numeris 1: ",++pandaDidinam);
console.log("Padidintas numeris 2: ",++pandaDidinam);
console.log("-------------------------------------");

// 3 ----------------------------------------------------------------------------------------------------------------------
// priskiriau kintamajam number reiksme ir ja sumazinau vienu tris kartus naudodama -- operatoriu
console.log("Uzduotis JS-1 3");
let pandaMazeja = 69;
console.log("Originalus numeris: ",pandaMazeja);
console.log("Sumazintas numeris 1: ",--pandaMazeja);
console.log("Sumazintas numeris 2: ",--pandaMazeja);
console.log("Sumazintas numeris 3: ",--pandaMazeja);
console.log("-------------------------------------");

// 4 ----------------------------------------------------------------------------------------------------------------------
// priskiriau kintamajam string reiksme
let pandaStringas = '8';
// kintamajam pandaStringas reiksme pakeiciau i number su mul metodu (daugyba is 1)
let pandaStringasMul = pandaStringas * 1;
// kintamajam pandaStringas reiksme pakeiciau i number su Number funkcija
let pandaStringasNumber = Number(pandaStringas);
// kintamajam pandaStringas reiksme pakeiciau i number su unary plus operater metodu (pries string kintamaji prirasom +)
let pandaStringasPlius = +pandaStringas;

// pasiziurim rezultatus consoleje
console.log("Keiciam stringa mul metodu: ", pandaStringasMul, 
            'ar kint.tipas number: ', Number.isInteger(pandaStringasMul));
console.log("Keiciam stringa Number funkcija: ", pandaStringasNumber, 
            'ar kint.tipas number: ', Number.isInteger(pandaStringasNumber));
console.log("Keiciam stringa unary plus operater: ", pandaStringasPlius, 
            'ar kint.tipas number: ', Number.isInteger(pandaStringasPlius));
console.log("-------------------------------------");

// 5 ----------------------------------------------------------------------------------------------------------------------
let pandaMath = 20;
let pandaMathSudetis = 40 + pandaMath;
//number tipo kintamaji sudeties metodu gaunam rezult (kintamojo value+kito kintamojo value)
console.log("Sudedam: ", pandaMathSudetis)

// JS-1  75 skaidre
// 1 ir 2 -----------------------------------------------------------------------------------------------------------------
// apsirasiau 2 zmoniu ugi ir svori ir apskaiciavau KMI pagal formule
let petrasUgis = 1.77;
let petrasSvoris = 90;
// formule KMI skaiciuoti, ugis/svoris pakeltas kvadratu (Math.pow(skaicius, laipsnis))
// Math = daro matematika .pow - pakelia skaiciu laipsniu
let petrasKMI = petrasSvoris / Math.pow(petrasUgis, 2);
console.log("Petro KMI: ",petrasKMI);

let jonasUgis = 1.80;
let jonasSvoris = 120;
let jonasKMI = jonasSvoris / Math.pow(jonasUgis, 2);
console.log("Jono KMI: ",jonasKMI);

// palyginam is ju kurio KMI yra didesnis
if (petrasKMI > jonasKMI) {
    console.log("Petro KMI didesnis uz Jono.");
} else {
    console.log("Jono KMI didesnis uz Petro.");
}
console.log("-------------------------------------");

// 3  ----------------------------------------------------------------------------------------------------------------------
// Pitagoro teorema
let a = 4;
let b = 6;
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Trikampio izambine: ", c);
console.log("-------------------------------------");

// 4  ----------------------------------------------------------------------------------------------------------------------
// Paversti temperatura is Celsijaus i Farenheita
let celsius = 20;
let farenheitas = (celsius * 9 / 5) + 32;

console.log("Temp Farenheitu: ", farenheitas);
console.log("-------------------------------------");