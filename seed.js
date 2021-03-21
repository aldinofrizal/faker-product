var fs = require('fs');

var images = [
  "https://image.shutterstock.com/image-photo/vienna-austria-february-19-2018-600w-1715802451.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-600w-1388256866.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-7-2017-260nw-1380513044.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-600w-1388256704.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-19-2018-600w-1720421362.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-7-2017-260nw-1380513065.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256683.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-may-27-2018-600w-1723241848.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256749.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256824.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-30-2017-600w-1396651937.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256923.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256785.jpg",
  "https://image.shutterstock.com/image-photo/ukraine-lviv-mar-5-2018-260nw-1038871585.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-14-2018-260nw-1714780234.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-13-2018-600w-1729321636.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-13-2018-260nw-1729321816.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-14-2018-600w-1714780294.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-14-2018-260nw-1714779451.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-19-2018-600w-1715802319.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256911.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-23-2017-260nw-1388256929.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-25-2017-260nw-1428798317.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-30-2017-260nw-1396659095.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-19-2018-600w-1715802325.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-14-2017-260nw-1697745598.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-14-2018-260nw-1714779580.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-14-2017-260nw-1697745601.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-february-19-2018-260nw-1715802472.jpg",
  "https://image.shutterstock.com/image-photo/vienna-austria-august-7-2017-260nw-1380512456.jpg"
]

var names = [
  {
    first_name: "Alabama",
    last_name: "non",
    id: "6bbeb122-eda9-361a-98d6-03619990896a",
    brand: "Smith, Larson and Nicolas",
    description: "Gryphon: 'I went to school in the lap of her voice. Nobody moved. 'Who cares for fish, Game, or any other dish? Who would not join the dance? \"You can really have no sort of mixed flavour of."
    },
  {
    first_name: "New Hampshire",
    last_name: "aliquid",
    id: "d1b4ed5b-a3b2-306c-8222-0f82a46dfc4c",
    brand: "Walter Inc",
    description: "I wish you wouldn't keep appearing and vanishing so suddenly: you make one quite giddy.' 'All right,' said the youth, 'and your jaws are too weak For anything tougher than suet; Yet you balanced an."
  },
  {
    first_name: "Louisiana",
    last_name: "aut",
    id: "bb6521be-c55b-36ef-838d-447a3298cb99",
    brand: "Okuneva Group",
    description: "I suppose it were white, but there were ten of them, and considered a little pattering of feet on the ground near the centre of the Mock Turtle said with some severity; 'it's very easy to know when."
  },
  {
    first_name: "Utah",
    last_name: "laboriosam",
    id: "1b52e0b9-75c6-33d8-b9e4-23b5cfea4367",
    brand: "Fisher Inc",
    description: "Good-bye, feet!' (for when she turned to the company generally, 'You are old, Father William,' the young man said, 'And your hair has become very white; And yet you incessantly stand on your head."
  },
  {
    first_name: "Indiana",
    last_name: "qui",
    id: "5ea0be7e-0cce-3af3-bab2-2406ce6519de",
    brand: "Hackett, Thiel and Greenfelder",
    description: "ALL RETURNED FROM HIM TO YOU,\"' said Alice. 'I'm glad they don't give birthday presents like that!' He got behind him, and said 'What else have you executed on the spot.' This did not like to be."
    },
  {
    first_name: "Nebraska",
    last_name: "omnis",
    id: "e96af7f0-f3c1-3293-9983-38f16502a720",
    brand: "Moore-Fahey",
    description: "Alice, very much pleased at having found out a new idea to Alice, flinging the baby joined):-- 'Wow! wow! wow!' While the Panther were sharing a pie--' [later editions continued as follows When the."
  },
  {
    first_name: "Montana",
    last_name: "unde",
    id: "4c34a716-8a8b-381f-8590-ee0984ad0990",
    brand: "Huels, Schumm and Larson",
    description: "Alice. 'Call it what you mean,' said Alice. 'Call it what you had been looking over his shoulder as she could, and waited to see what would happen next. First, she dreamed of little birds and."
  },
  {
    first_name: "Oregon",
    last_name: "aut",
    id: "8a845517-1b32-334c-a98b-eac6068fe77b",
    brand: "Denesik, Waters and Gleichner",
    description: "Hatter began, in rather a complaining tone, 'and they drew all manner of things--everything that begins with an M, such as mouse-traps, and the Queen was silent. The King turned pale, and shut his."
  },
  {
    first_name: "Arizona",
    last_name: "voluptas",
    id: "65184e56-c92d-342e-97d9-4b1c6a872af8",
    brand: "Christiansen-Gerlach",
    description: "I'm sure _I_ shan't be beheaded!' 'What for?' said the Duchess; 'and that's why. Pig!' She said it to annoy, Because he knows it teases.' CHORUS. (In which the March Hare and his buttons, and turns."
  },
  {
    first_name: "North Carolina",
    last_name: "aut",
    id: "3e012c8f-0ec2-3f08-8feb-be4587c11e86",
    brand: "Jones LLC",
    description: "Dormouse shook itself, and began by producing from under his arm a great crash, as if she were saying lessons, and began whistling. 'Oh, there's no use their putting their heads down and looked at."
  },
  {
    first_name: "Nevada",
    last_name: "qui",
    id: "02de9143-e5f0-33d7-82b1-8416cf7f5dac",
    brand: "Zemlak Group",
    description: "While she was quite surprised to find her way through the air! Do you think you could keep it to half-past one as long as there was a little worried. 'Just about as she spoke. Alice did not get dry."
  },
  {
    first_name: "Idaho",
    last_name: "in",
    id: "a11fbd81-fda2-37ba-83f8-7d784c98b0c1",
    brand: "Crona Inc",
    description: "Queen shrieked out. 'Behead that Dormouse! Turn that Dormouse out of a bottle. They all made of solid glass; there was nothing on it in a trembling voice, 'Let us get to twenty at that rate!."
  },
  {
    first_name: "Wisconsin",
    last_name: "non",
    id: "0da180c9-ce17-3405-8192-f9e92a203bcb",
    brand: "Bauch PLC",
    description: "In a minute or two, she made her feel very queer indeed:-- ''Tis the voice of the Shark, But, when the tide rises and sharks are around, His voice has a timid and tremulous sound.] 'That's different."
  },
  {
    first_name: "New Jersey",
    last_name: "velit",
    id: "61956cbd-1e83-3400-a3ee-2da75809fc97",
    brand: "Pouros, Collier and Hauck",
    description: "Mouse had changed his mind, and was going to remark myself.' 'Have you guessed the riddle yet?' the Hatter with a sigh: 'it's always tea-time, and we've no time she'd have everybody executed, all."
  },
  {
    first_name: "Washington",
    last_name: "autem",
    id: "c7e2cbad-7e19-32d1-93a4-bea97ab03ad1",
    brand: "Zulauf, Yundt and Ward",
    description: "Hatter hurriedly left the court, arm-in-arm with the game,' the Queen said severely 'Who is it directed to?' said the Cat: 'we're all mad here. I'm mad. You're mad.' 'How do you know that cats COULD."
  },
  {
    first_name: "Idaho",
    last_name: "deleniti",
    id: "be660796-3264-32f3-baef-1ab0cac5a759",
    brand: "Bartell, Borer and Prohaska",
    description: "I know?' said Alice, 'a great girl like you,' (she might well say this), 'to go on for some time busily writing in his throat,' said the Pigeon. 'I can tell you just now what the flame of a large."
  },
  {
    first_name: "Virginia",
    last_name: "numquam",
    id: "f5ec9c6d-b72e-39ec-a4c3-e4d803c82d04",
    brand: "Schroeder, Steuber and Champlin",
    description: "KNOW IT TO BE TRUE--\" that's the jury-box,' thought Alice, 'to pretend to be done, I wonder?' As she said this, she came up to her that she looked at each other for some way, and nothing seems to."
    },
  {
    first_name: "Rhode Island",
    last_name: "animi",
    id: "4676d15d-8097-3a19-ba75-4974ed09c0c8",
    brand: "Marvin, Runolfsson and Lowe",
    description: "By this time she went on without attending to her, still it was done. They had not noticed before, and he went on without attending to her; 'but those serpents! There's no pleasing them!' Alice was."
  },
  {
    first_name: "Michigan",
    last_name: "nesciunt",
    id: "7c7f7bbf-311c-30b2-9aa4-094aa94032f9",
    brand: "Kunde, Predovic and Ziemann",
    description: "PRECIOUS nose'; as an explanation. 'Oh, you're sure to make it stop. 'Well, I'd hardly finished the goose, with the Duchess, 'as pigs have to go down the little door was shut again, and Alice looked."
  },
  {
    first_name: "Maine",
    last_name: "eos",
    id: "036d61a3-c893-33bd-bb55-29b3cd622220",
    brand: "McGlynn, McLaughlin and Murphy",
    description: "Mock Turtle recovered his voice, and, with tears again as quickly as she could, and waited to see its meaning. 'And just as well as pigs, and was just in time to be trampled under its feet, ran."
  },
  {
    first_name: "Maryland",
    last_name: "atque",
    id: "61224df7-bafd-3a98-a658-1dae8d53a72e",
    brand: "Bechtelar Inc",
    description: "Alice, seriously, 'I'll have nothing more happened, she decided to remain where she was a queer-shaped little creature, and held it out to sea!\" But the snail replied \"Too far, too far!\" and gave a."
    },
  {
    first_name: "Texas",
    last_name: "nihil",
    id: "038ff2b1-9d69-34bd-a3c8-dbf69e09dfa6",
    brand: "VonRueden LLC",
    description: "Mabel, I'll stay down here! It'll be no sort of mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered toast,) she very soon found an opportunity of adding."
  },
  {
    first_name: "Indiana",
    last_name: "necessitatibus",
    id: "e46c26cd-6159-3f47-8fce-e943a1857b4e",
    brand: "Brakus-Lubowitz",
    description: "Duchess, 'and that's the jury-box,' thought Alice, 'they're sure to make personal remarks,' Alice said nothing; she had looked under it, and yet it was certainly not becoming. 'And that's the."
  },
  {
    first_name: "Ohio",
    last_name: "amet",
    id: "4f0f1cb7-b68d-31f9-bfd1-548b53347f03",
    brand: "Dicki Group",
    description: "Hatter were having tea at it: a Dormouse was sitting on a branch of a water-well,' said the Dodo in an agony of terror. 'Oh, there goes his PRECIOUS nose'; as an unusually large saucepan flew close."
  },
  {
    first_name: "South Dakota",
    last_name: "ad",
    id: "e946e8d5-11c9-38d8-9942-9cd29db71243",
    brand: "Funk, Bartoletti and Jenkins",
    description: "White Rabbit, who said in a tone of great surprise. 'Of course it is,' said the Hatter: 'I'm on the twelfth?' Alice went on, yawning and rubbing its eyes, for it to speak with. Alice waited."
  },
  {
    first_name: "Florida",
    last_name: "cum",
    id: "9eb2d8af-1a06-3024-9ae3-9b6f71e32979",
    brand: "Kertzmann Group",
    description: "I beat him when he pleases!' CHORUS. 'Wow! wow! wow!' While the Panther received knife and fork with a sudden burst of tears, but said nothing. 'Perhaps it hasn't one,' Alice ventured to taste it."
  },
  {
    first_name: "Delaware",
    last_name: "placeat",
    id: "fd19657b-4730-35dd-a9dc-c94556d813db",
    brand: "Lubowitz-Lemke",
    description: "I'd only been the right words,' said poor Alice, 'it would have this cat removed!' The Queen smiled and passed on. 'Who ARE you doing out here? Run home this moment, and fetch me a pair of white kid."
  },
  {
    first_name: "Washington",
    last_name: "laboriosam",
    id: "52a8d9db-1c6c-3570-a51c-33c127e18aa3",
    brand: "Sawayn LLC",
    description: "Said he thanked the whiting kindly, but he could think of what work it would make with the time,' she said, 'than waste it in time,' said the King. The next witness would be so proud as all that.'."
  },
  {
    first_name: "New Mexico",
    last_name: "fugit",
    id: "7022e903-1d4b-3a67-b2f8-d53698abef49",
    brand: "Hickle Ltd",
    description: "I beg your pardon!' cried Alice in a natural way. 'I thought you did,' said the Caterpillar. This was such a capital one for catching mice you can't be Mabel, for I know THAT well enough; don't be."
  },
  {
    first_name: "South Dakota",
    last_name: "eos",
    id: "179fea86-9818-3b99-b26a-c46d67a7f99d",
    brand: "Kessler, Bergnaum and Tillman",
    description: "I must be a Caucus-race.' 'What IS the use of a book,' thought Alice to herself. 'Shy, they seem to come out among the bright flower-beds and the executioner myself,' said the Mock Turtle: 'why, if."
  }
]

function getRandom() {
  var result = []
  for (let i = 0; i < names.length; i++) {
    var price = Math.round(Math.random() * 100) * 1000
    var name = `${names[i].first_name} ${names[i].last_name}`
    var product = {
      id: names[i].id,
      name,
      price,
      description: names[i].description,
      brand: names[i].brand,
      image: images[i],
      size: getRandomAvailableSizes(),
      images: getRandomImagesList()
    }
    result.push(product)
  }

  return result
}

function getRandomAvailableSizes() {
  var result = []
  var minimum = 38
  var maximum = 44
  var loopCount = (maximum - minimum) * 2

  for (let i = 0; i < loopCount; i++) {
    if (Math.round(Math.random())) {
      result.push(minimum)
    }
    minimum += 0.5
  }

  return result
}

function getRandomImagesList(mainIndex) {
  var imageIndex = []

  while (imageIndex.length < 3) {
    var tempIndex = Math.floor(Math.random() * images.length)
    var notAvailable = tempIndex == mainIndex || imageIndex.includes(tempIndex)

    if (!notAvailable) {
      imageIndex.push(images[tempIndex])
    }
  }

  return imageIndex
}

function main() {
  var products = getRandom()
  var printObject = { products }
  var json = JSON.stringify(printObject, null, 2);
  fs.writeFile('db.json', json, 'utf8', () => {
    console.log('json created')
  });
}

main()


