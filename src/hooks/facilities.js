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
    new Facility(
        "Big Bang Burger",
        "Any",
        [
            "Level 1: Knowledge +1, Charm +1, Guts +1, Proficiency +1",
            "Level 2: Knowledge +2, Charm +2, Guts +2, Proficiency +2",
            "Level 3: Knowledge +3, Charm +3, Guts +3, Proficiency +3",
            "Beating Level 1 requires: Rank 2 Knowledge, Rank 2 Charm, Rank 2 Guts, Rank 2 Proficiency",
            "Beating Level 2 requires: Rank 3 Knowledge, Rank 3 Charm, Rank 3 Guts, Rank 3 Proficiency",
            "Beating Level 3 requires: Rank 4 Knowledge, Rank 4 Charm, Rank 4 Guts, Rank 4 Proficiency",
        ],
        ["Knowledge", "Charm", "Guts", "Proficiency"]
    ),
    new Facility(
        "Diner",
        "Any",
        [
            "Knowledge +2",
            "Rainy Days: Additional Knowledge +2",
            "Order Surprise Sando: Additional Guts +2 (¥700)",
            "Order Nostalgic Steak: Additional Kindness +2 (¥1,100)",
            "Order Frui-Tea: Additional Charm +2 (¥800)",
            "Order Totem Pole: Additional Proficiency +2 (¥900)",
        ],
        ["Knowledge", "Charm", "Guts", "Proficiency", "Kindness"]
    ),
    new Facility(
        "Shujin Library",
        "After School",
        [
            "Knowledge +2, Guts +2",
            "From 5/6 onwards: Knowledge +3",
        ],
        ["Knowledge", "Guts"]
    ),
    new Facility(
        "Shinjuku Cinema",
        "Any",
        [
            "STATS ONLY GAINED ON FIRST VIEWING OR HANGOUTS",
            "Like a Dragon: Guts +5 (June, July)",
            "Saraemon: Knowledge +5 (August, September)",
            "Duh-vengers: Kindness +5 (October)",
            "Pach-Saw: Guts +5 (November, December)",
            "Bite Club: Guts +5 (January)",
        ],
        ["Knowledge", "Guts", "Kindness"]
    ),
    new Facility(
        "Yongen-Jaya Cinema",
        "Any",
        [
            "STATS ONLY GAINED ON FIRST VIEWING OR HANGOUTS",
            "Showtime Redemption: Charm +5 (September)",
            "Back to the Ninja: Knowledge +5 (October)",
            "Over the Pigeon's Nest: Kindness +5 (November)",
            "Merry Christmess: Guts +5 (December)",
            "March of the Lambs: Proficiency +5 (January)",
            "The Goodfather: Kindness +5 (February)",
        ],
        ["Knowledge", "Charm", "Guts", "Proficiency", "Kindness"]
    ),
];

export { facilities }