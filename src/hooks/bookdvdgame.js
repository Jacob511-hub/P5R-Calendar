function BookDVDGame(name, chapters, effect, description, price, location, available) {
    this.name = name;
    this.chapters = chapters;
    this.effect = effect;
    this.description = description;
    this.price = price;
    this.location = location;
    this.available = available;
}

const books = [
  new BookDVDGame(
      "The Great Thief",
      "2",
      "Knowledge +5",
      "A novel based on Arsène. His clever tricks makes you knowledgeable.",
      "¥0",
      "Shujin Academy Library",
      "4/18"
  ),
  new BookDVDGame(
      "Pirate Legend",
      "2",
      "Guts +5",
      "The tale of the fearless Captain Kidd. Reading this would build guts.",
      "¥0",
      "Shujin Academy Library",
      "4/18"
  ),
];

const dvds = [
  new BookDVDGame(
      "Bubbly Hills, 90210",
      "2",
      "Charm +3 (Occurs both times)",
      "A realistic teen drama. Watching their romances makes you charming.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "4/18"
  ),
];

const games = [
  new BookDVDGame(
      "Star Forneus",
      "3",
      "Guts +5",
      "A retro space shooting game. Playing could give you guts.",
      "¥0 (Comes with the Famidrive, which is ¥5,000)",
      "Yongen-Jaya: Yumenoshima Second-hand Shop",
      "6/5"
  ),
  new BookDVDGame(
      "Punch Ouch",
      "3",
      "Charm +5",
      "A retro boxing game. Playing could give you the charm of a challenger.",
      "¥5,300",
      "Akihabara: Retro Game Shop Super Baron",
      "8/31"
  ),
  new BookDVDGame(
      "Train of Life",
      "3",
      "Kindness +5",
      "A retro board game. Playing could expand your kindness.",
      "¥5,600",
      "Akihabara: Retro Game Shop Super Baron",
      "8/31"
  ),
  new BookDVDGame(
      "Power Intuition",
      "3",
      "Guts +5",
      "A retro fighting game. Playing could give you guts.",
      "¥5,500",
      "Akihabara: Retro Game Shop Super Baron",
      "10/1"
  ),
  new BookDVDGame(
      "Gambla Goemon",
      "2",
      "Charm +5",
      "A retro gambling game. Playing could build the charm not to give up.",
      "¥5,200",
      "Yongen-Jaya: Yumenoshima Second-hand Shop",
      "7/26"
  ),
  new BookDVDGame(
      "Golfer Sarutahiko",
      "3",
      "Proficiency +5",
      "A retro golf game. Playing could make you more proficient.",
      "¥3,200",
      "Akihabara: Retro Game Shop Super Baron",
      "10/1"
  ),
];

export { books, dvds, games };