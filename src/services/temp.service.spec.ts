import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TempService } from './temp.service';
import { TempBService } from './tempb.service';

describe('Service: TempService', async () => {

    let testService: TempService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [],
            providers: [
                TempBService,
                TempService
            ]
        })
            .compileComponents()
            .then(inject([TempService], (s: TempService) => {
                testService = s;
            }))
    }));

    it('should have the service loaded', () => {

        expect(testService).toBeDefined();
    });


    it('should say hello', () => {

        expect(testService.sayHello()).toBe('hello from TempService');
    });

});
