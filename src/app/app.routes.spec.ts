import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

describe('Router', () => {

    let fixture;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot(AppRoutes),
                AppModule
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });

    });

    it('should navigate to home page', async(() => {

        fixture = TestBed.createComponent(AppComponent);
        TestBed.get(Router)
            .navigate(['/home']).then(() => {
                expect(location.pathname.endsWith('/')).toBe(true);
            }).catch(e => console.log(e));

    }));

    it('should navigate to seach page', async(() => {

        fixture = TestBed.createComponent(AppComponent);
        TestBed.get(Router)
            .navigate(['/search']).then(() => {
                expect(location.pathname.endsWith('/search')).toBe(true);
            }).catch(e => console.log(e));

    }));

    it('should navigate to about page', async(() => {

        fixture = TestBed.createComponent(AppComponent);
        TestBed.get(Router)
            .navigate(['/about']).then(() => {
                expect(location.pathname.endsWith('/about')).toBe(true);
            }).catch(e => console.log(e));

    }));

    it('should navigate to the default page (home)', async(() => {

        fixture = TestBed.createComponent(AppComponent);
        TestBed.get(Router)
            .navigate(['/randompage']).then(() => {
                expect(location.pathname.endsWith('/')).toBe(true);
            }).catch(e => console.log(e));

    }));

});
