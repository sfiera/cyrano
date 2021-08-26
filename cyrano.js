(function() {

var skills = [
  "Attack",     "Defense", "Sword",   "Axe",       "Mace",
  "Barehand",   "Missile", "Shield",

  "Mana",       "Casting", "Alchemy", "Runes",     "Healing",

  "Persuasion", "Traps",   "Locks",   "Awareness", "Fishing",
  "Gambling",   "Cooking", "Weaving",
];

var items = [
  "Arrow",
  "Magic Arrow",
  "Bow",
  "Axe",
  "Bomb",
  "Broken Sword",
  "Cleaver",
  "Club",
  "Dagger",
  "Dagger",
  "Gauntlets",
  "Mace",
  "Miner's Pick",
  "Mystic Spear",
  "Sling",
  "Sling stone",
  "Spear",
  "Spikes",
  "Staff",
  "Sword",
  "Sword of Heroes",

  "Buckler",
  "Light Shield",
  "Round Shield",
  "Full Shield",
  "Broken Shield",
  "Leather Helmet",
  "Helmet",
  "Full Helmet",
  "Odd Helmet",
  "Mystic Helmet",
  "Cuirass",
  "Metal Breast Plate",
  "Mystic Armor",
  "Cloak",
  "Fur Cloak",
  "Gator Boots",
  "Belt of Strength",

  "Landking Amulet",
  "Omen's Ring",
  "Theresites' Ring",
  "Stronghold Ring",
  "Ring of Resistance",
  "Atreus' plain Will to Union Ring",

  "Tunic",
  "Pants",
  "Kilt",
  "Skirt",
  "Long Dress",
  "Dress",
  "Cape",
  "Sandals",
  "Boots",

  "End Table",
  "Chair",
  "Flowers",
  "Plant",
  "Decorative Axe",

  "Paper",
  "Crude Map",
  "Wine contract",
  "Omen's Map",
  "Map of Cythera",
  "Scroll of Directed Nexus",
  "Scroll of Detect Concealment",
  "Scroll of Detect Traps",
  "Scroll of Vision of the Night",
  "Scroll of Minor Embrightenment",
  "Scroll of Death Strike",
  "Scroll of Remove Mage Lock",

  "Book (Seldane Ruins of Pynx)",
  "Book (Alaric's Government, an Analysis by Meclemelus)",
  "Book (Alaric, Landking)",
  "Book (Basic Alchemical Potions)",
  "Book (The Artifact Of Pnyx)",
  "Book (Exploration of Seldane Ruins by Timon, red cover, closed)",
  "Book (Exploration of Seldane Ruins by Timon, blue cover, open)",
  "Book (Exploration of Seldane Ruins by Timon, blue cover, closed)",
  "Book (Study of Timeflux)",
  "Sapphire Book of the Crown",
  "Sapphire Book of Wisdom",
  "Sapphire Book of Understanding",
  "Sapphire Book of Mercy",
  "Sapphire Book of Power",
  "Sapphire Book of Beauty",
  "Sapphire Book of Victory",
  "Sapphire Book of Splendor",
  "Sapphire Book of Foundation",
  "Sapphire Book of the Kingdom",
  "Grimoire",

  "Iron key",
  "Brass key",
  "Lock Pick",
  "Half Disk",
  "Black Disk",
  "Black Disk",
  "Strange Device",

  "Spider Web",
  "Ruby",
  "Obsidian",
  "Peppermint",
  "Diamond",
  "Sulfur",
  "Seed Pod",
  "Bean",
  "Harpy Egg",
  "Kelp",
  "Healing Potion",
  "Mage's Friend Potion",
  "Antidote Potion",
  "Clear Mind Potion",
  "Smith's Friend Potion",
  "Far Sight Potion",
  "Sustenance Potion",
  "Free Motion Potion",
  "Kesh Bottle",
  "Ungent",
  "Strange Staff",
  "Strange Staff",
  "Scale",
  "Mortar and Pestle",
  "Hourglass",

  "Rolling Pin",
  "Plate",
  "Dinner Knife",
  "Spoon",
  "Fork",
  "Glass",
  "Pewter Mug",
  "Dough",
  "Bag of Flour",
  "Butter",
  "Pail",
  "Pail of Milk",
  "Pail of Water",
  "Pitcher",

  "Flatbread",
  "Hand-baked Bread",
  "Bread",
  "Cheese",
  "Fish",
  "Fowl",
  "Grapes",
  "Pomegranate",
  "Meat (Ribs)",
  "Meat (Leg)",
  "Steak",
  "Sausage",
  "Kabobs",
  "Meatpie",
  "Mushroom Steak",
  "Edible Strange Device",

  "Chest",
  "Coffer",
  "Pouch",
  "Sack",
  "Corpse",

  "Hoe",
  "Rake",
  "Scythe",
  "Pitchfork",
  "Flax",
  "Thread",
  "Cloth",

  "Torch",
  "Lamp",
  "Candle",
  "Candelabra",

  "Crystal Ball (Green)",
  "Crystal Ball (Blue)",
  "Crystal Ball (Purple)",
  "Crystal Ball (Empty)",

  "Glowing Crystal (First piece)",
  "Glowing Crystal (Second piece)",
  "Glowing Crystal (Third piece)",
  "Glowing Crystal (Fourth piece)",

  "Oboloi",
  "Fishing Pole",
  "Fishing Net",
  "Shovel",
  "Rope",
  "Boards",
  "Inkwell",
  "Gavel",
  "Strange Rod",
  "Debris",
  "Hand Mirror",
  "Broken Hand Mirror",
  "Dice",
  "Earthheart Mushroom",
  "Panpipes",
  "Lute",
  "Lyre",
];

var monsters = [
  "Bird",
  "Brigand",
  "Chicken",
  "Crabs",
  "Deerlizard",
  "Demon",
  "Gator",
  "Ghost",
  "Ghoul",
  "Giant Crab",
  "Giant Slug",
  "Goat",
  "Golem",
  "Guard",
  "Harpy",
  "Hydra",
  "Land Jelly",
  "Lich",
  "Orange Gecko",
  "Polyp",
  "Ratlizard, Large",
  "Ratlizard, Small",
  "Sea Monster",
  "Skeleton",
  "Slime",
  "Snake",
  "Tentacle",
  "Unicorn",
];

var people = [
  "Bellerophon", "Alaric",       "Emesa",      "Hadrian",     "Hector",
  "Magpie",

  "Ake",         "Antiphus",     "Ariadne",    "Ascalon",     "Crito",
  "Hebe",        "Milcom",       "Peirithous", "Philinus",    "Sacas",
  "Thersites",   "Tlepolemus",

  "Darius",      "Eumelus",      "Mantinea",   "Metopes",     "Parium",
  "Polydamas",   "Propontis",    "Sardis",

  "Aethon",      "Alastor",      "Alcestris",  "Anisa",       "Antenor",
  "Apis",        "Asius",        "Atymnius",   "Autonous",    "Berossus",
  "Bias",        "Bryaxis",      "Cybele",     "Dares",       "Deiphobus",
  "Diomede",     "Dryas",        "Dymas",      "Eteocles",    "Halos",
  "Hypsenor",    "Ilus",         "Laomedon",   "Malis",       "Naxos",
  "Neoptolemus", "Oeneus",       "Opheltius",  "Periphas",    "Stentor",
  "Theano",      "Thetis",       "Thoas",      "Thuria",

  "Areithous",   "Atreus",       "Ennomus",    "Itanos",      "Laodice",
  "Myus",        "Pelagon",

  "Alcyone",     "Clytemnestra", "Danae",      "Helen",       "Lindus",
  "Lycaon",      "Menelaus",     "Niobe",      "Palaestra",   "Paris",
  "Peisander",   "Peleus",       "Pheres",     "Protesilaus", "Selinus",
  "Semele",      "Thrasymedes",  "Tros",

  "Sabinate",    "Seqedher",     "Unhayt",     "Uset",

  "Alcmena",     "Asteropaeus",  "Pelops",

  "Amphidamas",  "Erechtheus",   "Eurybates",  "Jhiaxus",     "Lycurgus",
  "Rhesus",      "Thamyris",

  "Joppa",       "Larisa",

  "Borus",       "Briseis",      "Charax",     "Demodocus",   "Eioneus",
  "Eudoxus",     "Glaucus",      "Ignae",      "Jinrai",      "Meleager",
  "Omen",        "Prusa",        "Timon",      "UrSylph",
];

var options = {
  skill : skills,
  item : items,
  monster : monsters,
  person : people,
};

var links = {
  person : "http://www.cytheraguides.com/cast/#",
};

var randomize = function() {
  for (const [category, choices] of Object.entries(options)) {
    var link = links[category];
    var els = document.getElementsByClassName(category);
    Array.prototype.forEach.call(els, (el) => {
      var selection = choices[Math.floor(choices.length * Math.random())];
      el.innerHTML = "";
      if (typeof link !== "undefined") {
        var a = document.createElement("a");
        a.href = link + selection;
        a.innerText = selection;
        a.target = "_blank";
        a.rel = "noopener";
        el.appendChild(a);
      } else {
        el.innerText = selection;
      }
    });
  }
};

window.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("randomize").addEventListener("click", randomize);
  randomize();
});
})();
