import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButoonsListComponent } from './butoons-list.component';

describe('ButoonsListComponent', () => {
  let component: ButoonsListComponent;
  let fixture: ComponentFixture<ButoonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButoonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButoonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
