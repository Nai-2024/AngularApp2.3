import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMenuComponent } from './custom-menu.component';


describe('CustomMenu', () => {
  let component: CustomMenuComponent;
  let fixture: ComponentFixture<CustomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
