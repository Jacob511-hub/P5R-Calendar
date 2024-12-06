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
];

export { facilities }