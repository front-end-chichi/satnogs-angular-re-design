import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-table-row',
  templateUrl: './mobile-table-row.component.html',
  styleUrl: './mobile-table-row.component.css'
})
export class MobileTableRowComponent {
  @Input() satellite!: String;
  @Input() observationId!: String;


  onRightUpperRowClick(event: any)
  {
    let clickedIcon = event.target;

    let parentElement = clickedIcon.closest('.mobile-table-row');
    
    if( parentElement.classList.contains('selected') )
     {
      parentElement.classList.remove("selected");
    }
    else parentElement.classList += ' selected';
  }

}
