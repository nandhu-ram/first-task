import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
   comp='';
   todos=[];
  constructor() { }

  ngOnInit(): void {
  }

  update(event:Event){
    this.comp=(<HTMLInputElement>event.target).value;


  }

  public items = [''];
  
    public newTask='';


    public addToList() {
      if (this.newTask == '') {
      }
      else {
          this.items.push(this.newTask);
          this.newTask = '';
      }
  }

  public deleteTask(index:any) {
      this.items.splice(index, 1);
  }

}
  /*//angular.module('todoApp', [])
  //.controller('TodoListController', function() {
   // var todoList = this;
    
 
    addTodo() {
      todos.push({text:todoText, done:false});
      todoText = '';
    };
 
    remaining () {
      var count = 0;
      forEach(todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    archive() {
      var oldTodos = todos;
      todos = [];
      forEach(oldTodos, function(todo) {
        if (!todo.done)todos.push(todo);
      });
    };
  });
}
*/