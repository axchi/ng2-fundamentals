import {OpaqueToken} from '@angular/core'

export let TOASTER_TOKEN = new OpaqueToken('toastr')

export interface Toastr {
	success(message:string, title?:string): void;
}