import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.less'],
    standalone: false
})
export class SkillsComponent {

    frontend = [
        { name: 'HTML5', img: '/assets/img/logo/html5.png' },
        { name: 'CSS3', img: '/assets/img/logo/css3.png' },
        { name: 'Javascript', img: '/assets/img/logo/javascript.png' },
        { name: 'Angular', img: '/assets/img/logo/angular.png' },
        { name: 'React', img: '/assets/img/logo/reactjs.png' },
        { name: 'Vue JS', img: '/assets/img/logo/vuejs.png' }
    ];

    backend = [
        { name: 'Java', img: '/assets/img/logo/java.png' },
        { name: 'Node JS', img: '/assets/img/logo/nodejs.png' },
        { name: '.NET', img: '/assets/img/logo/dotnet.png' },
        { name: 'Spring', img: '/assets/img/logo/spring.png' },
        { name: 'Boot', img: '/assets/img/logo/boot.png' },
        { name: 'Kafka', img: '/assets/img/logo/kafka.png' },
        { name: 'Mongo DB', img: '/assets/img/logo/mongodb.png' },
        { name: 'Oracle', img: '/assets/img/logo/oracle.png' }
    ];

    devops = [
        { name: 'Git', img: '/assets/img/logo/git.png' },
        { name: 'Jenkins', img: '/assets/img/logo/jenkins.png' },
        { name: 'Maven', img: '/assets/img/logo/maven.png' },
        { name: 'Gradle', img: '/assets/img/logo/gradle.png' },
        { name: 'Jfrog', img: '/assets/img/logo/jfrog.png' },
        { name: 'AWS', img: '/assets/img/logo/aws.png' },
        { name: 'PCF', img: '/assets/img/logo/cloudfoundry.png' }
    ];
}
