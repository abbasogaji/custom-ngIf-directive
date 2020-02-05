import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'custom-ngif-directive';
  userViewableSections = ["bio-section", "friends-section", "posts-section"]
  ngOnInit(){

  }

  toggleSection($event, index){
    switch(index){
      case 0:
        ($event.target.checked) ? this.userViewableSections[index] = "bio-section" : this.userViewableSections.splice(index,1);
        this.userViewableSections = this.userViewableSections.slice()
      break;
      case 1:
        ($event.target.checked) ? this.userViewableSections[index] = "friends-section" : this.userViewableSections.splice(index,1);
        this.userViewableSections = this.userViewableSections.slice()
      break;
      case 2:
        ($event.target.checked) ? this.userViewableSections[index] = "posts-section" : this.userViewableSections.splice(index,1);
        this.userViewableSections = this.userViewableSections.slice()
      break;
      case 3:
        ($event.target.checked) ? this.userViewableSections[index] = "system-config" : this.userViewableSections.splice(index,1);
        this.userViewableSections = this.userViewableSections.slice()
      break;
      case 4:
        ($event.target.checked) ? this.userViewableSections[index] = "admin-panel" : this.userViewableSections.splice(index,1);
        this.userViewableSections = this.userViewableSections.slice()
      break;
    }

    console.log(this.userViewableSections)
  }
  
}
