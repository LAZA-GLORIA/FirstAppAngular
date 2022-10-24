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