import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';

const routes: Routes = [
  {
    path : "register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  // {
  //   path:"notes",
  //   component:NotesComponent
  // },
  {
    path:"create-note",
    component:CreateNoteComponent
  },
  {
    path:"dashboard",
    component:DashboardLayoutComponent,
    children:[{
      path:"notes",
      component:NotesContainerComponent

    },
  {
    path:"archive",
    component:ArchiveContainerComponent
  },
  {
    path:"trash",
    component:TrashContainerComponent
  }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
