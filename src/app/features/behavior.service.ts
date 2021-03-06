import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BehaviorService {
  private subject = new Subject<any>();

  operation(num: number): void {
    this.subject.next(num);
  }

  getValue(): Observable<any> {
    return this.subject.asObservable();
  }
}
