import April from '../assets/months/April.png';
import May from '../assets/months/May.png';
import June from '../assets/months/June.png';
import July from '../assets/months/July.png';
import August from '../assets/months/August.png';
import September from '../assets/months/September.png';
import October from '../assets/months/October.png';
import November from '../assets/months/November.png';
import December from '../assets/months/December.png';
import January from '../assets/months/January.png';
import February from '../assets/months/February.png';
import March from '../assets/months/March.png';

export const rows = 6;
export const cols = 7;

export const tileSkewPattern = [
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
];

export const shadowSkewPattern = [
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
];

export const weekdays = [
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
];

export const monthHeader = [
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
    January,
    February,
    March,
];

export const dateKeys = [
    [ //April
        ["none", "none", "none", "none", "none", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "deadline", "deadline"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //May
        ["deadline", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "free", "eveningOnly"],
        ["eveningOnly", "free", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["eveningOnly", "storyAll", "eveningOnly", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "eveningOnly", "free", "none", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //June
        ["none", "none", "none", "free", "deadline", "deadline", "deadline"],
        ["eveningOnly", "free", "free", "free", "eveningOnly", "eveningOnly", "storyAll"],
        ["free", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "free"],
        ["eveningOnly", "eveningOnly", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //July
        ["none", "none", "none", "none", "none", "free", "free"],
        ["free", "free", "free", "deadline", "deadline", "deadline", "eveningOnly"],
        ["storyAll", "eveningOnly", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["eveningOnly", "storyAll", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "free", "free", "free", "free", "free"],
        ["free", "none", "none", "none", "none", "none", "none"],
    ],
    [ //August
        ["none", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "deadline", "deadline", "deadline"],
        ["storyAll", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly"],
        ["eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //September
        ["none", "none", "none", "none", "eveningOnly", "free", "eveningOnly"],
        ["free", "free", "afterSchoolOnly", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["eveningOnly", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //October
        ["none", "none", "none", "none", "none", "none", "free"],
        ["free", "storyAll", "free", "free", "free", "free", "deadline"],
        ["deadline", "deadline", "storyAll", "storyAll", "storyAll", "free", "free"],
        ["free", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "eveningOnly"],
        ["eveningOnly", "eveningOnly", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["free", "free", "none", "none", "none", "none", "none"],
    ],
    [ //November
        ["none", "none", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "deadline", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "free", "free"],
        ["free", "free", "free", "free", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //December
        ["none", "none", "none", "none", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "deadline", "deadline"],
        ["storyAll", "eveningOnly", "storyAll", "storyAll", "free", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //January
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "none", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //February
        ["none", "none", "none", "free", "deadline", "finale", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "none", "none", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //March
        ["none", "none", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
]

export const dateNumbers = [
    [ //April
        ["", "", "", "", "", "1", "2"],
        ["3", "4", "5", "6", "7", "8", "9"],
        ["10", "11", "12", "13", "14", "15", "16"],
        ["17", "18", "19", "20", "21", "22", "23"],
        ["24", "25", "26", "27", "28", "29", "30"],
        ["", "", "", "", "", "", ""],
    ],
    [ //May
        ["1", "2", "3", "4", "5", "6", "7"],
        ["8", "9", "10", "11", "12", "13", "14"],
        ["15", "16", "17", "18", "19", "20", "21"],
        ["22", "23", "24", "25", "26", "27", "28"],
        ["29", "30", "31", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //June
        ["", "", "", "1", "2", "3", "4"],
        ["5", "6", "7", "8", "9", "10", "11"],
        ["12", "13", "14", "15", "16", "17", "18"],
        ["19", "20", "21", "22", "23", "24", "25"],
        ["26", "27", "28", "29", "30", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //July
        ["", "", "", "", "", "1", "2"],
        ["3", "4", "5", "6", "7", "8", "9"],
        ["10", "11", "12", "13", "14", "15", "16"],
        ["17", "18", "19", "20", "21", "22", "23"],
        ["24", "25", "26", "27", "28", "29", "30"],
        ["31", "", "", "", "", "", ""],
    ],
    [ //August
        ["", "1", "2", "3", "4", "5", "6"],
        ["7", "8", "9", "10", "11", "12", "13"],
        ["14", "15", "16", "17", "18", "19", "20"],
        ["21", "22", "23", "24", "25", "26", "27"],
        ["28", "29", "30", "31", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //September
        ["", "", "", "", "1", "2", "3"],
        ["4", "5", "6", "7", "8", "9", "10"],
        ["11", "12", "13", "14", "15", "16", "17"],
        ["18", "19", "20", "21", "22", "23", "24"],
        ["25", "26", "27", "28", "29", "30", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //October
        ["", "", "", "", "", "", "1"],
        ["2", "3", "4", "5", "6", "7", "8"],
        ["9", "10", "11", "12", "13", "14", "15"],
        ["16", "17", "18", "19", "20", "21", "22"],
        ["23", "24", "25", "26", "27", "28", "29"],
        ["30", "31", "", "", "", "", ""],
    ],
    [ //November
        ["", "", "1", "2", "3", "4", "5"],
        ["6", "7", "8", "9", "10", "11", "12"],
        ["13", "14", "15", "16", "17", "18", "19"],
        ["20", "21", "22", "23", "24", "25", "26"],
        ["27", "28", "29", "30", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //December
        ["", "", "", "", "1", "2", "3"],
        ["4", "5", "6", "7", "8", "9", "10"],
        ["11", "12", "13", "14", "15", "16", "17"],
        ["18", "19", "20", "21", "22", "23", "24"],
        ["25", "26", "27", "28", "29", "30", "31"],
        ["", "", "", "", "", "", ""],
    ],
    [ //January
        ["1", "2", "3", "4", "5", "6", "7"],
        ["8", "9", "10", "11", "12", "13", "14"],
        ["15", "16", "17", "18", "19", "20", "21"],
        ["22", "23", "24", "25", "26", "27", "28"],
        ["29", "30", "31", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //February
        ["", "", "", "1", "2", "3", "4"],
        ["5", "6", "7", "8", "9", "10", "11"],
        ["12", "13", "14", "15", "16", "17", "18"],
        ["19", "20", "21", "22", "23", "24", "25"],
        ["26", "27", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //March
        ["", "", "1", "2", "3", "4", "5"],
        ["6", "7", "8", "9", "10", "11", "12"],
        ["13", "14", "15", "16", "17", "18", "19"],
        ["20", "21", "22", "23", "24", "25", "26"],
        ["27", "28", "29", "30", "31", "", ""],
        ["", "", "", "", "", "", ""],
    ],
]