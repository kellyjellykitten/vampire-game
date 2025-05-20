export const gamePrompts = [
    {
        id: 1,
        text: "In your blood-hunger you destroy someone close to you. Kill a mortal Character. Create a mortal if none are available. Take the skill Bloodthirsty.",
        instructions: {
            addSideCharacter: true,
            loseSideCharacter: true,
            loseSideCharacterCount: 1,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 2,
        text: "Horrified at your new nature, you withdraw from society. Where do you hide? How do you feed? Create a stationary Resource which shelters you.",
        instructions: {
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 3,
        text: "A loved one discovers your condition and works to help you. Create a Resource which represents their assistance. Create a mortal Character if none are available.",
        instructions: {
            addResource: true,
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 4, 
        text: "You are exposed and flee to a neighboring region. Lose any stationary Resources. Check a Skill. A mortal flees with you. What new name do you adopt among these strangers?",
        instructions: {
            loseResource: true,
            loseResourceCount: 4,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 5,
        text: "You murder someone you love or respect rather than let them expose you. Kill a Character. Check a Skill. If you have no living Characters, kill no one and create a beloved mortal Character who you have betrayed.",
        instructions: {
            addSideCharacter: true,
            loseSideCharacter: true,
            loseSideCharacterCount: 1,
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
        text: "Your body manifests some trait related to the vampire that created you. How do you become more like them? Create a Skill that reflects this.",
        instructions: {
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 8,
        text: "You are recognized for what you are by another creature like yourself. Create an immortal Character, lose a Resource, and gain a Skill. What did you lose to them?",
        instructions: {
            addSideCharacter: true,
            loseResource: true,
            loseResourceCount: 1,
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 9,
        text: "You develop a system for feeding. What is it? What happens to those who die? Create a Skill that reflects this.",
        instructions: {
            addSkill: true,
            addExperience: true,
        }
    },
    {
        id: 10,
        text: "The stars pinwheel above you at night. The seasons are a blur. You are as an automaton, unconscious of the passage of decades. A century passes. Strike out a Memory. Strike out all mortal Characters.",
        instructions: {
            loseSideCharacter: true,
            loseSideCharacterCount: 5,
            loseMemory: true,
            addExperience: true,
        }
    },
    {
        id: 11,
        text: "How do you find solace from the raging hunger within you? You may lose one checked or unchecked Skill.",
        instructions: {
            loseSkill: true,
            loseSkillCount: 1,
            addExperience: true,
        }
    },
    {
        id: 12,
        text: "New laws or social mores make it harder for you to hide among the populace. How are you nearly caught and destroyed? Check a Skill. Create a Skill. Create a mortal criminal who assists you.",
        instructions: {
            addSkill: true,
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 13,
        text: "Generations of the same family serve you. This line starts from any living mortal Character, or from the descendants of a dead mortal Character. What bizarre rituals do they tie to their servitude? Lose a Resource and create a Servitors of the Lineage Resource.",
        instructions: {
            loseResource: true,
            loseResourceCount: 1,
            addResource: true,
            addExperience: true,
        }
    },
    {
        id: 14,
        text: "An enemy Character uses a lost Resource to turn your few friends against you. Check three Skills to regain the Resource, or check one Skill to barely survive. Which former friend did you kill? Where do you flee?",
        instructions: {
            addResource: true,
            loseSideCharacter: true,
            loseSideCharacterCount: 1,
            addExperience: true,
        }
    },
    {
        id: 15,
        text: "While traveling you come into conflict with another immortal. Gain a Mark. Who are they? What trick did you play upon them? Create a new immortal Character.",
        instructions: {
            addSideCharacter: true,
            addExperience: true,
        }
    },
    {
        id: 16,
        text: "Some mortals have banded together to hunt you, well-armed and wise to your tricks. How do you defeat or evade them? Create a mortal hunter related to one of your checked Skills. Check a Skill.",
        instructions: {
            addSideCharacter: true,
            addExperience: true,
        }
    },
];

// Function to get a prompt by prompt number (1-10)
export const getPromptById = (promptId) => {
    // Make sure we have a valid number between 1-10
    const safePromptId = Math.max(1, Math.min(16, promptId));
    
    // Find the prompt with matching ID, or return the first prompt as fallback
    return gamePrompts.find(prompt => prompt.id === safePromptId) || gamePrompts[0];
};