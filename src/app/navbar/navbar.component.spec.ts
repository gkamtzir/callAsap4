import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('Component: NavbarComponent', () => {

    let navbar;
    let fixture;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ NavbarComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();

    });

    beforeEach(() => {

        navbar = TestBed.createComponent(NavbarComponent);

    });

    it('should be defined', () => {

        expect(navbar).toBeDefined();

    });

});
