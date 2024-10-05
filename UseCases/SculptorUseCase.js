export class SculptorUseCase {
    constructor(sculptorRepository) {
      this.sculptorRepository = sculptorRepository;
    }
  

    addSculptor(sculptor) {
      this.sculptorRepository.add(sculptor);
    }

    getSculptor(name) {
        return this.sculptorRepository.getAll().filter(sculptor => sculptor.name == name);
    }

    getAllSculptors() {
        return this.sculptorRepository.getAll();
    }

    updateSculptorName(name,newName){
        updatedSculptor= this.sculptorRepository.getAll(sculptor=>sculptor.name==name);
        updatedSculptor.setName(newName);
        this.eventRepository.update(name, updatedSculptor);
    }
    
    updateSculptorBiography(name,newBiography){
        updatedSculptor= this.sculptorRepository.getAll(sculptor=>sculptor.name==name);
        updatedSculptor.setBiography(newBiography);
        this.eventRepository.update(name, updatedSculptor);
    }

    updateSculptorContact(name,newContact){
        updatedSculptor= this.sculptorRepository.getAll(sculptor=>sculptor.name==name);
        updatedSculptor.setContact(newContact);
        this.eventRepository.update(name, updatedSculptor);
    }

    updateSculptorContact(name,newWorks){
        updatedSculptor= this.sculptorRepository.getAll(sculptor=>sculptor.name==name);
        updatedSculptor.setWorks(newWorks);
        this.eventRepository.update(name, updatedSculptor);
    }
  
    deleteSculptor(name) {
      this.sculptorRepository.delete(name);
    }
}