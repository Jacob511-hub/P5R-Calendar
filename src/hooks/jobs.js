function Job(name, requirements, pay, stats, bonus, unlocks) {
    this.name = name;
    this.requirements = requirements;
    this.pay = pay;
    this.stats = stats;
    this.bonus = bonus;
    this.unlocks = unlocks;
}

const jobs = [
    new Job(
        "Triple Seven Convenience Store",
        "None",
        "¥3,500",
        "Charm +3",
        `When working on a day ending in 7, additional pay and Charm can be earned by answering a question correctly.
        \nCorrect answer on the first attempt: ¥7,400, Charm +5
        \nCorrect answer on the second attempt: ¥5,800, Charm +3
        \nIncorrect answers on both attempts: ¥3,500, Charm +3`,
        "At least 3 shifts required to ID 'Calling Justice for Cats'"
    ),
    new Job(
        "Flower Shop Rafflesia",
        "Charm Rank 2 (Head-turning)",
        "¥3,200",
        "Kindness +3",
        `On your second shift and then every Wednesday and Saturday afterwards, you will be asked to arrange a bouquet of 3 flowers. The number of correctly chosen flowers changes your pay and Kindness earned.
        \n3 correct flowers: ¥7,800, Kindness +5
        \n2 correct flowers: ¥3,200, Kindness +3
        \n1 or 0 correct flowers: ¥2,400, Kindness +2`,
        "At least 3 shifts required to ID 'Who's Been Assaulting People'"
    ),
    new Job(
        "Ore no Beko Beef Bowl Shop",
        "Proficiency Rank 2 (Decent)",
        "¥3,600",
        "Proficiency +3",
        `Every second shift, you will be asked to memorize 4 orders. The amount you remember correctly changes your pay and Proficiency earned.
        \n4 correct orders: ¥4,800, Proficiency +5
        \n3 correct orders: ¥3,600, Proficiency +3
        \n2 or fewer correct orders: ¥2,600, Proficiency +2`,
        "At least 2 shifts required to unlock the Sun Confidant"
    ),
    new Job(
        "Crossroads Bar",
        `Devil Confidant Started
        \nKindness Rank 3 (Empathetic)
        \nProficiency Rank 3 (Skilled)`,
        "¥7,200",
        "Charm +3",
        `On Sundays, you will instead receive ¥12,000 and can talk to one of four patrons to receive additional stat points.
        \nScary-looking Man: Guts +2
        \nFemale Office Worker: Proficiency +2
        \nDowncast Man: Kindness +2
        \nWoman in Evening Dress: Charm +2`,
        "At least 2 shifts required to ID 'We Aren't Just Your Slaves'"
    ),
];

export { jobs };