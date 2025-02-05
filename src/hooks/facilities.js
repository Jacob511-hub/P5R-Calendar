function Facility(name, availability, effects, stat) {
    this.name = name;
    this.availability = availability;
    this.effects = effects;
    this.stat = stat;
}

const facilities = [
    new Facility(
        "Bathhouse",
        "Evening",
        [
            "Charm +3",
            "Sundays: Charm +5",
            "Rainy/Snowy/Cold Wave (Excluding Sundays):",
            "Don't prolong stay: Charm +3",
            "Prolong stay: Charm +5 OR Guts +2",
            "Old Man present: Charm +3, Guts +2",
        ],
        ["Charm", "Guts"]
    ),
    new Facility(
        "Maid Café",
        "Any",
        [
            "No mistake: Charm +3",
            "Mistake, forgive maid: Charm +3, Kindness +2",
            "Mistake, don't forgive maid: Charm +3, Guts +2",
            "Earn 20 stamps: Charm +2",
            "Saturdays: Earn +4 stamps",
            "Relaxing Coffee: ¥1,000, 1 stamp, 50% Mistake",
            "Oo-hot Tea: ¥2,000, 2 stamp, 60% Mistake",
            "Love★Pancake: ¥3,000, 3 stamp, 70% Mistake",
            "Sincere Omelette: ¥5,000, 5 stamp, 90% Mistake",
        ],
        ["Charm", "Kindness", "Guts"]
    ),
];

export { facilities }