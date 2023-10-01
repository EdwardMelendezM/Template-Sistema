import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.css']
})
export class ModalConfirmDeleteComponent {

  private activeModal = inject(NgbActiveModal)

  onCloseModal() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    console.log('recibiendo');
  }

  onConfirm() {
    this.activeModal.close('success');
  }
}
