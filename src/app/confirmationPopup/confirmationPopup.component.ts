import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmationPopup.component.html',
    styleUrls: ['./confirmationPopup.component.scss'],
    animations: [routerTransition()]
})
export class ConfirmationPopupComponent implements OnInit {
    @Input() title: string;
    @Input() message: string;
    @Input() btnOkText: string;
    @Input() btnCancelText: string;
    constructor(private activeModal: NgbActiveModal) {
    }
    public decline() {
        this.activeModal.close(false);
      }
      public accept() {
        console.log('into accept');
        this.activeModal.close(true);
        console.log('out of accept');
      }
      public dismiss() {
        this.activeModal.dismiss();
      }

    ngOnInit() {}
}
