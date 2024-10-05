export class Event {
  constructor(theme, date, location,description) {
    this.theme = theme;
    this.date = new Date(date); // Converts the date into a Date object
    this.location = location;
    this.description = description;
  }
    //Set methods
    setTheme(theme){
        this.theme=theme;
    }
    setDate(date){
      newDate=new Date(date)
      this.date=newDate;
    }
    setLocation(location){
        this.location=location;
    }
    setDescription(description){
        this.description=description;
    }
}