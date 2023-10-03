import { Component, AfterViewInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  searchTerm: string = ''; // Variável para armazenar o termo de pesquisa
  cards: any[] = [/* Seus dados de cards aqui */];
  calendarOptions: any; // Definindo a propriedade calendarOptions aqui

  ngAfterViewInit() {
    this.initCalendar();
  }

  filterCards() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    this.cards.forEach(card => {
      const text = card.text.toLowerCase();
      card.hidden = !text.includes(lowerSearchTerm);
    });
  }

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
  
  initCalendar() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      themeSystem: 'standard',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Festival Gastronômico de Pomerode ',
          start: '2023-07-01'
        },
        {
          title: 'Weihnachtsfest ',
          start: '2023-11-01'
        }
        // Adicione mais eventos conforme necessário
      ],
      eventColor: '#333333', // Cor grays3 para os eventos
      eventTextColor: '#ffffff' // Cor do texto dos eventos
    };
  }
}