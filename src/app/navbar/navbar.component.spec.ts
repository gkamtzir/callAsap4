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

        fixture = TestBed.createComponent(NavbarComponent);
        navbar = fixture.componentInstance;

    });

    it('should be defined', () => {

        expect(navbar).toBeDefined();

    });

});
