import Vue from 'vue'
// Debido a que es un "almacén" global, la inicialización debe inicializarse globalmente
const EventBus = new Vue()

export default EventBus