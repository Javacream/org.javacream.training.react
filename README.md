# org.javacream.training.react: React Trainining

## Übung Personen-Beispiel
* Teilnehmer
  * Installation pubsub-js mit npm install pubsub-js
    * Warnmeldungen können hier ignoriert werden
  * Implementieren der Logging-Komponente mit Component und Model
    * Workflow: 
      * logging/model/LogModel subscribe Javacream.People
      * logging/component/LoggingComponent subscribe Javacream.ModelChange.Log
      * people/model/People published Javacream.People
      * logging/model/LogModel published Javacream.ModelChange.Log
* Dauer etwa 30 Minuten