import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>Welcome to {{ titleParent }}!</h1>
      <button class="button button-grey" (click)="openPopup()">
        Show Pop-up
      </button>
      <app-pop-up
        *ngIf="showPopup"
        (closed)="closePopup()"
        [title]="titleChild"
      ></app-pop-up>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent {
  titleParent = "life-cycle-app";
  titleChild = "Pop-Up component";
  showPopup = false;

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
