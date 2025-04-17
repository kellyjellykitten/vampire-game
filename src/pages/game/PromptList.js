// Need logic for "Check a Skill" and "striking" memories, characters, etc

export const gamePrompts = [
    {
        id: 1,
        text: "In your blood-hunger you destroy someone close to you. Kill a mortal Character. Create a mortal if none are available. Take the skill Bloodthirsty.",
        instructions: {
            addSideCharacter: true,
            loseSideCharacter: true,
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
            loseMemory: true,
            addExperience: true,
        }
    },
];

// Function to get a prompt by prompt number (1-10)
export const getPromptById = (promptId) => {
    // Make sure we have a valid number between 1-10
    const safePromptId = Math.max(1, Math.min(10, promptId));
    
    // Find the prompt with matching ID, or return the first prompt as fallback
    return gamePrompts.find(prompt => prompt.id === safePromptId) || gamePrompts[0];
};