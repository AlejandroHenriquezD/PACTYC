import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppuserService } from '../services/appuser.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: AppuserService
    ) {
    this.userForm = this.formBuilder.group({
      brand: [''],
      model: [''],
      price: ['']
    })

  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}
