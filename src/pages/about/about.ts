import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {APP_NAME} from '../../shared/utils/consts';
import { AppVersion } from '@ionic-native/app-version';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {

    public APP_NAME = APP_NAME;
    public VERSION_NUMBER;

    constructor(public navCtrl: NavController, public navParams: NavParams, private appVersion: AppVersion) {
        appVersion.getVersionNumber().then(ver => {
            this.VERSION_NUMBER = ver;
        }).catch(err => {
            this.VERSION_NUMBER = err;
        });
    }

    ionViewDidLoad() {
    }
}
