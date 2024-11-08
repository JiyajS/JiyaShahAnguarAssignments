import { Component, OnInit } from '@angular/core';
import { Operator } from "../Shared/Modules/operator";
import { OnlineBankingService } from "../online-banking.service";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  userForm: FormGroup;
  user: Operator[] = [] ;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: OnlineBankingService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      contacts: ['',Validators.required],
      isAdmin: [false]
    });
  }

  ngOnInit(): void {

    // this.userService.getUser().subscribe(user => {
    //   this.user =user;
    // });
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(+id)) {
      this.userService.getUserById(+id).subscribe(user => {
        if (user) {
          this.userForm.patchValue(user); // Patch the form directly
        }
      });
    }

  }
  onSubmit(): void {
    const updateUser = this.userForm?.value;

    if (updateUser.id) {
      // Add a subscription here
      this.userService.updateUser(updateUser);
    } else {
      const newUser = this.userService.generateNewId();
      updateUser.id = newUser;
      this.userService.addUser(updateUser);

    }
    this.router.navigate(['/users']);
  }



  navigateToUserList():void{
    this.router.navigate(['/users']);
  }


}
