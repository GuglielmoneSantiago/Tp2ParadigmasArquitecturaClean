export class EventController {
    constructor(eventUseCase) {
      this.eventUseCase = eventUseCase;
    }
  
    createEvent(name, date, location, description, theme) {
      const event = new Event(name, date, location, description, theme);
      this.eventUseCase.addEvent(event);
    }
  
    getFutureEvents() {
      return this.eventUseCase.getFutureEvents();
    }
  
    getPastEvents() {
      return this.eventUseCase.getPastEvents();
    }

    updateEvent(type,typeP,theme) {
        switch(type){
            case theme:
                this.eventUseCase.updateEventTheme(theme,typeP);
                break;
            case description:
                this.eventUseCase.updateEventDescription(theme,typeP);
                break;
            case date:
                this.eventUseCase.updateEventDate(theme,typeP);
                break;
            case location:
                this.eventUseCase.updateEventLocation(theme,typeP);
                break;    
        }
    }
  
    deleteEvent(theme) {
      this.eventUseCase.deleteEvent(theme);
    }
}