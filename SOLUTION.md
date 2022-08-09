# melon

## Staring up
My current system uses vue-cli to start new Vue projects. Therefore, I chose to open terminal within VSCode and ran `npx vue create melon`. This process allows me to start from a boilerplate of code that comes straight from the Vue framework authors. With vue as a wildly used and maintained framework, the application's updatability is baked into the adoption of Vue at the start.

Once the initial instiliation and biolerplate generation completed, I ran a few additional commands: `cd melon`, `vue add pinia`, `vue add tailwind`. These commands give Melon Vue's latest version of app-level state management and a well documented, widely-used styling toolset. Tailwind classes are all available and even customizable based on your project needs.

Then, I added Vue Final Modal https://v3.vue-final-modal.org/setup to quickly acheive an accessible overlaying object for selecting sources for the livestream.

## Atomic Modeling

Once I had the groundwork of packages installed, I began to work on the smallest parts of the UI first, the action buttons. I did my best to abstract the smallest markup and archetype for the basic buttons for the UI: text and an action function

Then, I moved up to the modal and the OptionColumn, their elements and interactions.
I opted for slots for the content to again, make recyclable elements for use in other modals in the future.

When I copleted modifiying the state through the modal, I continued work on the OptionColumn.

## Building up
I completed all of the base components and then continued to work with the application state.

## Difficulties I faced, Questions I had
The screenshare image seems to need to be object-fit differently than the webcam image.

The Chat, Record and Go Live buttons required additional responsive work to not overlap the user's view of the stream. Therefore, I took the steps necessary to add a custom media query to tailwind and add responsiveness to the positioning of the UI. I could imagine those functions in collapsable drawer at the bottom of the screen.

While developing the modal, it seemed unclear to me whether the user would be able to remove, rather than simply hide elements from their stream. I think that would make sense to put next to the hover-to-hide functionality, or an 'X' option with the stream element that is always visible.

The UI images and their states for the screen combinations I believe is something that with more time, I would try to streamline and condense. For time, I opted to take a copy-paste approach for the computed properties, using the figma layer names given from the comps.

After completing the requirements for the UI states, I went back through the Figma comps and applied finishing touches to the media source components.

## Assignment difficulty

*How long did it take you to complete this assignment?* 

I spent a little more than the full alotted time on this. I will admit that I got a bit stuck on a misttyped component that caused the typescript loader to fail. Additionally, I was spending time doing and re-doing my user interactions to make sure I had coverage for all requirements given in the application. I also was possibly over-thinking a way to modularize the image names and states for selecting the layout options.

*What about this assignment did you find most challenging?* 
The most challenging part was covering all the layout options. Making sure the default states applied between selections and toggling the visibility of the screen and webcam.

*What about this assignment did you find unclear?*

Only the inability to remove something from the stream entirely.

*What challenges did you face that you did not expect?*

A pesky typo preventing the project build, bogging down some of my time. That said, this work is the kind I am familiar with and enjoy solving, so I did not find many of the concepts of it too difficult to grasp and implement.

*Do you feel like this assignment has an appropriate level of difficulty?*

Yes, perhaps a bit tedious with manging the selected/non-selected image states, but not bad. (Again, I am probably overthinking something here)

*Did you make certain assumptions and decisions around the UI/UX? Please elaborate on your reasonings*

I began with an assumption that most people using this would be on a larger desktop. However, as I notied the collision of the UI elements on smaller window heights, I had to ditch that assumption and add more responsiveness.

While constructing the modal, I had my assumption that only two sources could be added, and yet the UI seems to indicate you could add more?
