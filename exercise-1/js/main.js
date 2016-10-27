// Main.js
$(function() {
    // Setup: Initialize Firebase using the configuration of your project

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAEiJKcspvML9jE38BzZ7-pPtuv8dRvBuA",
        authDomain: "fir-class-exercise.firebaseapp.com",
        databaseURL: "https://fir-class-exercise.firebaseio.com",
        storageBucket: "fir-class-exercise.appspot.com",
        messagingSenderId: "464350063803"
      };
      firebase.initializeApp(config);


    // Reading Data: Create new database reference 'todos'
    var todos = firebase.database().ref('todos');

    // Reading Data:
    // Set listener: on change, empty the todo list, and iterate through to make a new list
    todos.on('value', function(snapshot){
        var data = snapshot.val();
        Object.keys(data).forEach(function(key) {
            renderTodo(key, data[key]);
        })
    });





    // Rendering Data: Function to make todos
    var renderTodo = function(id, content) {

        // Create new todo <div> with classes 'todo', and the priority of the item
        var newTodo = $('<div>').addClass('todo ' + content.urgency);
        // Create an <h5> element, set it's text to the description, and class as the status
        var text = $('h5').text(content.description).addClass(content.status);
 
        // Update Data: create a check icon with click event
            // Flip the status on click
            // Set the child values of the item
            // todos.child(id).set({
            //     description: 'new description',
            //     priority: 'new priority',
            //     status: 'new status'
            // });


        // Deleting data: Delete icon: on click, remove the reference

        // Update/Delete data: append the icons to the newTodo item


        // Append newTodo item to item with id #todo-list

    };

    // Reading Data: Form submission
    $('form').on('submit', function(event) {
        event.preventDefault();

        // Get values
        var priority = $(this).find('input:checked')[0].id;
        var text = $(this).find('input').val();

        // Reading Data: Push new item into `todos` reference
        todos.push({
            description: text,
            urgency: priority,
            priority: 'incomplete'
        });


        // Reset the form
        this.reset();
    });
});
