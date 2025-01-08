import Fool from '../assets/tarot/Fool.png';
import Magician from '../assets/tarot/Magician.png';
import Priestess from '../assets/tarot/Priestess.png';
import Empress from '../assets/tarot/Empress.png';
import Emperor from '../assets/tarot/Emperor.png';
import Hierophant from '../assets/tarot/Hierophant.png';
import Lovers from '../assets/tarot/Lovers.png';
import Chariot from '../assets/tarot/Chariot.png';
import Justice from '../assets/tarot/Justice.png';
import Hermit from '../assets/tarot/Hermit.png';
import Fortune from '../assets/tarot/Fortune.png';
import Strength from '../assets/tarot/Strength.png';
import HangedMan from '../assets/tarot/HangedMan.png';
import Death from '../assets/tarot/Death.png';
import Temperance from '../assets/tarot/Temperance.png';
import Devil from '../assets/tarot/Devil.png';
import Tower from '../assets/tarot/Tower.png';
import Star from '../assets/tarot/Star.png';
import Moon from '../assets/tarot/Moon.png';
import Sun from '../assets/tarot/Sun.png';
import Judgement from '../assets/tarot/Judgement.png';
import Faith from '../assets/tarot/Faith.png';
import Councillor from '../assets/tarot/Councillor.png';

class Confidant {
    constructor(name, tarot, rank) {
        this.name = name;
        this.tarot = tarot;
        this.rank = rank;
    }
}

const confidants = [
    new Confidant (
        "Fool",
        Fool,
        1,
    ),
    new Confidant (
        "Magician",
        Magician,
        1,
    ),
    new Confidant (
        "Priestess",
        Priestess,
        1,
    ),
    new Confidant (
        "Empress",
        Empress,
        1,
    ),
    new Confidant (
        "Emperor",
        Emperor,
        1,
    ),
    new Confidant (
        "Hierophant",
        Hierophant,
        1,
    ),
    new Confidant (
        "Lovers",
        Lovers,
        1,
    ),
    new Confidant (
        "Chariot",
        Chariot,
        1,
    ),
    new Confidant (
        "Justice",
        Justice,
        1,
    ),
    new Confidant (
        "Hermit",
        Hermit,
        1,
    ),
    new Confidant (
        "Fortune",
        Fortune,
        1,
    ),
    new Confidant (
        "Strength",
        Strength,
        1,
    ),
    new Confidant (
        "Hanged Man",
        HangedMan,
        1,
    ),
    new Confidant (
        "Death",
        Death,
        1,
    ),
    new Confidant (
        "Temperance",
        Temperance,
        1,
    ),
    new Confidant (
        "Devil",
        Devil,
        1,
    ),
    new Confidant (
        "Tower",
        Tower,
        1,
    ),
    new Confidant (
        "Star",
        Star,
        1,
    ),
    new Confidant (
        "Moon",
        Moon,
        1,
    ),
    new Confidant (
        "Sun",
        Sun,
        1,
    ),
    new Confidant (
        "Judgement",
        Judgement,
        1,
    ),
    new Confidant (
        "Faith",
        Faith,
        1,
    ),
    new Confidant (
        "Councillor",
        Councillor,
        1,
    ),
];

export { confidants };