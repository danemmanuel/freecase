import { EventosService } from '../eventos.service';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { Evento } from '../evento';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.scss']
})
export class ListarEventosComponent implements OnInit {
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  refresh: Subject<any> = new Subject();
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  evento: Evento;
  CalendarView = CalendarView;
  eventsInfo: any[];
  showAgenda = false;
  viewDate: Date = new Date();
  locale = 'pt';
  modalData: {
    start: Date;
    color: { primary: string; secondary: string };
    title: string;

    dataFormatada: string;
  };

  events: CalendarEvent[];

  activeDayIsOpen = true;
  myUid: any;
  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.myUid = localStorage.getItem('uid');

    this.getEvents();
  }

  getEvents() {
    this.events = [];
    this.eventosService.getAllEvents().subscribe(events => {
      events.forEach(evento => {
        if (evento.uid === this.myUid) {
          const eventoObj = {
            title: evento.titulo,
            start: new Date(evento.dataevento),
            color: this.colors.blue,
            meta: {
              key: evento.key
            }
          };

          this.events.push(eventoObj);
        }
      });
      this.refresh.next();
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.showAgenda = false;
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.eventsInfo = events;
        $('html,body').animate(
          { scrollTop: document.body.scrollHeight },
          'slow'
        );
      }
    }
  }

  showAgendaDia(event) {
    this.showAgenda = true;
    this.modalData = event;
    moment.locale('pt-BR');
    const modalDataEvento = moment(this.modalData.start).format('LL');
    this.modalData.dataFormatada = modalDataEvento;
  }

  closeShowAgenda() {
    this.showAgenda = false;
  }

  deleteEvento(key) {
    this.eventosService.deleteEvento(key);
    this.refreshAgenda();
  }

  refreshAgenda() {
    this.events = [];
    this.showAgenda = false;
    this.activeDayIsOpen = false;
    this.refresh.next();
  }
}
