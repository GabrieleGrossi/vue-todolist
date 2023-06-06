/*
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/
const {createApp} = Vue;

createApp ({
    data(){
        return{
            toDoList: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text:'Portare fuori il cane',
                    done: false
                },
                {
                    text:'Andare in farmacia',
                    done: false
                },
                {
                    text:'Fare benzina',
                    done: true
                },
                {
                    text: 'Prendere Cami',
                    done: true
                },
                {
                    text:'Riportare Cami',
                    done: false
                },
                {
                    text:'Giocare a Diablo IV',
                    done: false
                },
                {
                    text:'Andare a letto presto',
                    done: false
                }
            ],
            newElement:'',
        }
    },
    methods:{
        toDoDelete(index) {
            this.toDoList.splice(index, 1);
        },
        toggleClass(index) {
            this.toDoList.forEach(index => {
              index.done = !index.done;
            });
        },
        /*addNewElement(toDo){
           this.toDoList.push(toDo);
           this.newElement = '';
        },*/
        toAddTask() {
            if (this.newElement !== '') {
                taskToAdd = {text: this.newElement, done: false};
                this.toDoList.push(taskToAdd);
                this.newElement = '';
            }
        }
    }
}).mount('#app');