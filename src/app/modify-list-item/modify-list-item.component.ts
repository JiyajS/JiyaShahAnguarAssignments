import { Component, OnInit } from '@angular/core';
import { Operator } from "../Shared/Modules/operator";
import { OnlineBankingService } from "../services/online-banking.service";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HoverHighlightDirective, HighlightOnFocusDirective],
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
      contacts: [''],
      isAdmin: [false]
    });
  }

  ngOnInit(): void {

    // this.userService.getUser().subscribe(user => {
    //   this.user =user;
    // });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe(user => {
        if (user) {
          // @ts-ignore
          this.user = user;
          this.userForm.patchValue(user); // Patch the form directly
        }
      });
    }

  }
  // onSubmit(): void {
  //   const updateUser = this.userForm.value;
  //
  //   if (updateUser.id) {
  //     // Add a subscription here
  //     this.userService.updateUser(updateUser);
  //   } else {
  //     // const newUser = this.userService.generateNewId();
  //     // updateUser.id = newUser;
  //     this.userService.addUser(updateUser);
  //
  //   }
  //   this.router.navigate(['/users']);
  // }

  // onSubmit(): void {
  //   if (this.userForm.invalid) {
  //     alert("Please fill out all required fields.");
  //     return;
  //   }
  //
  //   const updatedUser = this.userForm.value;
  //
  //   if (updatedUser.id) {
  //     // Update existing user
  //     // @ts-ignore
  //     this.userService.updateUser(updatedUser).subscribe({
  //       next: () => {
  //         console.log("User updated successfully!");
  //         this.router.navigate(['/users']);
  //       },
  //       error: (err) => console.error("Error updating user:", err)
  //     });
  //   } else {
  //     // Add new user if no ID is provided
  //     updatedUser.id = this.userService.generateNewId();
  //     this.userService.addUser(updatedUser).subscribe({
  //       next: () => {
  //         console.log("New user added successfully!");
  //         this.router.navigate(['/users']);
  //       },
  //       error: (err) => console.error("Error adding user:", err)
  //     });
  //   }
  //}
  onSubmit(): void {
    if(this.userForm.valid){
      const user: Operator = this.userForm.value;
      console.log(user.name);
      if(user.id){
        this.userService.updateUser(user)?.subscribe(()=>this.router.navigate(['/users']));
      }else{
        user.id = this.userService.generateNewId();
        console.log(user.id);
        this.userService.addUser(user).subscribe(()=>this.router.navigate(['/users']));

      }
    }
  }






  navigateToUserList():void{
    this.router.navigate(['/users']);
  }


}
