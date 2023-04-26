import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSubmitted = false;
  emailSent: boolean = false;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

mailmestring = "mailto:bentemichel@web.de";

constructor(private http: HttpClient) {}
post = {
  endPoint: 'https://michel-helmut-bente.developerakademie.net/michelbente/src/send_mail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};
onSubmit(ngForm: any) {
  this.isSubmitted = true;
  if (this.myForm.valid){
    this.isSubmitted = false;
    this.myForm.reset();
  } 
  if (this.myForm.valid) {
    let data = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      message: this.myForm.value.message
    }
    this.http
      .post(this.post.endPoint, data)
      .subscribe({
        next: (response) => {
          ngForm.resetForm()
          this.emailSent = true;
          this.timeOutSendMail();
        },
        error: (error) => {
        },
      });
  } else {
  }
}
timeOutSendMail() {
  setTimeout(() => {
    this.emailSent = false;
  }, 2000)

}
}




