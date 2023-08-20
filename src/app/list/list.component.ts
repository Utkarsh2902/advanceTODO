import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../class/list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
todoName:String=" ";
todoList: Todo[]=[
  
]
finishedList: Todo[]=[

]
constructor(private modalService: NgbModal){
}
todoAdd(){
 this.todoList.push({content:this.todoName,value:false});
 this.todoName= '';
}
todoChange(i:number){
const item=this.todoList.splice(i,1)
this.finishedList.push(item[0]);
}
afterChange(i:number){
const item=this.finishedList.splice(i,1)
this.todoList.push(item[0])
}

openModal(content: TemplateRef<Element>,i:number,type:string){
  this.modalService.open(content,{ariaLabelledBy:'modal-basic-title'}).result.then(
   (result)=>{
if(type=='todoList'){
  this.todoList.splice(i,1)
}else{
this.finishedList.splice(i,1)
}
   },
   (reason)=>{

   }

  )
}
}
