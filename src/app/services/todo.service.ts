import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';



//Used for Put Request
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';
  
  constructor(private http:HttpClient) { }

  //TODO list
  getTodos():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  //Toggle compelted
  toggleCompelted(todo:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<any>(url,todo,httpOptions);
  }

  //Delte
  onDelete(todo:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<any>(url,httpOptions);

  }


  addTodo(todo:Todo):Observable<any>{
    return this.http.post<any>(this.todosUrl,todo,httpOptions);
  }
}
