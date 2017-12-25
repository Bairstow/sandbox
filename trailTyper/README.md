### trailTyper
---

Building a typeracer style app in react/redux/node. Planning to use as basis to do some experimenting using d3/other data visualisation library for information design and feedback.

---

#### install issues
- dev issue testing without redux dev tools installed will error out on store creation

---

#### ticked off:
- setup style inlining. currently gulp-clean-css looking to move to webpack.
  - ref: [The case for CSS modules](https://www.youtube.com/watch?v=zR1lOuyQEt8)
- added babel plugin for ... spread object operator transpilation
- implement scaffold pass of game view state
- switch case handle backspace for deletion and spacebar for word completion (refactor to own functions)
- insta-highlight currently typed word and then fade back to normal level on completion
  - fading is made slightly more difficult due to the fact that the text string segments are calculated and updated as passed in props ruling out css transitions most likely, but still think that this could be done programmatically within the component.
- text color indication of mistyped word. (find better error text color)
- axios implemented to fetch bacon ipsum for exercise text values
- reselect implemented for calculating derived progress statistics during active exercise
- creating a radial progress bar component
  - inspiration via @andsens radial progress indicator article on medium

---

#### currently working on:
- handling batched per word dispatch and storage of character entry and errors.
- header component:
  - app home, quick play, practice, leaderboard, user details/login, options menu
- enumerate key codes to ignore on keypress (currently only space and enter, likely more).
- still deciding on how to handle route handling and url navigation (currently implementing react-router v4)
- countdown handling (better solution than setTimeout?)
- test styled-components
- update radial progress bar to display a non-complete circle with rounded ends and progress bar component
- completed game summary page to replace text display and input on completion of the exercise
- implement basic d3 chart showing % progress
- change color scheme to black and white with minor color.
- implement svg logo
- implement home screen with action buttons
- move styles from a proportional to an 8pt grid system.

---

#### trail typer future

- break text fetching out into a standalone service. delivering text, and info from multiple sources

---

#### installation and setup

// deprecated - `npm install yarn` - (if not already installed, recommended -g)
- yarn has own system specific package install now outside the npm environment
- `yarn install` - fetch all node packages
- `yarn dev` - to run dev server bundle
- `yarn test` - to run tests, both via webpack
