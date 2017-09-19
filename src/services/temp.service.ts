import { Injectable } from '@angular/core';
import { TempBService } from './tempb.service';

@Injectable()
export class TempService {

    // constructor() { }       // works
    constructor(private tempb: TempBService) { } // fails

    sayHello(): string {
        return 'hello from TempService';
    }
}
