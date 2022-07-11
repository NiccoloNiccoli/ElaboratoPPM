# Dov'è?
Il sito è accessibile al [seguente link](https://niccoloniccoli.github.io/ElaboratoPPM/).

## Inserire una nuova opera
Per inserire una nuova opera è necessario aprire il file [artapplication.json](artapplication.json) 
e aggiungere un nuovo elemento all'array della proprietà "data" del ***primo*** oggetto.
I campi da inserire sono:
- **name** : il nome dell'opera
- **author** : l'autore dell'opera
- **location** : il luogo dove l'opera è situata
- **year** : l'anno in cui l'opera è stata realizzata (per opere la cui realizzazione ha richiesto più di un anno, il valore da inserire
consigliato è quello di inizio dell'opera ma non è necessario che sia proprio quello)
- **low-res_link** : l'indirizzo dell'immagine da utilizzare nel caso lo schermo utilizzato sia di dimensioni contenute
- **low-res_width** :la larghezza dell'immagine a bassa risoluzione
- **mid-res_link**, **high-res_link** sono versioni dell'immagine a risoluzione maggiore e **mid-res_width** e **high-res_width** le rispettive larghezze

## Inserire una nuova domanda
Per inserire una nuova domanda è necessario aprire il file [artapplication.json](artapplication.json) 
e aggiungere un nuovo elemento all'array della proprietà "data" del ***secondo*** oggetto.
I campi da inserire sono:
- **id** : un valore crescente che permette di identificare la domanda in modo univoco
- **name** : il nome dell'opera su cui stiamo scrivendo la domanda, deve essere lo stesso dell'opera inserita nel primo oggetto
- **author** : l'autore dell'opera su cui stiamo scrivendo la domanda, anche questo dev'essere lo stesso dell'opera inserita nel primo oggetto (per esempio, se nel primo
oggetto scriviamo che l'autore è "Picasso", qui siamo tenuti a scrivere che l'autore è "Picasso" e se scriviamo che è "Pablo Picasso" è un errore)
- **description** : la descrizione dell'opera; compare dopo che un giocatore ha risposto correttamente alla domanda
- **coordinates** : un oggetto JSON le cui proprietà sono le coordinate dove si trova l'area che se cliccata accredita un punto al giocatore
- **question** : la domanda che viene posta al giocatore (è consigliato iniziare la domanda con "Dov'è" per mantenere uniformità con 
le domande già inserite e con il nome del gioco)
