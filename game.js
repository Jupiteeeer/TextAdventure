const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state ={}
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text
while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}

textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    }
})
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id: 1,
        text: "You wake up in bed. It's dark. You can hear quiet movement in the house.",
        options: [
            {
                text: 'Go back to sleep.',
                nextText: 2
            },
            {
                text: 'Get out of bed and investigate.',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'You snuggle back into bed. You hear soft footsteps now, approaching your bedroom.',
        options: [
            {
                text: 'Pull the covers over your head.',
                nextText: 4
            },
            {
                text: 'Get out of bed and investigate.',
                nextText: 3
            },
        //     {
        //         // text: 'Ignore the merchant',
        //         // nextText: 3
        //     }
        ]
    },
    {
        id: 4,
        text: "You try your best to ignore the sounds of footsteps. There's heavy breathing now too, slowly inching closer and closer.",
        options: [
            {
                text: 'Hold your breath and wait.',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "The breathing and footsteps stop inches from your face.",
        
        options: [
            {
                text: 'You strain your ears to hear.',
                nextText: 6
            },
        ]
    },
    {
        id: 6,
        text: 'A clammy hand reaches under the blanket and grips your arm.',
        options: [
            {
                text: "If you don't face your fears on your terms, you'll face them on theirs...",
                nextText: -1
            },
        ]
    },
    {
        id: 3,
        text: 'You step out of bed and listen for any sounds.',
        options: [
            {
                text: 'Turn on the lamp.',
                nextText: 7
            },
            {
                text: 'Squint through the dark towards the un-lit hall.',
                nextText: 23
            },
            {
                text: 'Ask if anyone is there.',
                nextText: 24
            }
        ]
    },
    {
        id: 24,
        text: "There are sudden footsteps in the hall as something comes hurtling towards your room.",
        options: [
            {
                text: "Grab the curtains and pull them open. You need light NOW!",
                nextText: 8
            }
        ]
    },
    {
        id: 23,
        text: "Something is standing in the doorway.",
        options: [
            {
                text: 'Open the curtains to let in the light from outside.',
                nextText: 8
            },
            {
                text: "Step closer",
                nextText: 15
            }
        ]
    },
    {
        id: 7,
        text: "You flip the lightswitch and nothing happens. You're surprised but then you sense movement in the corner of your eye. Something is standing in the doorway.",
        options: [
            {
                text: 'Open the curtains to let in the light from outside.',
                nextText: 8
            },
            {
                text: "Turn to see what it is.",
                nextText: 15
            }
        ]
    },
    {
        id: 8,
        text: "As you turn your back to grab the curtains, you hear rapid scrambling on the floor behind you.",
        options: [
                {
                    text: 'Grab them and pull them wide open.',
                    nextText: 9,
                },
                {
                    text: "Turn around!",
                    nextText: 15
                }
            ]
            },
            {
            id: 9,
            text: "The room is well-lit now. You hurriedly turn back to the doorway but there's nothing there now.",
            options: [
                {
                    text: "Walk into the hall.",
                    nextText: 11
                },
                {
                    text: "You definitely saw something. Feeling brave, you want to check the room to see where it hid.",
                    nextText: 10
                }

            ]
    },
    {
        id: 15,
        text: "As you step closer, you realize your eyes are playing tricks. There's nothing there. Apprehensively, you pull the curtains open and let the light from outside illuminate the room.",
        options: [
            {
                text: "Walk into the hall.",
                nextText: 11
            },
            {
                text: "You definitely saw something. Feeling brave, you want to check the room to see where it hid.",
                nextText: 10
            }

        ]
},
    {
        id: 10,
        text: "Where could it have hid?",
        options: [
            {
                text: "Under the bed?",
                nextText: 20
            },
            // {
            //     text: "In the closet?",
            //     nextText: 21
            // },
            // {
            //     text: "The ceiling?",
            //     nextText: 23
            // }
        ]
    },
    {
        id: 20,
        text: "You search under the bed but there's no-one there.",
        options: [ 
            {
                text: "Keep looking.",
                nextText: 21
            }

        ]
    },
        {
        id: 21,
        text: "You search the closet but there's no-one there",
        options: [
            {
                text: "Keep looking.",
                nextText: 23
            }
        ]
    },
    {
        id: 23,
        text: "Where do you want to check?",
        options: [
            // {
            //     text: "Under the bed?",
            //     nextText: 12
            // },
            // {
            //     text: "In the closet?",
            //     nextText: 13
            // },
            {
                text: "The ceiling?",
                nextText: 18
            }
        ]
    },
    {
        id: 18,
        text: "You realize that you haven't looked up.",
        options: [
           {
                text: "Slowly",
                nextText: 19
            }
        ]
    },
    {
        id: 19,
        text: "...",
        options: [
            {
                text: "You look up...",
                nextText: 22
            }
        ]
    },
    // {
    //     id: 20,
    //     text: "...",
    //     options: [
    //         {
    //             text: "look",
    //             nextText: 21
    //         }

    //     ]
    // },
    // {
    //     id: 21,
    //     text: "...",
    //     options: [
    //         {
    //             text: "up.",
    //             nextText: 22
    //         }
    //     ]
    // },
       {
        id: 22,
        text: "But there's nothing there.",
        options: [
            {
                text: "Walk into the hall.",
            nextText: 11
            }

        ]
    },
    
// {
//     id: 22,
//     text: "The room seems empty",
//     options: [
//         {
//             text: "Walk into the hall.",
//             nextText: 11
//         },
        
//     ]
// },
{
    id: 11,
    text: "You swallow the lump in your throat. You're standing in the doorway now. You get the sense that you're being watched.",
    options: [
        {
            text: "Glance around",
            nextText: 13
        
        }
    ]
},
{
    id: 13,
    text: "You hear the sound of the curtains closing behind you suddenly, as all the light in the bedroom vanishes.",
    options: 
    [
        {
           text: "You turn in shock",
            nextText: 25
        }
    ]
},
{
    id: 25,
    text: "There's a patch of shadow near the bed that seems to be darker than the rest. Something's standing there...",
    options: [
        {
            text: "You're not scared. Step back into the bedroom and confront this intruder.",
            nextText: 26
        },
        {
            text: "The lamp didn't work but surely the hallway light will...",
            nextText: 27
        }
    ]
},
{
    id: 26,
    text: "No one ever saw you again.",
    nextText: -1
}
]

startGame()

// Example code for a new page

// {
//     id: nextText,
//     text: "What the user reads",
//     options: [
//         {
//             text: 'First button',
//             nextText: where it sends
//         },
//         {
//             text: 'Second button',
//             nextText: where it sends
//         },
//     ]
// }