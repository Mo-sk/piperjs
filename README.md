# Piperjs

  

  

## INTRODUCTION

  

  

Piperjs est un framework Javascript implémentant une architecture de type modulaire PIPE/FILTER. Il a pour objectif de permettre la création de ses propres filtres dans un fichier `/filters`.

  

Il fonctionne grâce à l'intermédiaire d'un client CLI.

  

  

## GET STARTING

  

  

````

  

- npm install

- node app.js

  

````

  

## API

  

### Fichier de configugration (JSON)

Ce fichier de configuration permet de répertorier les filtres que vous souhaitez voir appliquer.

  

````

{

   "steps" :

   {

      "1" :

      {

         "filter" : "read",

         "params" : ["./test"],

          "next" : "2"

      },

      ...

   }

}

  

````

  

### Filtres

Module Javascript retournant une fonction. Il effectue un type d'opération bien précis.

- [x] read

- [x] capitalize

- [x] reverse

- [x] write

  
  
  

## ERRORS

### verification()   
 
- Fichier config-filters.json introuvable. 
- La clef "steps" est manquante ou mal formatée. 
- Le paramètre filter renseigné est vide. 
- Fichier config-filters.json mal configuré (certains steps ont plus de 3 clés). 
- Un ou plusieurs attributs est mal nommé. 
- Les attributs ne respectent pas un ordre correct   

### capitalize.js  
- Input est du mauvais type.   

### reverse.js 
 - Une erreur de type est détecté en entrée

### read.js

- Path invalide pour le fichier d'entrée
- Fichier en entrée vide   

### write.js   

- Path invalide pour le fichier de sortie
- Chaine de caractère invalide


## TOOLS

NOT IMPLEMENTED