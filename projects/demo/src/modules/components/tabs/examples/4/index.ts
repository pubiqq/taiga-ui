import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-tabs-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTabsExample4 {
    activeItemIndex = 0;

    constructor(
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
    ) {}

    onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
