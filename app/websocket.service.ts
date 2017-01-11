import { Injectable }      from '@angular/core';

import { Observable }      from 'rxjs/Observable';
import { Observer }        from 'rxjs/Observer';
import { Subject }         from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Message {
	message: string;
}

@Injectable()
export class WebSocketService {
	url = 'ws://localhost:9000/ws';
	
	webSocket : WebSocket;

	private behaviorSubject = new BehaviorSubject<string>(null);
	public observable : Observable<string> = this.behaviorSubject.asObservable();

	public initWebSocket(url : string): void {
		this.webSocket = new WebSocket(url);
		this.webSocket.onopen = (evt: Event) => { this.onOpen(evt) };
		this.webSocket.onclose = (evt: Event) => { this.onClose(evt) };
		this.webSocket.onmessage = (evt: Event) => { this.onMessage(evt) };
		this.webSocket.onerror = (evt: Event) => { this.onError(evt) };
	}

	private onOpen(evt : Event): void {
		alert("CONNECTED");
	}

	private onClose(evt) : void {
		alert("DISCONNECTED");
	}

	private onMessage(evt): void {
		this.behaviorSubject.next(evt.data);
	}

	private onError(evt): void  {
		alert("ERROR: " + evt.data);
	}

	
	public setDot(coords: string) : void {
		this.webSocket.send('setDot' + coords);
	}
}
