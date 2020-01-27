import { Component, OnInit } from '@angular/core';
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    private inputPIN = "";
    constructor() { }

    ngOnInit() {
    }

    onTap(args) {
        let button = args.object as Button;
        console.log(button.text);
        this.inputPIN+=button.text;
    }

}
