import { Component, OnInit } from '@angular/core';
import { Button } from "tns-core-modules/ui/button";
import { Label } from 'tns-core-modules/ui/label';
import { isAndroid } from 'tns-core-modules/platform';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    private inputPIN = "";
    private secretPIN = "258"
    

    constructor(private router:Router) { }

    ngOnInit() {
    }

    onTap(args):void {
        let button = args.object as Button;
        // console.log(button.text);
        this.inputPIN += button.text;
    }

    tryLogin(){
        // let button = args.object as Button;

        if(this.secretPIN === this.inputPIN){
            this.router.navigate(['dashboard']);
        } else {
            this.inputPIN = "";
            alert('Wrong PIN, try again');
        }


    }

    onLabelLoaded(args) {
        const lbl = args.object as Label;
        // console.log("label loaded")
        if (isAndroid) {
            lbl.android.setGravity(17);
        }
    }
}
