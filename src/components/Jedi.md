### How to use

> note: object in this demo is not mutable. So no editing actualy occurs.

```js
new Vue({
  data(){
    return {
      example: [
  {
    "_id": "5d24d93fc9ee5da4bda9c506",
    "index": 0,
    "guid": "12363a3c-028c-4ec8-bbd3-ec60137176e5",
    "isActive": false,
    "balance": "$2,802.58",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": {
      "first": "Jeannine",
      "last": "Calhoun"
    },
    "company": "ENERSAVE",
    "email": "jeannine.calhoun@enersave.com",
    "phone": "+1 (820) 456-3733",
    "address": "174 Doughty Street, Indio, Oklahoma, 1435",
    "about": "Deserunt proident aliqua irure qui ad eu tempor anim proident culpa incididunt Lorem excepteur excepteur. Excepteur commodo do cillum do voluptate et magna amet adipisicing cillum excepteur. Ea eiusmod consequat esse commodo dolore nulla adipisicing mollit excepteur incididunt veniam deserunt amet. Duis mollit Lorem ad dolor mollit nisi veniam. Adipisicing sunt nostrud ipsum incididunt ullamco sint ut eiusmod reprehenderit ex magna ut dolore elit. Quis ullamco dolore ipsum nulla sunt occaecat eu sunt nisi. Elit commodo amet aliquip tempor dolore ipsum sit et ad.",
    "registered": "Monday, February 26, 2018 5:29 PM",
    "latitude": "89.492404",
    "longitude": "104.625398",
    "tags": [
      "ea",
      "cupidatat",
      "est",
      "ullamco",
      "cillum"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Claudette Pratt"
      },
      {
        "id": 1,
        "name": "Frazier Bishop"
      },
      {
        "id": 2,
        "name": "Twila Kane"
      }
    ],
    "greeting": "Hello, Jeannine! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5d24d93f23d63022034dc25a",
    "index": 1,
    "guid": "e1220ff0-f1d3-441e-8654-701aed072f94",
    "isActive": false,
    "balance": "$2,013.35",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": {
      "first": "Lorena",
      "last": "Daniel"
    },
    "company": "AEORA",
    "email": "lorena.daniel@aeora.us",
    "phone": "+1 (937) 512-3960",
    "address": "651 Imlay Street, Lowell, Wisconsin, 6518",
    "about": "Magna dolore laborum ut id labore mollit veniam deserunt do mollit. Magna deserunt deserunt minim mollit amet et duis. Adipisicing amet irure culpa exercitation pariatur fugiat ullamco adipisicing do occaecat. Pariatur aute ut velit ipsum officia eiusmod nulla veniam cillum. Nostrud amet dolor ut consequat qui.",
    "registered": "Friday, May 10, 2019 5:49 AM",
    "latitude": "39.429423",
    "longitude": "122.63473",
    "tags": [
      "laboris",
      "ad",
      "consectetur",
      "dolor",
      "laboris"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Floyd Mays"
      },
      {
        "id": 1,
        "name": "Mayer Lyons"
      },
      {
        "id": 2,
        "name": "Mccormick Mccullough"
      }
    ],
    "greeting": "Hello, Lorena! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5d24d93fc2dd79f4e0883fb5",
    "index": 2,
    "guid": "5136e396-66e3-4b8f-a62e-e23c9c7dec94",
    "isActive": false,
    "balance": "$3,955.87",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": {
      "first": "Mack",
      "last": "Mcknight"
    },
    "company": "LEXICONDO",
    "email": "mack.mcknight@lexicondo.co.uk",
    "phone": "+1 (880) 495-2532",
    "address": "316 Sands Street, Seymour, Kansas, 1707",
    "about": "Ullamco laboris ea adipisicing tempor eu pariatur esse pariatur. Enim reprehenderit ullamco quis ut occaecat velit velit commodo nisi sint eiusmod. Elit fugiat in ullamco adipisicing incididunt commodo esse do est voluptate commodo eiusmod officia.",
    "registered": "Sunday, January 29, 2017 5:03 PM",
    "latitude": "-16.87821",
    "longitude": "-52.781818",
    "tags": [
      "dolore",
      "mollit",
      "adipisicing",
      "aute",
      "mollit"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Moss Ashley"
      },
      {
        "id": 1,
        "name": "Felecia Ross"
      },
      {
        "id": 2,
        "name": "Cathleen Stein"
      }
    ],
    "greeting": "Hello, Mack! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5d24d93f6dc45bd9b479ff2c",
    "index": 3,
    "guid": "743c2f79-a90d-4cac-8f4c-46f81ec18fd9",
    "isActive": true,
    "balance": "$1,877.56",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": {
      "first": "Klein",
      "last": "Travis"
    },
    "company": "BUZZNESS",
    "email": "klein.travis@buzzness.name",
    "phone": "+1 (807) 416-2069",
    "address": "211 Lee Avenue, Topanga, Arizona, 7371",
    "about": "Proident amet laborum consectetur proident nisi aliqua id consectetur nostrud et incididunt. Cillum ipsum in sit veniam ipsum enim ut pariatur amet cillum laborum irure. Pariatur pariatur fugiat sint ea ea magna commodo cupidatat exercitation anim duis. Nisi ut nisi in laborum. Aute commodo amet commodo labore consequat. Eu pariatur non mollit proident nostrud aliqua elit nostrud Lorem.",
    "registered": "Sunday, May 8, 2016 3:37 AM",
    "latitude": "27.200237",
    "longitude": "119.95983",
    "tags": [
      "et",
      "aliquip",
      "id",
      "anim",
      "sint"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Suzette Rodriguez"
      },
      {
        "id": 1,
        "name": "Tammi Walsh"
      },
      {
        "id": 2,
        "name": "Morton Brewer"
      }
    ],
    "greeting": "Hello, Klein! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5d24d93f05a223d3b2480055",
    "index": 4,
    "guid": "553ef6ef-f6a4-428b-8fcc-a4516f464969",
    "isActive": false,
    "balance": "$1,715.43",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": {
      "first": "Robert",
      "last": "Rodriquez"
    },
    "company": "TETAK",
    "email": "robert.rodriquez@tetak.biz",
    "phone": "+1 (997) 541-2725",
    "address": "982 Sullivan Street, Dragoon, District Of Columbia, 1094",
    "about": "Consectetur Lorem exercitation pariatur anim sint cupidatat ullamco irure cillum. Officia eu cupidatat enim veniam est est irure ad reprehenderit ea do minim enim reprehenderit. Enim amet incididunt consectetur eiusmod minim culpa do. Duis do laboris ut irure id occaecat sint occaecat elit. Elit in irure amet officia irure labore sint minim voluptate culpa ea proident.",
    "registered": "Sunday, September 30, 2018 6:43 AM",
    "latitude": "-54.186044",
    "longitude": "-160.225011",
    "tags": [
      "quis",
      "nostrud",
      "cillum",
      "laboris",
      "incididunt"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vicki Rich"
      },
      {
        "id": 1,
        "name": "Erna Vaughn"
      },
      {
        "id": 2,
        "name": "Rosanne Johnson"
      }
    ],
    "greeting": "Hello, Robert! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5d24d93fc76de75d4ec01c08",
    "index": 5,
    "guid": "3453089c-5ae3-4b9c-a21a-bf9aa565a6ea",
    "isActive": false,
    "balance": "$1,084.97",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": {
      "first": "Finch",
      "last": "Hardy"
    },
    "company": "SUSTENZA",
    "email": "finch.hardy@sustenza.biz",
    "phone": "+1 (810) 516-2033",
    "address": "994 Liberty Avenue, Grandview, Indiana, 5755",
    "about": "Non eiusmod amet consequat consequat Lorem aliqua reprehenderit exercitation voluptate. Deserunt voluptate do adipisicing laboris eiusmod qui ex. Enim anim exercitation culpa incididunt Lorem enim aliquip veniam Lorem consectetur sunt eu ut. Sunt excepteur Lorem id minim aliquip nisi esse sint tempor fugiat deserunt esse aliqua. Cupidatat excepteur enim culpa voluptate adipisicing incididunt. Elit pariatur elit Lorem dolore eu eiusmod laborum voluptate mollit adipisicing id ex.",
    "registered": "Monday, February 23, 2015 12:39 AM",
    "latitude": "10.598015",
    "longitude": "-54.313575",
    "tags": [
      "qui",
      "magna",
      "ad",
      "sunt",
      "cupidatat"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lorie Fletcher"
      },
      {
        "id": 1,
        "name": "Barron Chapman"
      },
      {
        "id": 2,
        "name": "Lesley Richmond"
      }
    ],
    "greeting": "Hello, Finch! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5d24d93f4bf38b0359369ef2",
    "index": 6,
    "guid": "f5b62350-1944-40f2-b60f-d3495b92e97f",
    "isActive": true,
    "balance": "$2,567.14",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": {
      "first": "Noreen",
      "last": "Marsh"
    },
    "company": "IDEGO",
    "email": "noreen.marsh@idego.me",
    "phone": "+1 (872) 444-3790",
    "address": "695 Etna Street, Westphalia, Tennessee, 345",
    "about": "Ea enim velit in excepteur deserunt dolor duis. Labore proident occaecat id ad enim sint dolore pariatur veniam sunt elit duis. Minim est mollit laborum officia magna velit occaecat.",
    "registered": "Wednesday, November 4, 2015 1:59 PM",
    "latitude": "-89.011051",
    "longitude": "90.416404",
    "tags": [
      "do",
      "in",
      "non",
      "qui",
      "ut"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mcclain Phillips"
      },
      {
        "id": 1,
        "name": "Schultz Willis"
      },
      {
        "id": 2,
        "name": "Lilia Buchanan"
      }
    ],
    "greeting": "Hello, Noreen! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5d24d93f3952b5b702e648e1",
    "index": 7,
    "guid": "55cfb918-084c-44de-a025-8a4f480f7c2b",
    "isActive": false,
    "balance": "$2,734.56",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": {
      "first": "Lara",
      "last": "Patrick"
    },
    "company": "TECHADE",
    "email": "lara.patrick@techade.net",
    "phone": "+1 (981) 521-3002",
    "address": "464 Church Lane, Rockingham, North Dakota, 6666",
    "about": "Consectetur sit anim minim proident. Culpa do quis elit Lorem irure. Elit est veniam pariatur anim reprehenderit tempor irure cupidatat nulla dolor aute anim. Aute aliquip dolore reprehenderit occaecat dolore. Tempor id Lorem sint non cillum velit aute aliqua officia laborum officia consequat.",
    "registered": "Wednesday, February 4, 2015 7:42 AM",
    "latitude": "7.012356",
    "longitude": "7.137419",
    "tags": [
      "qui",
      "nostrud",
      "veniam",
      "exercitation",
      "ullamco"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mccray Herman"
      },
      {
        "id": 1,
        "name": "Lottie Brady"
      },
      {
        "id": 2,
        "name": "Janie Cortez"
      }
    ],
    "greeting": "Hello, Lara! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5d24d93f84e9557856a4858c",
    "index": 8,
    "guid": "d736d721-2d5f-48c0-8d6f-0b94f4fb743b",
    "isActive": false,
    "balance": "$1,320.05",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": {
      "first": "Rojas",
      "last": "Walker"
    },
    "company": "COSMETEX",
    "email": "rojas.walker@cosmetex.tv",
    "phone": "+1 (895) 481-3846",
    "address": "147 Schweikerts Walk, Bynum, Texas, 4096",
    "about": "Cupidatat ea enim Lorem minim ipsum labore velit. Laborum occaecat cillum deserunt eu pariatur velit anim est sint nulla non dolor. Irure deserunt ullamco et eiusmod quis adipisicing occaecat sit incididunt elit mollit. Adipisicing anim mollit reprehenderit dolore velit eu esse nulla mollit magna consequat occaecat exercitation.",
    "registered": "Monday, November 30, 2015 4:15 AM",
    "latitude": "25.501997",
    "longitude": "73.663819",
    "tags": [
      "eiusmod",
      "sit",
      "velit",
      "qui",
      "veniam"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Benita Hampton"
      },
      {
        "id": 1,
        "name": "Bennett Donaldson"
      },
      {
        "id": 2,
        "name": "Roy Stevenson"
      }
    ],
    "greeting": "Hello, Rojas! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
    }
  },
  template: `
    <Jedi
    :content="example"
  />
  `
})
```
