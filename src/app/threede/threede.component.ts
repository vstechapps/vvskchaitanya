import { Component } from '@angular/core';

@Component({
    selector: 'app-threede',
    templateUrl: './threede.component.html',
    styleUrls: ['./threede.component.less'],
    standalone: false
})
export class ThreedeComponent {
    items = [
        { prefix: 'De', title: 'sign', desc: 'Crafting intuitive and accessible user interfaces.' },
        { prefix: 'De', title: 'velop', desc: 'Building robust and scalable backend systems.' },
        { prefix: 'De', title: 'ploy', desc: 'Automating CI/CD pipelines for reliable delivery.' }
    ];
}
