import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
    title = 'movies';
    constructor() {
    }

    ngOnInit(): void {
    }
}