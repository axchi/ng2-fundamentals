import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {
	EventsListComponent, 
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator

} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {ToastrService} from './common/toastr.service'

import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'


@NgModule({
	imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes)
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component
	],
	providers: [
		EventService,
		ToastrService,
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