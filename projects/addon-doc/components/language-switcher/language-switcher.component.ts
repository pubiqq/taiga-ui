import {NgForOf, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    tuiCapitalizeFirstLetter,
    TuiDataListModule,
    TuiFlagPipe,
    TuiFlagPipeModule,
} from '@taiga-ui/core';
import {TuiCountryIsoCode, TuiLanguageName, TuiLanguageSwitcher} from '@taiga-ui/i18n';
import {TuiSelectModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-language-switcher',
    imports: [
        ReactiveFormsModule,
        TuiDataListModule,
        NgForOf,
        TitleCasePipe,
        TuiFlagPipeModule,
        TuiSelectModule,
    ],
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // TODO: for backward compatibility only. Drop in v4.0
        TuiFlagPipe,
    ],
})
export class TuiLanguageSwitcherComponent {
    readonly language = new FormControl(tuiCapitalizeFirstLetter(this.switcher.language));

    readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['belarusian', TuiCountryIsoCode.BY],
        ['chinese', TuiCountryIsoCode.CN],
        ['dutch', TuiCountryIsoCode.NL],
        ['english', TuiCountryIsoCode.GB],
        ['french', TuiCountryIsoCode.FR],
        ['german', TuiCountryIsoCode.DE],
        ['italian', TuiCountryIsoCode.IT],
        ['kazakh', TuiCountryIsoCode.KZ],
        ['malay', TuiCountryIsoCode.MY],
        ['polish', TuiCountryIsoCode.PL],
        ['portuguese', TuiCountryIsoCode.PT],
        ['russian', TuiCountryIsoCode.RU],
        ['spanish', TuiCountryIsoCode.ES],
        ['turkish', TuiCountryIsoCode.TR],
        ['ukrainian', TuiCountryIsoCode.UA],
        ['vietnamese', TuiCountryIsoCode.VN],
    ]);

    readonly names: TuiLanguageName[] = Array.from(this.flags.keys());

    constructor(
        @Inject(TuiLanguageSwitcher) readonly switcher: TuiLanguageSwitcher,
        @Inject(TuiFlagPipe) private readonly flagPipe: TuiFlagPipe,
    ) {}

    /**
     * @deprecated use `<img [src]="countryIsoCode | tuiFlagPipe" />`
     * TODO drop in v4.0
     */
    getFlagPath(code?: TuiCountryIsoCode): string | null {
        return this.flagPipe.transform(code);
    }
}
