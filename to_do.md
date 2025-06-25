# TO DO

## Styling
- Not found page
- Sidebar character sheet positioning
- Mobile styling for forms
- Uniform buttons

## Content
- Homepage text
- Instructions text on every creation page
- Text for help modal (all shoudld include a link to inspiratino page that opens in new tab so it doesn't redirect user from creation)
- Inspiration page

## Gameplay
~~Proper prompt navigation: adding roll results to current prompt number to determine following prompt so that an endgame is reachable~~
~~Dice rolls should also automatically change a 0 result to a 1, as it does with any negative number~~
- Regarding dice rolls: endgame reached when interval jump exceeds max prompt number. I.e., if there are a max of 20 prompts, and someone is on prompt #17 then rolls to increment by 5, the endgame screen should display or set to final prompt #?.
    - Need a condition check to see if next calculated prompt # is within max # of prompts, if not, then the game ends
- Endgame screen should show all journal entries and final character sheet, along with an option to play again using a new character (wipe store) or their current (start game screen for them to re-import character --- is the re-import necessary? -- check how this button will work)
- Remove prompt number from local storage when user restarts game (i.e., when user goes back to start page then imports new character & when the game ends)
~~Prompt pages need accurate inputs/dropdowns for what the prompt dictates (i.e. selecting more than one skill in a dropdown)~~
- Page showing changes needs to be either reworked, deleted, or fixed to show correct additions/strike-throughs/empty slots (side characters seems to be bugged)
- Way to see character creation progress (timeline & responses thus far) ie mini-navbar on creation pages

## Considerations
- A log or diary of the player's prompt answers. Ie, after user answers prompt #1 and goes to prompt #2, there should appear a sidebar/toggle to show prompt #1 (& all previous) answers 


## To test:
- Does prompt progress reset when user navigates out of game pages? (prompt # is saved in local storage, but the responses are not, but might be saved in store like the character sheet)