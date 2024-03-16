# Web Development Project 3 - *TravLingo-DE*

Submitted by: **Antonio Loyola**

This web app: **Flash cards with English and German translations. Cycle through the phrases to practice your English to German translations. Cards colored based on difficulty of sentence. A shuffle button is implenmented using the fisher-yates shuffle. With this algorithm we are able to randomly shuffle the cards in the array**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [X] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/qOiIzl6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

https://imgur.com/a/qOiIzl6

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
- LICEcap

## Notes

Describe any challenges encountered while building the app.

Learning the Fisher-Yates shuffle to create a random array to shuffle the cards.
 Learned the most effective way is use the two pointer method and swap the last index of the array and decremenet.
 With that method we have a O(N) time complexity and O(1) space complexitity. Unfortunatly in the end I had to create a new object with `const shuffledPhrases = [...travelPhrases];`
 thus increasing my space complexity but solving my issue on shuffling the cards.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.