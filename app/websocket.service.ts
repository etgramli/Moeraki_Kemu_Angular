import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';
import { Subject }    from 'rxjs/Subject';

export interface Message {
	message: string;
}

@Injectable()
export class WebsocketService {

	private subject: Subject<MessageEvent>;
	private webSocket: WebSocket;
	
	public connect(): Subject<MessageEvent> {
		return this.connect('ws://localhost:9000/ws');
	}
	
	public connect(url): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
		}
		return this.subject;
	}
	
	private create(url): Subject<MessageEvent> {
		ws = new WebSocket(url);
		let observable = Observable.create(
			(obs: Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);
				return ws.close.bind(ws);
			}
		);

		let observer = {
			next: (data: Object) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			},
		};

		return Subject.create(observer, observable);
    );

    let observer = {
        next: (data: Object) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(data));
            }
        },
    };

    return Subject.create(observer, observable);
	}

  public initWebSocket(url: string): void {
    this.webSocket = new WebSocket(url);
    this.webSocket.onopen    = (evt: Event) => { this.onOpen(evt)    };
    this.webSocket.onclose   = (evt: Event) => { this.onClose(evt)   };
    this.webSocket.onmessage = (evt: Event) => { this.onMessage(evt) };
    this.webSocket.onerror   = (evt: Event) => { this.onError(evt)   };
  }

  private onOpen(evt : Event): void {
    alert("Connected");
  }

  private onClose(evt) : void {
    alert("Connection closed");
  }

  private onMessage(evt): void {
    this.behaviorSubject.next(evt.data);
  }

  private onError(evt): void  {
    alert("ERROR: " + evt.data);
  }

  public finish() : void {
    let json = {
      'command': "finish",
    };
    this.webSocket.send(JSON.stringify(json));
  }

}
