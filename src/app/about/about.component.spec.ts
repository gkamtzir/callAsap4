import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('Component: AboutComponent', () => {

    let about;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AboutComponent ]
        }).compileComponents();
    });

    beforeEach(() => {

        about = TestBed.createComponent(AboutComponent);
        fixture = about.componentInstance;

    });

    it('should be defined', () => {

        expect(about).toBeDefined();

    });

});
