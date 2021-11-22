import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {ViewProfileComponentComponent} from './components/view-profile-component/view-profile-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'postfeed', component: PostFeedComponent },
  {path: 'viewprofile/:userId', component: ViewProfileComponentComponent},
  { path: 'register', component: RegisterFormComponent},
  {path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
