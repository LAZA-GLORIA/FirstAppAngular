Les composants sont si présents au sein d'Angular qu'ils conditionnent jusqu'à son architecture. On dit qu'Angular est un framework front-end orienté composant.

Web components 
https://developer.mozilla.org/fr/docs/Web/Web_Components

branch awesome-component
ng add @angular/material

modules:
ng g m core 
ng g m shared
ng g m social
ng g m social-media --routing

components:
 ng g c core/components/header

Pour utiliser un component material : il faut importer son module
--> Comme il est succeptible d'être utiliser ailleurs dans l'application
--> On veut que n'importe quel module qui importe sharedmodule y est acces
--> On l'exporte directement dans sharedModule (le module material en question)
--> Ca permet aux modules qui consomment sharedModule d'accéder au composant (sans l'importer)

Création d'un composant partagé : comments dans sharedmodule
ng g c shared/components/comments --exports

Animation: 
Trigger attribut que l'on doit mettre à l'élément html doit être animé

Expression ngFor pour récuperer i qui correspond à l'index de comment dans le tableau de comments
*ngFor="let comment of comments; let i = index"