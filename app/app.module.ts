import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {
	EventsListComponent, 
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	SessionListComponent,
	DurationPipe

} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {
	TOASTER_TOKEN,
	JQ_TOKEN,
	Toastr,
	CollapsibleWellComponent
} from './common/index'

import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'

declare let toastr: Toastr
declare let jQuery: Object


@NgModule({
	imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		SessionListComponent,
		CollapsibleWellComponent,
		DurationPipe
	],
	providers: [
		EventService,
		{
			provide: TOASTER_TOKEN, 
			useValue: toastr
		},
		{
			provide: JQ_TOKEN, 
			useValue: jQuery
		},
		EventRouteActivator,
		AuthService,
		{
			provide: 'canDeactivateCreateEvent', 
			useValue: checkDirtyState
		}
	],
	bootstrap: [EventsAppComponent]
})

export class AppModule{}

function checkDirtyState(component:CreateEventComponent) {
	if(component.isDirty)
		return window.confirm('You have not saved this event, do you really want to cancel?')
	return true
}