import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos?:Todo[];
  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo){
    //Delete from UI
    this.todos = this.todos?.filter(t => t.id !== todo.id);
    //Delete from server
    this.todoservice.onDelete(todo).subscribe(data=>{
      console.log(data);
      console.log("Data Deleted successfully")
    });
  }


  addTodo(todo:Todo){
    //add to server
    this.todoservice.addTodo(todo).subscribe(todo=>{
      console.log(todo);
      this.todos?.push(todo);
    });
    //add to UI

  }
}
