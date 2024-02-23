import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl : string="https://localhost:7082/api/"
  public header=new HttpHeaders({
    Authorization : `Bearer ${localStorage.getItem("AuthToken")}`
  })

  constructor(private http:HttpClient) { }

  loginApiCall(endPoint : string,data : object):Observable<any>{
    
   return this.http.post(this.baseUrl+endPoint,data)
  }

  registerApiCall(endPoint:string,data:object):Observable<any>{
    return this.http.post(this.baseUrl+endPoint,data)
  }

  getAllNotesApiCall(endPoint:string):Observable<any>{
    
    return this.http.get(this.baseUrl+endPoint,{
      headers:this.header
    })

  }


  createNotesApiCall(endPoint:string,data:object):Observable<any>{
    return this.http.post(this.baseUrl+endPoint,data,{headers:this.header})
  }

  updateArchiveApiCall(endPoint:string,noteId:number):Observable<any>{
    return this.http.put(this.baseUrl+endPoint+`?noteId=`+noteId,"",{headers:this.header})//https://localhost:7082/api/Notes/UpdateArchive?noteId=4
  }

  updateTrashApiCall(endPoint:string,noteId:number):Observable<any>{
    return this.http.put(this.baseUrl+endPoint+`?noteId=`+noteId,"",{headers:this.header})
  }

  updateColorApiCall(endPoint:string,noteId:number,color:string):Observable<any>{
    const encodedColor = encodeURIComponent(color);

    return this.http.put(this.baseUrl+endPoint+`?noteId=`+noteId+`&color=`+encodedColor,"",{headers:this.header})
  }

  DeleteNoteApiCall(endPoint:string,noteId:number):Observable<any>{
    return this.http.delete(this.baseUrl+endPoint+`?noteId=`+noteId,{headers:this.header})
  }
}
