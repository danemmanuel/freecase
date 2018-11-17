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
import * as $ from 'jquery';
import * as moment from 'moment';

const colors: any = {
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
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

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

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,

      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,

      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen = true;

  constructor() {}

  ngOnInit(): void {
    $('li').removeClass('active');
    $('.list_menu li:nth-child(4)').addClass('active');
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
}
