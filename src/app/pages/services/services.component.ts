import { Component } from '@angular/core';
import {Service} from "../../core/common/models/service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services : Service[] = [
    {name: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'},
    {name: 'Mobile Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'},
    {name: 'Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'},
    {name: 'Consulting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'}
  ];
}
