# React Calculator

The React Calculator was built to emulate Mac's calculator style using ReactJS. This project taught me the significance of creating
modular, reusable components. I created a component called 'Button.js' that was reused for each numerical button which could be operated 
on to calculate the desired result. The benefit of this technique is that I could call a function to set the state that ulitmately produced
the value calculated from the buttons that users create. This also made it much easier to style several componets to look the same, just
hold a different value. (See src/App.js and src/components/Button.js)

Buttons with a specific purpose,like clear, and input have their own components. 

## Built With: 
- ReactJS 
- HTML
- CSS 

<img width="521" alt="screen shot 2018-11-11 at 6 37 14 pm" src="https://user-images.githubusercontent.com/38674075/48323529-72217e00-e5e1-11e8-9525-66f57bd93732.png"> 

## Future Improvements
- Add a history section to view prior calculations 
- Create toggle to add more advanced mathematical operations for a Scientific Calculator

