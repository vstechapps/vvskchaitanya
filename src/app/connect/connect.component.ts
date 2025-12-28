import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.less'],
  standalone: false
})
export class ConnectComponent {
  chat: boolean = false;
  chatLog: string = '';
  input: string = '';

  contacts = [
    { icon: 'bi-envelope', label: 'Email Me', value: 'vvskchaitanya@gmail.com', action: 'mailto:vvskchaitanya@gmail.com' },
    { icon: 'bi-linkedin', label: 'LinkedIn', value: 'Connect Professionally', action: 'https://linkedin.com/in/vvskchaitanya' },
    { icon: 'bi-github', label: 'GitHub', value: 'Check out my code', action: 'https://github.com/vvskchaitanya' }
  ];

  send() {
    if (!this.input.trim()) return;
    this.chatLog += `<div class="user-message">${this.input}</div>`;
    // Dummy bot response logic
    setTimeout(() => {
      this.chatLog += `<div class="bot-message show">Thanks for your message! This is a demo chat. Please email me for real inquiries.</div>`;
    }, 1000);
    this.input = '';
  }
}
