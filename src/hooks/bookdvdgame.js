function BookDVDGame(name, chapters, effect, description, price, location, available, stat, checked) {
    this.name = name;
    this.chapters = chapters;
    this.effect = effect;
    this.description = description;
    this.price = price;
    this.location = location;
    this.available = available;
    this.stat = stat;
    this.checked = checked;
}

const books = [
  new BookDVDGame(
      "The Great Thief",
      "2",
      "Knowledge +5",
      "A novel based on Arsène. His clever tricks makes you knowledgeable.",
      "¥0",
      "Shujin Academy Library",
      "4/18",
      ["Knowledge"],
      false
  ),
  new BookDVDGame(
      "Pirate Legend",
      "2",
      "Guts +5",
      "The tale of the fearless Captain Kidd. Reading this would build guts.",
      "¥0",
      "Shujin Academy Library",
      "4/18",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Zorro, the Outlaw",
      "2",
      "Kindness +5",
      "The story about Zorro, the gentleman bandit. Read to be a kind gentleman.",
      "¥0",
      "Shujin Academy Library",
      "4/18",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "The Gallant Rogue",
      "2",
      "Guts +5",
      "Ishikawa Goemon's tale. Experience the guts to defy those in power.",
      "¥0",
      "Shujin Academy Library",
      "5/19",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "The Illusory Popess",
      "2",
      "Kindness +5",
      "The dynamic biography of Johanna. Awakens you to kindness.",
      "¥0",
      "Shujin Academy Library",
      "6/20",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Cry of Cthulhu",
      "2",
      "Guts +5",
      "A book of fictitious mythos. The macabre world would help build guts.",
      "¥0",
      "Shujin Academy Library",
      "9/2",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Woman in the Dark",
      "2",
      "Proficiency +5",
      "The story of Milady. Her changing faces helps make you proficient.",
      "¥0",
      "Shujin Academy Library",
      "9/19",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "Dressed in Ashes",
      "2",
      "Charm +5",
      "A girl facing unfortunate circumstances. Learn about leading a charmed life.",
      "¥0",
      "Shujin Academy Library",
      "10/3",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "The Hero with a Bow",
      "2",
      "Guts +5",
      "The daring tales of Robin Hood. Reading this could help build your guts.",
      "¥0",
      "Shujin Academy Library",
      "10/30",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Musty Pages",
      "1",
      "Unlocks Jinbocho",
      "A guide that lets you feel the atmosphere of the antique book town.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "9/1",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Wise Men's Words",
      "2",
      "Knowledge +5",
      "A book of quotes by great philosophers. Read to enrich your knowledge.",
      "¥700",
      "Shibuya Central Street: Taiheido Bookstore",
      "6/1",
      ["Knowledge"],
      false
  ),
  new BookDVDGame(
      "Ghost Encounters",
      "2",
      "Guts +5",
      "Hair-raising ghost stories. Reading this will surely steel your guts.",
      "¥700",
      "Shibuya Central Street: Taiheido Bookstore",
      "7/1",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Tidying the Heart",
      "2",
      "Proficiency +5",
      "A best-seller on cleaning. The author's proficiency is worth studying.",
      "¥700",
      "Shibuya Central Street: Taiheido Bookstore",
      "4/18",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "Buchiko's Story",
      "2",
      "Kindness +5",
      "A heartwarming tale of a dog and his master. It is filled with kindness.",
      "¥700",
      "Shibuya Central Street: Taiheido Bookstore",
      "4/18",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Flowerpedia",
      "1",
      "Unlocks flower shop job hints",
      "The essential compendium for anyone in the flower industry.",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "After working at Rafflesia Flower Shop at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Master Swordsman",
      "3",
      "Guts +7",
      "A book chronicling a great swordsman's life. Find the guts to face death.",
      "¥8,000",
      "Jinbocho: Nagiuri Bookstore",
      "After unlocking Jinbocho",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Call Me Chief",
      "3",
      "Kindness +7",
      "Biography of a beloved leader. His warm character shows much kindness.",
      "¥8,000",
      "Jinbocho: Nagiuri Bookstore",
      "After reading Master Swordsman",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Reckless Casanova",
      "3",
      "Charm +7",
      "A book about the romantic life of a ladies man. Learn from his charm.",
      "¥8,000",
      "Jinbocho: Nagiuri Bookstore",
      "After reading Master Swordsman",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "Heroic Revelations",
      "3",
      "Knowledge +7",
      "The epic of a tireless seeker of wisdom. May impart knowledge upon the reader.",
      "¥8,000",
      "Jinbocho: Nagiuri Bookstore",
      "After reading Master Swordsman",
      ["Knowledge"],
      false
  ),
  new BookDVDGame(
      "The Art of Automata",
      "3",
      "Proficiency +7",
      "The passion involved in being an automata technician. May improve one's proficiency.",
      "¥8,000",
      "Jinbocho: Nagiuri Bookstore",
      "After reading Master Swordsman",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "Knowing the Heart",
      "1",
      "Technical combinations are expanded",
      "Old book about the fragility of the human heart. Expands Technical conditions.",
      "¥12,000",
      "Jinbocho: Nagiuri Bookstore",
      "After reading all other books from Nagiuri Bookstore",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Shitamachi Reborn",
      "1",
      "Unlocks Asakusa",
      "A book on the old district reborn thanks to the new Tokyo Sky Tower.",
      "¥0",
      "Complete the Mementos Request 'Who's Muscling in Yongen-Jaya?'",
      "8/30",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Tokyo Shrines",
      "1",
      "Unlocks Meiji Shrine",
      "A photo guidebook of the shrines hidden in the big city.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "9/1",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Fishpond Spotter",
      "1",
      "Unlocks Ichigaya",
      "A guidebook for beginners on the popular fishing ponds.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "7/17",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Yoncha Walker 04",
      "2",
      "Unlocks Yongen-Jaya shortcuts",
      "A magazine compiling information about Yongen-Jaya.",
      "¥0",
      "Found after cleaning your room",
      "4/18",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Social Thought",
      "2",
      "Knowledge +5",
      "Broad compilation on modern social thought. May boost knowledge",
      "¥0 (Requires Rank 2 Knowledge to read)",
      "Found after cleaning your room",
      "4/18",
      ["Knowledge"],
      false
  ),
  new BookDVDGame(
      "Night Skies",
      "1",
      "Unlocks Ikebukuro",
      "A star-gazing guidebook that has a special on planetariums.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "9/1",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Batting Science",
      "1",
      "Unlocks Third Eye while batting",
      "A thorough analysis of batting. Could help with your baseball skills.",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "Gone to the Batting Cages at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Essence of Fishing",
      "1",
      "Unlocks Third Eye while fishing",
      "A book explaining the tricks of fishing. Now you can be a master!",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "Gone fishing at Ichigaya at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Speed Reader",
      "1",
      "Read twice as fast",
      "Easy-to-learn speed-reading techniques. Increases your reading speed.",
      "¥0",
      "Shujin Academy Library",
      "7/1",
      ["None"],
      false
  ),
  new BookDVDGame(
      "The Craft of Cinema",
      "1",
      "Increases stat points gained from watching DVDs and films",
      "A comprehensive guide on increasing emotional depth on camera. For film buffs.",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "Watched a movie or DVD at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Learn Pro Darts",
      "1",
      "Unlocks Third Eye while playing darts",
      "Techniques written by a professional darts player.",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "Played darts at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "ABCs of Crafting",
      "1",
      "Doubles the maximum amount of times infiltration tools can be crafted",
      "Basics for the aspiring craftsman. Improves skills for making infiltration tools.	",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "Crafted an infiltration tool at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Expert Billiards",
      "1",
      "Special shots available at billiards. Helps unlock Technical Rank 2",
      "Techniques written by a professional billiards player.	",
      "¥3,500",
      "Shibuya: Underground Mall Sports Store",
      "Played billiards at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Billiards Magician",
      "1",
      "Special shots available at billiards. Helps unlock Technical Rank 4",
      "Miraculous techniques by a billiards master. Learn about massé.",
      "¥0",
      "Shibuya: Underground Mall Sports Store",
      "Billiards Technical Rank 3",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Factorization Guide",
      "1",
      "Increases stat bonuses when studying	",
      "Well-thumbed reference book. Increases the effectiveness of studying.",
      "Trade MRE Ration",
      "Kichijoji: Trader Sakai",
      "7/26 - 7/30",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Chinese Sweets",
      "1",
      "Unlocks Chinatown",
      "A guidebook to enjoy the sweets found within Chinatown.	",
      "¥0",
      "Complete the Mementos Request 'Part-time Job, Full-time Hell'",
      "6/6",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Theme Park Escort",
      "1",
      "Unlocks Maihama",
      "A book to help men not get lost while visiting amusement parks.",
      "¥0",
      "Complete the Mementos Request 'We Aren't Just Your Slaves'",
      "8/2",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Medjed Menace",
      "2",
      "Knowledge +5",
      "A book on the hacker group Medjed. Be knowledgeable about internet crimes.",
      "¥1,200",
      "Shibuya Central Street: Taiheido Bookstore",
      "5/6",
      ["Knowledge"],
      false
  ),
  new BookDVDGame(
      "The Art of Charm",
      "2",
      "Charm +5",
      "Tips from a famous pickup artist. Learn the charm to hook up with someone.",
      "¥700",
      "Shibuya Central Street: Taiheido Bookstore",
      "4/18",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "Game Secrets",
      "1",
      "Unlocks cheat codes while playing games",
      "A compilation of tricks for every video game. Makes any game easy.	",
      "¥2,800",
      "Shinjuku: Hinokuniya Bookstore",
      "Played video games at least once",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Vague",
      "1",
      "Unlocks Harajuku",
      "A fashion magazine for girls with unique tastes.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "5/18",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Nightlife Hotspots",
      "1",
      "Unlocks Seaside Park",
      "A magazine showcasing date spots geared toward adults.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "6/1",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Aquarium-a-Day",
      "1",
      "Unlocks Shinagawa",
      "A guidebook that lists attractions in aquariums all over Tokyo.",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "7/17",
      ["None"],
      false
  ),
  new BookDVDGame(
      "Nakano Walker",
      "1",
      "Unlocks Nakano",
      "A guidebook that covers popular and obscure spots alike.	",
      "¥1,800",
      "Shibuya Central Street: Taiheido Bookstore",
      "10/1",
      ["None"],
      false
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
      "4/18",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "Wraith",
      "2",
      "Kindness +3 (Occurs both times)",
      "A moving story of a woman who can talk to ghosts. Gives you kindness.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "4/18",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Guy McVer",
      "2",
      "Proficiency +3 (Occurs both times)",
      "Adventures of a man who is proficient in jury rigging tools out of anything.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "4/18",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "The X Folders",
      "2",
      "Guts +3 (Occurs both times)",
      "Investigators chase after supernatural cases. Gives you guts.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "4/18",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Not-so-hot Betsy",
      "2",
      "Charm +3 (Occurs both times)",
      "The story of a homely girl who captivates people with her inner charm.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "6/1",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "ICU",
      "2",
      "Kindness +3 (Occurs both times)",
      "A heartrending drama about working in the ER. Teaches you kindness.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "6/1",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Jail Break",
      "2",
      "Proficiency +3 (Occurs both times)",
      "A jail break drama. You will learn from their proficiency in sneaking.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "6/1",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "The Running Dead",
      "2",
      "Guts +3 (Occurs both times)",
      "A survival horror drama. Viewing the onslaught of zombies will build guts.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "6/1",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "D. Housewives",
      "2",
      "Charm +3 (Occurs both times)",
      "Women's stories of love and passion. Learn about leading a charmed life.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "8/1",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "Mouse M.D.",
      "2",
      "Kindness +3 (Occurs both times)",
      "A maverick rodent's medical heroics. Learn about true kindness.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "8/1",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Tee",
      "2",
      "Proficiency +3 (Occurs both times)",
      "A teacher and a near defunct high school golf team. Be proficient in persuasion.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "8/1",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "31",
      "2",
      "Guts +3 (Occurs both times)",
      "	A writer and editor battle looming deadlines. Praised for its gutsy tension.",
      "¥0 (All DVDs are free after the initial ¥4,800 subscription)",
      "Shibuya, Central Street: Rental Shop Scarlet",
      "8/1",
      ["Guts"],
      false
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
      "6/5",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Punch Ouch",
      "3",
      "Charm +5",
      "A retro boxing game. Playing could give you the charm of a challenger.",
      "¥5,300",
      "Akihabara: Retro Game Shop Super Baron",
      "9/1",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "Train of Life",
      "3",
      "Kindness +5",
      "A retro board game. Playing could expand your kindness.",
      "¥5,600",
      "Akihabara: Retro Game Shop Super Baron",
      "9/1",
      ["Kindness"],
      false
  ),
  new BookDVDGame(
      "Power Intuition",
      "3",
      "Guts +5",
      "A retro fighting game. Playing could give you guts.",
      "¥5,500",
      "Akihabara: Retro Game Shop Super Baron",
      "9/1",
      ["Guts"],
      false
  ),
  new BookDVDGame(
      "Gambla Goemon",
      "2",
      "Charm +5",
      "A retro gambling game. Playing could build the charm not to give up.",
      "¥5,200",
      "Yongen-Jaya: Yumenoshima Second-hand Shop",
      "7/26",
      ["Charm"],
      false
  ),
  new BookDVDGame(
      "Golfer Sarutahiko",
      "3",
      "Proficiency +5",
      "A retro golf game. Playing could make you more proficient.",
      "¥3,200",
      "Akihabara: Retro Game Shop Super Baron",
      "9/1",
      ["Proficiency"],
      false
  ),
  new BookDVDGame(
      "Featherman Seeker",
      "3",
      "Knowledge +5",
      "Featherman game with a cult following. May make you more knowledgable.",
      "¥5,000",
      "Akihabara: Retro Game Shop Super Baron",
      "9/1",
      ["Knowledge"],
      false
  ),
];

export { books, dvds, games };