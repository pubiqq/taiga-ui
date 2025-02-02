/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {tuiAssert} from '@taiga-ui/cdk/classes';

export function tuiEaseInOutQuad(t: number): number {
    ngDevMode &&
        tuiAssert.assert(
            t >= 0 && t <= 1,
            'Input must be between 0 and 1 inclusive but received ',
            t,
        );

    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
