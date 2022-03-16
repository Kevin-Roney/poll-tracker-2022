## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


*Rubric link for reference*(https://github.com/alchemycodelab/poll-tracker)

![wireframe](./assets/wireframePlan.png "wireframe of *initial* plan")

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

**HTML layout**
<main>
<section id="polls">
    <div id="option1">
        <h2>Enter an option!</h2>
        <input id="input-option1"></input>
    </div>
    <div id="add-options">
        <button id="add-options-button">*Click here to add options*</button>
    </div>
    <div id="option2">
        <h2>Enter an option!</h2>
        <input id="input-option2"></input>
    </div>
</section>
<section id="current-poll">
    <div id="current-1">
        <span id="holder-1"></span>
        <button id="add-1">+</button>
        <button id="subtract-1">-</button>
    </div>
    <div id="current-count-1">
    </div>
    <div id="current-2">
        <span id="holder-2">
        <button id="add-2">+</button>
        <button id="subtract-2">-</button>
    </div>
    <div id="current-count-2">
    </div>
    <div id="complete-button">
        <button id="finish-button">Generate Results!</button>
</section>
<section id="completed-polls">
    <div id="ready-for-past-polls">
    </div>
</section> 
</main>