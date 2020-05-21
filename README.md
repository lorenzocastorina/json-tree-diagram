# json-tree-diagram
Applicativo che prende un json strutturato ad albero in input e lo trasforma in codice HTML convertibile graficamente in un albero gerarchico usando CSS 

Per la realizzazione dell'albero grafico è stato usato il codice sorgente di "Pretty Clean Tree Diagram In Pure CSS" 
di Ross Angus reperibile al seguente [qui](https://codepen.io/ross-angus/pen/jwxMjL)


![alt text](https://github.com/lorenzocastorina/json-tree-diagram/blob/master/screenshots/final.png?raw=true)


## Come funziona

Per poter creare l'albero a cascata è necessario una sequenza di `<ul>` (rami) e `<li>` (nodi) che permettono di costruire la struttura leggibile poi da css:


![alt text](https://github.com/lorenzocastorina/json-tree-diagram/blob/master/screenshots/list.png?raw=true)


per generare tale struttura in modo automatico da un json è semplicemente necessario passare alla funzione `ricorsiva(data)` un estratto json con il seguente formato:



```javascript
var data = {
    "ul" : [{
        "li" : "nodo livello 1",
        "ul" : [{
            "li" : "nodo secondario",
            "ul" : [{
                "li" : "nodo livello 3"
            }]
        }, {
            "li" : "nodo secondario",
            "ul" : [{
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }]
        }]
    }]
}
```


La funzione creera ed aggiungerà alla pagina HTML in modo automatico la composizione di `<ul>` e `<li>` necessaria per creare l'albero da css

## Conclusioni

Feel free to commit any changes that can make the code better.



