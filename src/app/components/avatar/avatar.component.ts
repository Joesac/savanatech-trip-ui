import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() img: string = '';
  @Input() desc: string = '';
  @Input() borderRadius: string = '50%';
  @Input() border: string = '3px solid var(--red)';
  @Input() width: string = '80px';
  @Input() height: string = '80px';
}
