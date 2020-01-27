import { Component, OnInit } from '@angular/core';
import { Button } from "tns-core-modules/ui/button";
import { Label } from 'tns-core-modules/ui/label';
import { isAndroid } from 'tns-core-modules/platform';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    private inputPIN = " ";
    constructor() { }

    ngOnInit() {
    }

    onTap(args) {
        let button = args.object as Button;
        console.log(button.text);
        this.inputPIN+=button.text;
    }

  onLabelLoaded(args) {
        const lbl = args.object as Label;
        // console.log("label loaded")
        if (isAndroid) {
          lbl.android.setGravity(17);
        }
      }
}
