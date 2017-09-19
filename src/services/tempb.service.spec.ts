import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TempBService } from './tempb.service';

describe('Service: TempBService', async () => {

    let testService: TempBService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [],
            providers: [
                TempBService
            ]
        })
            .compileComponents()
            .then(inject([TempBService], (s: TempBService) => {
                testService = s;
            }))
    }));

    it('should have the service loaded', () => {

        expect(testService).toBeDefined();
    });


    it('should say hello', () => {

        expect(testService.sayHelloAgain()).toBe('hello from temp2');
    });

});
