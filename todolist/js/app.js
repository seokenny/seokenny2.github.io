var todoList = {
	todos: [],
	displayTodos: function(){
		if(this.todos.length == 0){
			console.log("There are no todos");
		}
		else {
			console.log("My Todos:");
			for(var i = 0; i < this.todos.length; i++){
				if(this.todos[i].completed == true){
					console.log(this.todos[i].todoText + " (x)");
				}
				else console.log(this.todos[i].todoText + " ( )");
			}
		}
	},
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		view.displayTodos();
	},
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		view.displayTodos();
	},
	deleteTodo: function(position){
		this.todos.splice(position, 1);
		view.displayTodos();
	},
	toggleCompleted: function(position){
		this.todos[position].completed = !this.todos[position].completed;
		view.displayTodos();
	},
	toggleAll: function(){
		var numTrue = 0;
		for(var i = 0; i < this.todos.length; i++){
			if(this.todos[i].completed == true){
				numTrue++;
			}
		}
		if(numTrue == 0 || numTrue !== this.todos.length && numTrue > 0){
			for(var j = 0; j < this.todos.length; j++){
				this.todos[j].completed = true;
			}
		}
		else for(var k = 0; k < this.todos.length; k++){
			this.todos[k].completed = false;
		}
		view.displayTodos();
	}
}

var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
	},
	addTodo: function(){
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		//You have to put .value because it is a property of the DOM document
		todoList.addTodo(addTodoTextInput.value);
	},
	changeTodo: function(){
		var changeTodoInputPosition = document.getElementById("changeTodoInputPosition");
		var changeTodoInputText = document.getElementById("changeTodoInputText");
		//.valueAsNumber gets the value as a number
		todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
	},
	deleteTodo: function(position){
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function(){
		var toggleCompletedInputPosition = document.getElementById("toggleCompletedInputPosition");
		todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
	}
}

var view = {
	displayTodos: function(){
		var todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";
		for(var i = 0; i < todoList.todos.length; i++){
			var todoLi = document.createElement("li");
			var todoCompleted = "";
			if(todoList.todos[i].completed == true){
				todoCompleted = " (x)";
			}
			else {
				todoCompleted = " ( )";
			}
			todoLi.id = i;
			todoLi.textContent = todoList.todos[i].todoText + todoCompleted;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);		
		}
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		this.todos
		return deleteButton;
	},
	setUpEventListeners: function(){
		var todosUl = document.querySelector("ul");

		todosUl.addEventListener("click", function(event){
			var elementClicked = event.target;
			if(elementClicked.className === 'deleteButton'){
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();
