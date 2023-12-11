import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedContactComponent } from './blocked-contact.component';

describe('BlockedContactComponent', () => {
  let component: BlockedContactComponent;
  let fixture: ComponentFixture<BlockedContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockedContactComponent]
    });
    fixture = TestBed.createComponent(BlockedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
