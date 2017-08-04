import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'
import {IEvent} from './shared/index'

@Component({
	templateUrl: 'app/events/events-list.component.html'
}) 

export class EventsListComponent implements OnInit {
	events:IEvent[]

	constructor (private eventService:EventService, private toastr: ToastrService) {
	}

	ngOnInit() {
		this.events = this.eventService.getEvents()
	}

	handleThumbnailClick(eventName){
		this.toastr.success(eventName)
	}
}