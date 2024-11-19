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
        "When working on a day ending in 7, additional pay and Charm can be earned by answering a question correctly.\nCorrect answer on the first attempt: ¥7,400, Charm +5\nCorrect answer on the second attempt: ¥5,800, Charm +3.\nIncorrect answers on both attempts: ¥3,500, Charm +3.",
        "At least 3 shifts required to ID 'Calling Justice for Cats'"
    ),
];

export { jobs };