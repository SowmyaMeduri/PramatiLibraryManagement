import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    roleType: boolean;
    UserName: any;

    constructor() {
        this.sliders.push(
            {
            imagePath: 'assets/images/aws.jpg',
            label: '',
            text:
            ''
            },
            {
            imagePath: 'assets/images/big-data-analytics.png',
            label: '',
            text: 'JAMES SMITH'
            },
            {
            imagePath: 'assets/images/Datascience.jpg',
            label: 'Building NODE.Js restful API with TDD',
            text: 'JAKE VANDERPLAS'
            },
            {
            imagePath: 'assets/images/Node.png',
            label: '',
            text: 'N. A. Smith'
            },
            {
            imagePath: 'assets/images/cBook.png',
            label: 'ORGANIC CHEMISTRY',
            text:'R. K. GUPTA'
            },
            {
            imagePath: 'assets/images/TheLeadingEdge.jpg',
            label: '',
            text:'Ray Toal. Jhon David'
            }
            ); 

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
        this.roleType = currentUser.RoleType === 0 ? true : false;
        this.UserName =  currentUser.UserName;
        }
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
