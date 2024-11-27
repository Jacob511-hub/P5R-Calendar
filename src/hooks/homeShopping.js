class HomeShoppingProgram {
    constructor(date, itemA, priceA, itemB, priceB) {
        this.date = date;
        this.itemA = itemA;
        this.priceA = priceA;
        this.itemB = itemB;
        this.priceB = priceB;
    }
}

const HomeShoppingProgramItems = [
    new HomeShoppingProgram(
        "4/24",
        `Caffeine Patch x1
        \nWide Eye Drops x10
        \nHot and Sour Tea x10`,
        "¥1,680",
        `Sakura Mochi x5
        \nSpring Fruit Pack x1
        \nParty in a Can x1`,
        "¥5,980",
    ),
    new HomeShoppingProgram(
        "5/1",
        `Torimeshi Ration x3
        \nMRE Ration x2
        \nBeef Patty Ration x2`,
        "¥1,980",
        `Protein x2
        \nMoist Protein x2`,
        "¥4,980",
    ),
    new HomeShoppingProgram(
        "5/8",
        `Recover Oil x1
        \nRelax Gel x3
        \nAlert Capsule x3`,
        "¥4,600",
        `Mega Fertilizer x1
        \nGarden Energy x5`,
        "¥2,680",
    ),
];

export { HomeShoppingProgramItems };