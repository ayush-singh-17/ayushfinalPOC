import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor() { }

  public sendOTPEmail(template:object) {
    return emailjs.send('service_r70ord9', 'template_3vtjoej',template,'user_ndovXUoLzYUu2WY1LH4Z3');
  }
}