import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule, TuiObscuredDirective} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiCardModule, TuiSurfaceModule} from '@taiga-ui/experimental';
import {
    TuiAvatarModule,
    TuiInputModule,
    TuiSelectModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownComponent} from './dropdown.component';
import {TuiDropdownExample1} from './examples/1';
import {TuiDropdownExample2} from './examples/2';
import {TuiDropdownExample3} from './examples/3';
import {TuiDropdownExample4} from './examples/4';
import {TuiDropdownExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiButtonModule,
        TuiDropdownModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiSelectModule,
        TuiObscuredDirective,
        TuiActiveZoneModule,
        TuiToggleModule,
        TuiInputModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        DropdownDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownComponent)),
    ],
    declarations: [
        ExampleTuiDropdownComponent,
        TuiDropdownExample1,
        TuiDropdownExample2,
        TuiDropdownExample3,
        TuiDropdownExample4,
        TuiDropdownExample5,
    ],
    exports: [ExampleTuiDropdownComponent],
})
export class ExampleTuiDropdownModule {}
