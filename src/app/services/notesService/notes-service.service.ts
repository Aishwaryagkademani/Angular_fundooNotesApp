import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor( private httpService:HttpServiceService) { }

  getAllNotes(){
    return this.httpService.getAllNotesApiCall("Notes/GetAllNotes")
  }

  createNote(data:object){
    return this.httpService.createNotesApiCall("Notes/NoteCreation",data)
  }

  updateArchive(noteId:number){
    // console.log(noteId);
    return this.httpService.updateArchiveApiCall("Notes/UpdateArchive",noteId)
  }

  updateTrash(noteId:number){
    return this.httpService.updateTrashApiCall("Notes/UpdateTrash",noteId)
  }

  updateColor(noteId:number,color:string){
    return this.httpService.updateColorApiCall("Notes/UpdateColor",noteId,color)
  }

  deleteNote(noteId:number){
    return this.httpService.DeleteNoteApiCall("Notes/DeleteNotebyId",noteId)
  }
}
