import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './templates/nav/nav.component';
import { OptionsBarComponent } from './templates/options-bar/options-bar.component';
import { ErrorComponent } from './templates/error/error.component';
import { PublishPostComponent } from './sub-components/publish-post/publish-post.component';
import { LateralBarComponent } from './templates/lateral-bar/lateral-bar.component';
import { SearchComponent } from './components/search/search.component';
import { AccountComponent } from './templates/account/account.component';
import { PostsPreviewComponent } from './templates/posts-preview/posts-preview.component';
import { EditProfileComponent } from './templates/edit-profile/edit-profile.component';
import { ModifyNicknameComponent } from './sub-components/modify-nickname/modify-nickname.component';
import { ModifyNameComponent } from './sub-components/modify-name/modify-name.component';
import { ModifyProfileImgComponent } from './sub-components/modify-profile-img/modify-profile-img.component';
import { PostsComponent } from './templates/posts/posts.component';
import { OptionsAccountComponent } from './templates/options-account/options-account.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CommentBarComponent } from './templates/comment-bar/comment-bar.component';
import { PublishVideoComponent } from './sub-components/publish-video/publish-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    SigninComponent,
    SignupComponent,
    NavComponent,
    OptionsBarComponent,
    ErrorComponent,
    PublishPostComponent,
    LateralBarComponent,
    SearchComponent,
    AccountComponent,
    PostsPreviewComponent,
    EditProfileComponent,
    ModifyNicknameComponent,
    ModifyNameComponent,
    ModifyProfileImgComponent,
    PostsComponent,
    OptionsAccountComponent,
    SettingsComponent,
    CommentBarComponent,
    PublishVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
