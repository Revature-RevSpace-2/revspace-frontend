import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';

import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PopulateFeedComponent } from './components/populate-feed/populate-feed.component';
import { TopComponent } from './components/top/top.component';
import { ImageService } from './services/image.service';
import { DatePipe } from './pipes/date.pipe';

import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { LeavingEditAlertComponent } from './components/leaving-edit-alert/leaving-edit-alert.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
<<<<<<< HEAD
import { ViewGroupsComponent } from './components/view-groups/view-groups.component';
import { ViewGroupThreadComponent } from './components/view-group-thread/view-group-thread.component';
=======
import { CreateGroupComponent } from './components/create-group/create-group.component';
>>>>>>> 720dcb9bd00b0ad15804e03181b6d6801fc27f9b



@NgModule({
  declarations: [
    AppComponent,
    PostFeedComponent,
    CreatePostComponent,
    PopulateFeedComponent,
    RegisterFormComponent,
    ViewProfileComponent,
    LoginComponent,
    TopComponent,
    DatePipe,
    EditUserProfileComponent,
    LeavingEditAlertComponent,
    SearchBarComponent,
    ChangePasswordComponent,
    SearchDetailsComponent,
<<<<<<< HEAD
    ViewGroupsComponent,
    ViewGroupThreadComponent
=======
    CreateGroupComponent
>>>>>>> 720dcb9bd00b0ad15804e03181b6d6801fc27f9b
  ],
  
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
