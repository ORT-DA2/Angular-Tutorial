import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public stringHtml: string = '<h1 style="color:red; background-color:yellow">Hello! This is a very safe HTML!! Click me!</h1>';
}