import {Component, Input} from '@angular/core'
import {IEvent} from './shared/index'

@Component({
	selector: 'event-thumbnail',
	template:`
		<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
			<h2>{{event?.name}}</h2>
			<div>Date: {{event?.date}}</div>
			<div [ngSwitch]="event?.time">
				Time: {{event?.time}}
				<span *ngSwitchCase="'8:00 am'">(Early start)</span>
				<span *ngSwitchCase="'10:00 am'">(Late start)</span>
				<span *ngSwitchDefault>(Normal start)</span>
			</div>
			<div>Price: \${{event.price}}</div>
			<div *ngIf="event?.location">
				<span>Location: {{event?.location?.address}}</span>
			</div>
		</div>
	`
})

export class EventThumbnailComponent{
	@Input() event:IEvent
}