class ClassroomQuestion {
    constructor(date, answer) {
        this.date = date;
        this.answer = answer;
    }
}

const ClassroomQuestions = [
    new ClassroomQuestion(
        "4/12",
        `Villains`,
    ),
    new ClassroomQuestion(
        "4/19",
        `They're the same`,
    ),
    new ClassroomQuestion(
        "4/23",
        `All of them`,
    ),
];

const ExamAnswers = [
    new ClassroomQuestion(
        "5/11",
        `Minamoto no Yoshitsune
        \nMinamoto no Yoritomo
        \nYoritomo won
        \nThe weak`,
    ),
    new ClassroomQuestion(
        "5/12",
        `Cognition
        \nBoth`,
    ),
    new ClassroomQuestion(
        "5/13",
        `The Devil's Dictionary
        \nFemme Fatale`,
    ),
    new ClassroomQuestion(
        "7/13",
        `64 degrees
        \nZhuge Liang
        \nBarbarians' heads
        \nTo offer them instead of heads`,
    ),
    new ClassroomQuestion(
        "7/14",
        `Red King Crab (Paralithodes)
        \nIt caused confusion in the economy`,
    ),
    new ClassroomQuestion(
        "7/15",
        `Raining cats and dogs
        \nDemon guts`,
    ),
    new ClassroomQuestion(
        "10/17",
        `32 surfaces
        \nIt used to be one color
        \nBlack and white picture`,
    ),
    new ClassroomQuestion(
        "10/18",
        `Charles-Henri Sanson
        \nIt's a hereditary profession`,
    ),
    new ClassroomQuestion(
        "10/19",
        `Slave labor
        \n3 bees in all of Europe`,
    ),
    new ClassroomQuestion(
        "12/20",
        `D
        \nOver one billion yen
        \nHaving his head displayed
        \nA performance`,
    ),
    new ClassroomQuestion(
        "12/21",
        `Hearts
        \nAttend`,
    ),
    new ClassroomQuestion(
        "12/22",
        `Japan
        \nDreadnought`,
    ),
]

export { ClassroomQuestions, ExamAnswers };