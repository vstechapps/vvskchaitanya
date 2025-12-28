import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.less'],
    standalone: false
})
export class ExperienceComponent {
    experiences = [
        {
            company: 'Wells Fargo',
            role: 'Lead Software Engineer',
            dates: '2020 - Present',
            desc: 'Leading the team. Delivering key products to Investment Banking, Building resuable and scalable resources using Microfrontends and Microservices. Reactive, Event Driven Architecture',
            align: 'right'
        },
        {
            company: 'Deloitte',
            role: 'Senior Consultant',
            dates: '2019 - 2020',
            desc: 'Great Experience. Became more professional, more agile. Enhanced skillset, completed certifications. Being part of development of next gen health care systems using Microservices.',
            align: 'left'
        },
        {
            company: 'Tata Consultancy Services',
            role: 'Systems Engineer',
            dates: '2016 - 2019',
            desc: 'Tech Journey started from here. Its the Tree where we learn lot of skills, ethics and core values. Developed business software (Angular UI and Java Restful Services) for Airline Client.',
            align: 'right'
        },
        {
            company: 'Engineering',
            role: 'Student',
            dates: '2012 - 2016',
            desc: 'Completed Graduation in Electronics & Communication Engineering',
            align: 'left',
            icon: 'school'
        }
    ];
}
