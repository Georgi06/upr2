/*
Да се опише Enum, който да съдържа възможни стойности за материал. Нека те да са примерно Glass, Plastic и Ceramic.
Да се създаде интерфейс Breakable, който да изисква да се дефинира пропърти кръстено material - от тип горния енъм. Да изисква и да се
 имплементира функция, която се казва break.
Да направим три класа - CeramicMug, PlasticMug и GlassMug - всеки имплементира Breakable. В конструктора на всеки клас да се зададе
правилния материал за конкретния клас. В имплементациите на break функцията да излиза някакво съобщение, свързано с конкретния материал.

Да създадем един масив където има по едно копие от обект от тези трите класа т.е. един CeramicMug, един PlasticMug и един GlassMug.
С forEach да извикаме всичките break функции. С find да намерим само GlassMug-а. С map да създадем нов масив, където за всяка чаша
остава само материала от който е направена т.е. [Enum.Ceramic, Enum.Plastic, Enum.Glass].
 */
var materialType;
(function (materialType) {
    materialType["glass"] = "glass";
    materialType["plastic"] = "plastic";
    materialType["ceramic"] = "ceramic";
})(materialType || (materialType = {}));
var ceramicMug = /** @class */ (function () {
    function ceramicMug() {
        this["break"] = function () {
            return "Keramichna chasha";
        };
        this.material = materialType.ceramic;
    }
    return ceramicMug;
}());
var plasticMug = /** @class */ (function () {
    function plasticMug() {
        this["break"] = function () {
            return "Plastmasova chasha";
        };
        this.material = materialType.plastic;
    }
    return plasticMug;
}());
var glassMug = /** @class */ (function () {
    function glassMug() {
        this["break"] = function () {
            return "Staklena chasha";
        };
        this.material = materialType.glass;
    }
    return glassMug;
}());
var cMug = new ceramicMug();
var pMug = new plasticMug();
var gMug = new glassMug();
var mugsList = [cMug, pMug, gMug];
mugsList.forEach(function (mug) {
    mug["break"]();
});
// @ts-ignore
var materialGlass = mugsList.find(function (mug) { return mug.material === materialType.glass; });
var materialAll = mugsList.map(function (mug) { return mug.material; });
console.log("Chashite: ", mugsList);
console.log("Stukleni chashi", materialGlass);
console.log("Materialite: ", materialAll);
