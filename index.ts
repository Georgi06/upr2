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

enum  materialType{
    glass ="glass",
    plastic ="plastic",
    ceramic ="ceramic"
}

interface breakable{
    material: materialType;
    break: () => {};
}

class ceramicMug implements breakable{

    material: materialType;
    constructor() {
        this.material=materialType.ceramic
    }
    break = () => {
        return "Keramichna chasha";
    };
}

class plasticMug implements  breakable{
    material: materialType;
    break = () => {
        return "Plastmasova chasha";
    };
    constructor() {
        this.material=materialType.plastic;
    }
}

class glassMug implements  breakable{
    material: materialType;
    break = () => {
        return "Staklena chasha";
    };
    constructor() {
        this.material=materialType.glass;
    }
}

let cMug = new ceramicMug();
let pMug = new plasticMug();
let gMug = new glassMug();

let mugsList = [cMug,pMug,gMug];

mugsList.forEach((mug) =>{
    mug.break();
})

// @ts-ignore
let materialGlass = mugsList.find((mug)=>mug.material===materialType.glass)

let materialAll = mugsList.map((mug)=>mug.material)

console.log("Chashite: ", mugsList);
console.log("Stukleni chashi", materialGlass)
console.log("Materialite: ", materialAll);
