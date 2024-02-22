import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { FundooHeaderComponent } from './components/fundoo-header/fundoo-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotesCardComponent,
    CreateNoteComponent,
    NotesContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    DashboardLayoutComponent,
    FundooHeaderComponent,
    SideNavComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
