import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
	templateUrl: 'app/events/event-details/create-event.component.html',
	styles: [`
    em {float: right; color: #e05c65; padding-left: 10px;}
    .error input {background-color: #e3cec5}
  `]
})

export class CreateEventComponent {
	isDirty:boolean = true

	constructor (private route:Router){}

	saveEvent(formValues) {
		console.log(formValues)
	}

	cancel() {
		this.route.navigate(['/events'])
	}
}