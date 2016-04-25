import {Page} from 'ionic-angular';
import {Push} from 'ionic-native';



@Page({
    templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
    constructor() {



        // push.on('notification', function(data) {
        //     console.log(data.message);
        //     console.log(data.title);
        //     console.log(data.count);
        //     console.log(data.sound);
        //     console.log(data.image);
        //     console.log(data.additionalData);
        // });

        // push.on('error', function(e) {
        //     console.log(e.message);
        // });

    }
}
