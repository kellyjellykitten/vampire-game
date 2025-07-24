export const gamePrompts = [
    {
        id: 1,
        text: "In your blood-hunger you destroy someone close to you. Kill a mortal Character. Who do you kill? How do you kill them? Gain a skill related to your kill method.",
        instructions: {
            loseSideCharacter: true,
            loseSideCharacterCount: 1,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 2,
        text: "Horror-struck at your new nature, you withdraw from society. Where do you hide? How do you feed? Create a Resource which shelters you.",
        instructions: {
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 3,
        text: "You develop a system for feeding. What is it? What happens to those who die? Create a Skill that reflects this.",
        instructions: {
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 4, 
        text: "You are exposed and flee to a neighboring region. Lose any stationary Resources. A mortal flees with you. What new name do you adopt among these strangers? Which Character escapes with you and why?",
        instructions: {
            loseResource: true,
            loseResourceCount: 4,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 5,
        text: "Your body manifests some trait related to the vampire that created you. How do you become more like them? Create a Skill that reflects this.",
        instructions: {
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 6,
        text: "A mortal Character begins serving you. Who are they? Why are they drawn to you? Create a new mortal Character.",
        instructions: {
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 7,
        text: "When taking refuge in a modest study, you encounter a book which feels familiar to you. It glows, almost beckoning you. Create a Resource which is this book. What does it look like? When you flip to a random page, what do you find?",
        instructions: {
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 8,
        text: "You murder someone you love or deeply respect rather than let them expose you. Kill a Character. How do you kill them?",
        instructions: {
            loseSideCharacter: true,
            loseSideCharacterCount: 1,
            addExperience: true,
        }
    },
    {
        id: 9,
        text: "New laws or social customs make it harder for you to hide among the populace. How are you nearly caught and destroyed? Create a Skill. Create a mortal criminal who assists you.",
        instructions: {
            addSideCharacter: true,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 10,
        text: "Generations of the same family serve you. This line starts from any living mortal Character, or from the descendants of a dead mortal Character. What bizarre rituals do they tie to their servitude? Lose a Resource.",
        instructions: {
            loseResource: true,
            loseResourceCount: 1,
            addExperience: true,
        }
    },
    {
        id: 11,
        text: "Some mortals have banded together to hunt you, well-armed and wise to your tricks. How do you defeat or evade them? Create a mortal hunter Side Character related to one of your Skills.",
        instructions: {
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 12,
        text: "You discover that you can transform into an animal. What kind of animal? How do you use this power? Gain a Skill related to your animal.",
        instructions: {
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 13,
        text: "You keep a prisoner. Why this particular person? Why don’t you feed upon them? Create a Character and a Skill related to keeping them captive.",
        instructions: {
            addSideCharacter: true,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 14,
        text: "A mortal Character confesses their romantic interest in you. They request you turn them, to allow you both to be together eternally. How do you react? Do you agree? Lose a Skill.",
        instructions: {
            loseSkill: true,
            loseSkillCount: 1,
            addExperience: true,
        }
    },
    {
        id: 15,
        text: "You are involuntarily sealed off from civilization for a lifetime. How did this happen? Lose all mortal Characters. An immortal finds and rescues you. How do they know you? What do they want from you? Create an immortal Character.",
        instructions: {
            loseSideCharacter: true,
            loseSideCharacterCount: 7,
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 16,
        text: "You awaken covered in dust. Generations have passed. Your sleeping place has been sealed off. How do you escape? Lose a Resource. Lose all mortal Characters.",
        instructions: {
            loseResource: true,
            loseResourceCount: 1,
            loseSideCharacter: true,
            loseSideCharacterCount: 7,
            addExperience: true,
        }
    },
    {
        id: 17,
        text: "Vast numbers of humans are migrating around the world. What group becomes easy to feed upon? How do you capitalize on their helplessness? Create a Resource.",
        instructions: {
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 18,
        text: "A group of vampire hunters invade your home while they presume you are asleep. Create a mortal Character and note that they are a member of this group. Choose a Character whom you already know and note that they too are a member of this group. What trick is up their sleeve? How do you escape? Lose a Resource.",
        instructions: {
            addSideCharacter: true,
            loseResource: true,
            loseResourceCount: 1,
            addExperience: true,
        }
    },
    {
        id: 19,
        text: "You find yourself attending a very fancy ball, masked. There are people and things on display too beautiful not to claim as your own. Create a Character. Create a Resource. Who was this person up until tonight? How do they become yours? And what does the object you take mean to its previous owner?",
        instructions: {
            addSideCharacter: true,
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 20,
        text: "You are unknowingly transported like cargo as you slumber. Who might have moved you? You awaken an uncertain amount of time later, somewhere entirely foreign. Lose all Resources you didn’t keep on your person. What can you see around you?",
        instructions: {
            loseResource: true,
            loseResourceCount: 7,
            addExperience: true,
        }
    },
    {
        id: 21,
        text: "Wars rage throughout the region in which you reside. You become a spy, selling out the land you call home. Which Character suffers and dies because of your actions? Lose a Character.",
        instructions: {
            loseSideCharacter: true,
            loseSideCharacterCount: 1,
            addExperience: true,
        }
    },
    {
        id: 22,
        text: "You discover an immortal and are immediately smitten. Create an immortal Character. You become obsessed with the immortal, following them, longing to be with them. Whether you realize it or not, you begin to mimic them. Gain a Skill that reflects this.",
        instructions: {
            addSideCharacter: true,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 23,
        text: "An antiquity has surfaced which is directly tied to your mortal life. Lose a Resource, then gain the antiquity as a Resource. Because of this antiquity, someone has begun to hunt you. Create a mortal Character. How do they almost expose you?",
        instructions: {
            loseResource: true,
            loseResourceCount: 1,
            addResource: true,
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 24,
        text: "You find companionship in something that is not human. Is it an animal, or maybe something inanimate? How do you interact with it? How did you find it, or did it find you? Create a Resource to represent this companion.",
        instructions: {
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 25,
        text: "You are caught outside and destroyed. What happened? The game is over.",
        instructions: {
            addExperience: true,
        }
    },
    {
        id: 26,
        text: "The mortal world thoroughly destroys itself and you remain, a powerful figure standing over the wreckage. What happened? What do you do now with your time? The game is over.",
        instructions: {
            addExperience: true,
        }
    },
    {
        id: 27,
        text: "An old friend or foe murders you in your sleep. What do you see in those seconds between dream and non-existence? The game is over.",
        instructions: {
            addExperience: true,
        }
    },
    {
        id: 28,
        text: "You discover a way to become mortal. Do you take it? What led you to your decision? The game is over.",
        instructions: {
            addExperience: true,
        }
    },
    {
        id: 29,
        text: "Creatures like yourself have taken over the Earth. What is your position in this new world? The game is over.",
        instructions: {
            addExperience: true,
        }
    },
    {
        id: 30,
        text: "You are trapped in a place from which you will never be rescued. What do you think about for the first thousand years? The game is over.",
        instructions: {
            addExperience: true,
        }
    }
];

// Function to get a prompt by prompt number
export const getPromptById = (promptId) => {
    // Make sure we have a valid number between 1-30
    const safePromptId = Math.max(1, Math.min(30, promptId));
    
    // Find the prompt with matching ID, or return the first prompt as fallback
    return gamePrompts.find(prompt => prompt.id === safePromptId) || gamePrompts[0];
};