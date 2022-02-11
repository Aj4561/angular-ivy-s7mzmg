import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  message = "I'm read only!";
  canEdit = false;
  onEditClick(){
    this.canEdit =!this.canEdit;
    if(this.canEdit){
      this.message = 'you can edit me!';
    }
    else{
      this.message = "I'm read only!";
    }
  }
}
