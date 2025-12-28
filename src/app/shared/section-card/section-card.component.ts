import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-card',
    templateUrl: './section-card.component.html',
    styleUrls: ['./section-card.component.less'],
    standalone: false
})
export class SectionCardComponent {
    @Input() title: string = '';
    @Input() id: string = '';
    @Input() expanded: boolean = true;
    @Input() icon: string = '';

    toggle() {
        this.expanded = !this.expanded;
    }
}
