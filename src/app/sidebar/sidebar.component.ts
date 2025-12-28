import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less'],
    standalone: false
})
export class SidebarComponent {
    @Output() sectionSelected = new EventEmitter<string>();
    @Output() close = new EventEmitter<void>();

    socialLinks = [
        { icon: 'bi bi-github', url: 'https://github.com/vvskchaitanya', label: 'Github' },
        { icon: 'bi bi-linkedin', url: 'https://linkedin.com/in/vvskchaitanya', label: 'LinkedIn' },
        { icon: 'bi bi-youtube', url: 'https://youtube.com/@vvskchaitanya', label: 'YouTube' }
    ];

    subDomains = [
        { url: 'https://docs.vvsk.in', label: 'Docs', icon: 'bi bi-file-earmark-text' },
        { url: 'https://chat.vvsk.in', label: 'Chat', icon: 'bi bi-chat-dots' },
        { url: 'https://learn.vvsk.in', label: 'Learn', icon: 'bi bi-mortarboard' }
    ];

    scrollTo(section: string) {
        this.sectionSelected.emit(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    onClose() {
        this.close.emit();
    }
}
