import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private activeModal = inject(NgbActiveModal)
  @Input() data: string = ''

  onCloseModal() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    console.log('recibiendo', this.data);
  }
}