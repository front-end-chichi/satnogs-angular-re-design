import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrl: './data-box.component.css'
})
export class DataBoxComponent {
  @Input() label!: String;
}
