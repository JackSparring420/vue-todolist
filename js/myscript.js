// creare una todo list

// stampare il listato dei task iniziali

// far si che ogni task abbia la possibilità di essere cancellato

// avere la possibilità di aggiornare task (uno alla volta)

//1 creo una inserzione di vue dove mi aggancio all'html e scrivo delle tasks preimpostate
//1.1 aggiungo alle tasks la propietà done per segnalare se un attività è stata svolta
//2. dentro data creo un nuovo ogetto che mi rapresenta una nuova task da pushare nell'array tasks
// 2.1 aggancio al bottone aggiungi task la funzione su methods che mi premette di pushare la task
// 3. contrassegno le attività già svolte sbarrandole
// 3.1 creo una condizione nell'html per fargli aggiungere la classe done nel caso in cui la propietà done sia true
// 3.2 collego con il click sulla stringa la funzione che detta la condizione per la quale cambia la propietà done
// 4 genero la possibilità di rimuovere la task
// 4.1 collego al pulsante che ho rappresentato con l'icona del cestino la funzione che mi permette di eliminrare un oggetto da un array (.splice)
// 4.2 al click imposto la stessa condizione al 3.2 per evitare che erediti la propietà done della posizione precedente.
var app = new Vue (
        {
            el: "#myapp",
            data: {
                newTask: {
                    text: "",
                    done: false
                },
                tasks: [
                    {
                        text:"andare a fare la spesa",
                        done: true
                    },
                    {
                        text:"fare il bucato",
                        done: false
                    },
                    {
                        text:"andare a correre",
                        done: false
                    },
                    {
                        text:"fare l'esercitazione del pomeriggio",
                        done: false
                    },
                ]
            },

            methods: {

                removeItem(index){
                    this.tasks.splice(index,1);
                    if (this.tasks[index].done !== true){
                        this.tasks[index].done = true
                    } else {
                        this.tasks[index].done = false
                    }
                },

                aggiungiTask(){
                    if(this.newTask.text !== "" && this.newTask.text[0] !== " "){
                        this.tasks.push(this.newTask);
                        this.newTask = {
                            text: "",
                            done: false
                        };
                    }
                },

                sottolinea(index) {
                    if (this.tasks[index].done !== true){
                        this.tasks[index].done = true
                    } else {
                        this.tasks[index].done = false
                    }
                }

            }
            

        }
    );

