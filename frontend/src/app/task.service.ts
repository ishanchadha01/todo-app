import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private webService: WebService) { }

  getTasks() {
    return this.webService.get('tasks');
  }

  createTask(title:string) {
    return this.webService.post('tasks', { title });
  }

  deleteTask(taskId:string) {
    return this.webService.delete('tasks/${taskId}');
  }
}
