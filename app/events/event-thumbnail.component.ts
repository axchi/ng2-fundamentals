import {Component, Input} from '@angular/core'
import {IEvent} from './shared/index'

@Component({
	selector: 'event-thumbnail',
	template:`
		<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
			<h2>{{event?.name | uppercase}}</h2>
			<div>Date: {{event?.date | date:'shortDate'}}</div>
			<div [ngSwitch]="event?.time">
				Time: {{event?.time}}
				<span *ngSwitchCase="'8:00 am'">(Early start)</span>
				<span *ngSwitchCase="'10:00 am'">(Late start)</span>
				<span *ngSwitchDefault>(Normal start)</span>
			</div>
			<div>Price: {{event.price | currency:'USD':true}}</div>
			<div *ngIf="event?.location">
				<span>Location: {{event?.location?.address}}</span>
			</div>
		</div>
	`
})

export class EventThumbnailComponent{
	@Input() event:IEvent
}