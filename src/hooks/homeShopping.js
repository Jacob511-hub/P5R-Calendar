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
    new HomeShoppingProgram(
        "5/15",
        `Calming Mask x2
        \nWide Eye Drops x20`,
        "¥1,680",
        `Aroma Machine x1
        \nOmni-Vitamin x1`,
        "¥14,800",
    ),
    new HomeShoppingProgram(
        "5/22",
        `Stronger Lift S x2
        \nHarder Core S x2
        \nAccu-Speed S x2`,
        "¥4,980",
        `Blowtorch x3
        \nDry Ice x3
        \nMagneto Coil x3`,
        "¥7,980",
    ),
    new HomeShoppingProgram(
        "5/29",
        `Sakura Fan x1
        \nKatana Keychain x1
        \nUji Matcha Flan x1`,
        "¥3,980",
        `Elecproof Choker x1
        \nWindproof Choker x1`,
        "¥4,980",
    ),
    new HomeShoppingProgram(
        "6/19",
        `Blaring Alarm Clock x1
        \nFace Beautifier x1`,
        "¥9,980",
        `Revivadrin x3
        \nRecov-R: 100mg x10`,
        "¥9,980",
    ),
    new HomeShoppingProgram(
        "6/26",
        `Black Rock x2
        \nBlack Robe x1`,
        "¥1,980",
        `Five-inch Nail x3
        \nStraw Doll x10`,
        "¥9,980",
    ),
    new HomeShoppingProgram(
        "7/3",
        `Imported Protein x1
        \nMoist Protein x3
        \Protein x3`,
        "¥12,800",
        `Ambergris ST x1
        \nAmbergris EN x1
        \nAmbergris LU x1`,
        "¥12,800",
    ),
    new HomeShoppingProgram(
        "8/7",
        `Lockpick x5
        \nVanish Ball x3
        \nSmokescreen x3`,
        "¥7,980",
        `Vacuum Cutter x4
        \nPsy-Wheel x4
        \nKagutsuchi Orb x4`,
        "¥8,980",
    ),
    new HomeShoppingProgram(
        "8/14",
        `Second Maid x20
        \nWater of Rebirth x20`,
        "¥2,980",
        `Glass Vase x1
        \nFlower Basket x1`,
        "¥2,980",
    ),
    new HomeShoppingProgram(
        "9/25",
        `Calming Aroma x3
        \nSmokescreen x5
        \nLockpick x5`,
        "¥8,980",
        `Phantom Wafers x5
        \nCalling Postcard x3`,
        "¥2,000",
    ),
    new HomeShoppingProgram(
        "10/2",
        `Lantern Necklace x1
        \nPumpkin Soup x5`,
        "¥14,800",
        `Baptismal Water x5
        \nExorcism Water x5`,
        "¥9,980",
    ),
    new HomeShoppingProgram(
        "11/6",
        `Physical Ointment x3
        \nMagic Ointment x3`,
        "¥19,800",
        `Salvation S x1
        \nHustle S x5`,
        "¥14,800",
    ),
    new HomeShoppingProgram(
        "11/13",
        `Ultimate Spray x1
        \nCleaning Spray x5
        \nQuick Spray x5`,
        "¥34,500",
        `Nirvana MA x1
        \nNirvana EN x1
        \nNirvana EN x1`,
        "¥29,800",
    ),
    new HomeShoppingProgram(
        "11/27",
        `Legendary Yaki-Imo x3
        \nBeni-Azuma x10`,
        "¥9,800",
        `Melon Pan x3
        \nMoon Dango x5`,
        "¥4,800",
    ),
    new HomeShoppingProgram(
        "12/11",
        `Refresh Aroma x3
        \nRecover Oil x5`,
        "¥39,800",
        `Hell Magatama x3
        \nFrost Magatama x3
        \nCyclone Magatama x3
        \nArc Magatama x3`,
        "¥16,800",
    ),
    new HomeShoppingProgram(
        "1/15",
        `Pick-Me-Up Tie x1
        \nPhysical Ointment x3
        \nMagic Ointment x3`,
        "¥44,800",
        `Imported Protein x3
        \nNirvana ST x3
        \nHustle S x5`,
        "¥39,800",
    ),
    new HomeShoppingProgram(
        "1/22",
        `Rasetsu Ofuda x3
        \nIdaten Ofuda x3
        \nKongou Ofuda x3`,
        "¥12,800",
        `Strawberry Daifuku x3
        \nUltimate Amazake x20
        \nOh! Shiruko x20`,
        "¥29,800",
    ),
    new HomeShoppingProgram(
        "1/29",
        `Salvation S x3
        \nStronger Lift S x5
        \nHarder Core S x5
        \nAccu-Speed S x5`,
        "¥49,800",
        `Royal Jelly R x2
        \nMelon Pan x3`,
        "¥69,800",
    ),
];

export { HomeShoppingProgramItems };