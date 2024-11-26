class LeblancActivity {
    constructor(name, available, effects) {
        this.name = name;
        this.available = available;
        this.effects = effects;
    }
}

const leblancActivities = [
    new LeblancActivity(
        "Coffee",
        "Evening, Hierophant Rank 2",
        [
            "Brew 2 Leblanc Coffee, +2 Charm (Hierophant Rank 2)",
            "Brew 2 Master Coffee, +2 Charm (Hierophant Rank 6)",
        ]
    ),
    new LeblancActivity(
        "Fridge",
        "Evening (Sunday, Monday, Wednesday, Friday)",
        [
            "Cook 2 Decent Curry, +2 Guts (Hierophant Rank 4)",
            "Cook 2 Leblanc Curry, +2 Guts (Hierophant Rank 9)",
            "Cook 2 Master Curry, +2 Guts (Hierophant Rank 10)",
            "Food items can be obtained from the fridge on specific dates",
            "Sandwich (4/21, 7/28)",
            "Fruit Danish (5/26, 8/16)",
            "Moist Katsu Bun (6/28, 8/4, 9/20, 11/15, 12/10)",
            "Legendary Yaki-Imo (10/15)",
        ]
    ),
    new LeblancActivity(
        "Counter",
        "Evening",
        [
            "Study, +3 Knowledge",
            "Read a book",
        ]
    ),
    new LeblancActivity(
        "Bathroom",
        "Evening",
        [
            "Check Social Stat progress (Does not pass time)",
            "Clean Leblanc, +2 Kindness (Hierophant progress if present)",
        ]
    ),
    new LeblancActivity(
        "Phone",
        "Evening, ¥5,000 (¥0 at Temperance Rank 9)",
        [
            "Make 1 Leblanc Coffee (Hierophant Rank 2, Temperance Rank 3, Does not pass time)",
            "Make 1 Master Coffee (Hierophant Rank 6, Temperance Rank 3, Does not pass time)",
            "Cook 1 Decent Curry (Hierophant Rank 4, Temperance Rank 6, Does not pass time)",
            "Cook 1 Leblanc Curry (Hierophant Rank 9, Temperance Rank 6, Does not pass time)",
            "Cook 1 Master Curry (Hierophant Rank 10, Temperance Rank 6, Does not pass time)",
            "Make Infiltration Tools (Temperance Rank 6, Does not pass time)"
        ]
    ),
    new LeblancActivity(
        "Café TV",
        "Thursdays",
        [
            "Answer quiz show question correctly, +2 Knowledge (Does not pass time)",
        ]
    ),
    new LeblancActivity(
        "Crossword",
        "Certain days",
        [
            "Complete crossword puzzle, +2 Knowledge (Does not pass time)",
        ]
    ),
    new LeblancActivity(
        "Attic TV",
        "Evening",
        [
            "Watch DVD",
            "Play video game (Requires Famidrive)",
        ]
    ),
];

export { leblancActivities };