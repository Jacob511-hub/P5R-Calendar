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
      "A retro boxing game. Playing could give you the charm of a challenger.",
      "¥0 (Comes with the Famidrive, which is ¥5,000)",
      "Yongen-Jaya: Yumenoshima Second-hand Shop",
      "June 5th"
  ),
];

export { books, dvds, games };