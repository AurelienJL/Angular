import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: `<h2> DANGER </h2>`,
    styles: [`
        h2 {
            color: red;
            background-color: lightcoral;
        }
    `]

})
export class WarningAlertComponent{
}