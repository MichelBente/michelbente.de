import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // @ViewChild('myForm') myForm!: ElementRef;
  // @ViewChild('nameField') myForm!: ElementRef;
  // @ViewChild('messageField') myForm!: ElementRef;
  // @ViewChild('sendButton') myForm!: ElementRef;
mailmestring = "mailto:bentemichel@web.de";

constructor() {}

ngOnInit(): void {
}

sendMail() {
 // action="https://michel-helmut-bente.developerakademie.net/send_mail/send_mail.php"
// console.log('Sending Mail', this.myForm);
// let nameField = this.nameField.nativeElement.disabled = true;
// let messageField = this.nameField.nativeElement.disabled = true;
// let sendButton = this.nameField.nativeElement.disabled = true;
// nameField.disabled = true;
// messageField.disabled = true;
// sendButton.disabled = true;

// //senden
// nameField.disabled = true;
// messageField.disabled = true;
// sendButton.disabled = true;


}


}