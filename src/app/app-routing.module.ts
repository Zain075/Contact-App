import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'ContactManager',pathMatch:'full'
  },
  //listing all contacts
  {
    path:'ContactManager',component:ContactManagerComponent
  },
  //ading new contacts 
  {
    path:'ContactManager/addContact',component:AddContactComponent
  },
  //view a particular contact
  {
    path:'ContactManager/view/:Id',component:ViewContactComponent
  },
  //edit a particular detail
  {
    path:'ContactManager/edit/:contactId',component:EditContactComponent
  },
  //page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
