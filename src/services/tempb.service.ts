import { Injectable } from '@angular/core';

@Injectable()
export class TempBService {

    constructor() { }

    sayHelloAgain(): string {
        return 'hello from temp2';
    }
}
