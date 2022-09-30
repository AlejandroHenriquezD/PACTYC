import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppuserService } from '../services/appuser.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private userCrudService: AppuserService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      brand: [''],
      model: [''],
      price: ['']
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        brand: data['brand'],
        model: data['model'],
        price: data['price']
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }
}
