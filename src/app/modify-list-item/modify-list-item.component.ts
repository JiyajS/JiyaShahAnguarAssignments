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
  user: Operator | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: OnlineBankingService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: [''],
      isAdmin: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(+id)) {
      this.userService.getUserById(+id).subscribe(user => {
        if (user) {
          this.user = user;
          this.userForm.patchValue(user);
        }
      });
    }
  }
  onSubmit():void{
    const user1: Operator = this.userForm.value;

    if(user1.id){
      this.userService.updateUser(user1);
    }else{
      const newId = this.userService.generateNewId();
      user1.id = newId;
      this.userService.addUser(user1);
    }
    this.router.navigate(['/users']);
  }
  onDelete():void{
    const id = this.userForm.get('id')?.value;
    if(id){
      this.userService.deleteUser(id);
      this.router.navigate(['/users']);
    }
  }
  navigateToUserList():void{
    this.router.navigate(['/users']);
  }

}
