import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

describe('MainPageComponent', () => {
  let fixture: ComponentFixture<MainPageComponent>;
  let component: MainPageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(MainPageComponent);
      component = fixture.componentInstance;
    });
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have a button called "NBA"', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('NBA');
  }));
  it('showMatches function should be called on button click', async(() => {
    spyOn(component, 'showMatches');
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.showMatches).toHaveBeenCalled();
    });
  }));
});
