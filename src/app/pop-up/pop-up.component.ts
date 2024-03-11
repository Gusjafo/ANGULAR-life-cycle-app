import { Component, EventEmitter, Input, Output, SimpleChange } from "@angular/core";
import { Logger } from "../logger.service";

@Component({
  selector: "app-pop-up",
  template: `
    <div class="popup-overlay"></div>
    <div class="popup-container">
      <div class="popup-header">
        <h2>{{ title }}</h2>
        <br />
        <button (click)="closePopup()">
          Close Pop-Up
        </button>
      </div>
      <div class="popup-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
      }
      .popup-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 50px;
        border-radius: 5px;
        z-index: 1000;
      }
      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        flex-direction: column;
        text-align: center;
      }
    `,
  ],
})
export class PopUpComponent {
  constructor(private logger: Logger) {}

  @Output() closed = new EventEmitter<void>();
  @Input() title!: string;

  ngOnChanges(changes: SimpleChange) {
    this.logIt("OnChanges"); // it could be console.log("OnChanges")
    console.log(changes);
  }

  ngOnInit() {
    this.logIt("OnInit");
  }

  ngDoCheck() {
    this.logIt("DoCheck");
  }

  ngAfterContentInit() {
    this.logIt("AfterContentInit");
  }

  ngAfterContentChecked() {
    this.logIt("AfterContentChecked");
  }

  ngAfterViewInit() {
    this.logIt("AfterViewInit");
  }

  ngAfterViewChecked() {
    this.logIt("AfterViewChecked");
  }

  ngOnDestroy(): void {
    this.logIt("OnDestroy");
  }

  //////////////////////////////
  closePopup(): void {
    this.closed.emit();
  }

  logIt(msg: string) {
    this.logger.log(`${msg.toUpperCase()} on POP-UP component`);
  }
}
