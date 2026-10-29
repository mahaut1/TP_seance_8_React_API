# TP React — Séance 8 : Explorateur de pays 🌍

**IRIS Nice — Bachelor 3 Informatique**  
**Vendredi 8 janvier 2027**

## Présentation du projet

VVous allez développer une application React permettant de découvrir les pays du monde à partir d'une API publique et gratuite, sans clé d'authentification : countries.dev.

L'application devra récupérer les données des pays, les présenter sous forme de cartes et permettre à l'utilisateur de rechercher un pays par son nom.

Vous partirez d'un projet React déjà initialisé avec Vite. La structure visuelle et les styles CSS de base sont fournis.

**Votre mission : développer progressivement toute la logique React.**

## Objectifs pédagogiques

À la fin du TP, vous serez capables de :

- Effectuer une requête HTTP GET avec `fetch()`.
- Utiliser `async` et `await` pour gérer une opération asynchrone.
- Lire une réponse JSON et vérifier son statut HTTP.
- Récupérer des données dans un composant React avec `useEffect`.
- Stocker ces données avec `useState`.
- Afficher une liste avec `.map()` et des composants réutilisables.
- Gérer les états de chargement, d'erreur et de liste vide.
- Filtrer les données avec un champ de recherche contrôlé.

## Démarrage du projet

### 1. Installer les dépendances

Ouvrez un terminal dans le dossier du projet :

```bash
npm install
```

### 2. Démarrer l'application

```bash
npm run dev
```

Ouvrez l'adresse indiquée par Vite dans votre navigateur.

Vous devez voir le titre **« Explorateur de pays »** et la section **« Les pays du monde »**.

Il est normal qu'aucun pays ne s'affiche pour le moment.

### 3. Repérer les fichiers

- `src/App.jsx` : composant principal.
- `src/App.css` : styles de l'application et des futures cartes.
- `src/index.css` : styles généraux.
- `src/main.jsx` : point d'entrée React.

Vous créerez le composant `CountryCard.jsx` au cours du TP.

---

## Exercice 1 — Premier appel à une API

**Durée indicative : 30 minutes**

### Objectif

Récupérer les données de REST Countries et les afficher dans la console du navigateur.

### API à utiliser

```text
https://countries.dev/countries
```

Cette URL renvoie un tableau JSON contenant les informations des pays et territoires du monde. Aucune clé API n'est nécessaire.

### Consignes

1. Dans `App.jsx`, définissez une constante contenant l'URL de l'API.
2. Créez une fonction asynchrone `chargerPays()`.
3. Utilisez `fetch()` pour envoyer une requête GET.
4. Attendez la réponse avec `await`.
5. Vérifiez que la réponse HTTP est correcte avec `response.ok`.
6. Convertissez la réponse JSON en données JavaScript.
7. Affichez le résultat avec `console.log()`.
8. Prévoyez un `try/catch` pour gérer une éventuelle erreur.
9. Appelez temporairement votre fonction pour vérifier le résultat, **sans l'appeler directement dans le corps du composant à chaque rendu**. Vous pourrez utiliser provisoirement un bouton de test ou la console, puis retirer ce mécanisme à l'exercice 2.

### À observer

Dans la console, repérez les propriétés :

Dans la console, repérez les propriétés :

- `name` : nom du pays (chaîne de caractères).
- `capital` : capitale du pays (chaîne de caractères).
- `flags.png` : URL de l'image du drapeau.
- `flag` : emoji du drapeau.
- `population` : nombre d'habitants.
- `region` : région géographique.
- `alpha3Code` : code pays à trois lettres.

### Critère de réussite

Un tableau d'objets représentant les pays apparaît dans la console.

**Question :** pourquoi faut-il utiliser `await` à la fois pour `fetch()` et pour `response.json()` ?

---

## Exercice 2 — Afficher les pays avec React

**Durée indicative : 25 minutes**

### Objectif

Afficher les noms des pays directement dans la page.

### Consignes

1. Importez `useState` et `useEffect` depuis React.
2. Créez un state `pays`, initialisé avec un tableau vide.
3. Utilisez `useEffect` pour déclencher le chargement des données.
4. Réutilisez votre fonction de récupération.
5. Stockez le tableau obtenu dans le state avec `setPays`.
6. Affichez les noms des pays à l'aide de `.map()`.
7. Utilisez alpha3Code comme key pour chaque élément de la liste.
8. Supprimez le mécanisme temporaire de déclenchement utilisé à l'exercice 1.

### Critère de réussite

Les noms des pays apparaissent dans la page après le chargement.

### Questions

- Pourquoi utilise-t-on `useState` plutôt qu'une variable ordinaire ?
- Quel est le rôle de `useEffect` ?
- Pourquoi faut-il une `key` stable lors de l'affichage d'une liste ?

**Attention :** en développement, React Strict Mode peut entraîner une exécution supplémentaire de l'effet. Cela ne signifie pas nécessairement que votre code est incorrect.

---

## Exercice 3 — Créer le composant CountryCard

**Durée indicative : 40 minutes**

### Objectif

Remplacer la liste de noms par des cartes présentant les informations des pays.

### Consignes

1. Créez un dossier `src/components` s'il n'existe pas.
2. Créez le fichier `CountryCard.jsx`.
3. Faites recevoir au composant un objet `pays` via les props.
4. Affichez les informations suivantes :
   - Drapeau.
   - Nom courant du pays.
   - Capitale.
   - Population.
   - Région.
5. Dans `App.jsx`, affichez un composant `CountryCard` pour chaque pays.
6. Ajoutez une key stable fondée sur alpha3Code.
7. Utilisez les classes CSS déjà présentes pour obtenir une grille responsive.

### Points d'attention

La propriété `capital` est une chaîne de caractères.
Elle peut être absente ou vide.

Prévoyez un affichage de remplacement, par exemple
**« Non renseignée »**.

Pour la population, utilisez `toLocaleString("fr-FR")`
afin de rendre les grands nombres plus lisibles.

Pour les drapeaux, l'API fournit deux possibilités :

- `flags.png` : URL de l'image du drapeau.
- `flag` : emoji représentant le drapeau.

Prévoyez un texte alternatif pertinent pour les images.

**Attention :** une URL d'image peut être inaccessible.
Dans ce cas, vous pouvez utiliser l'emoji `flag`
comme solution de secours.

### Critère de réussite

Chaque pays est présenté dans une carte contenant ses informations, et les cartes s'adaptent à la largeur de l'écran.

---

## Exercice 4 — Gérer les états de la requête

**Durée indicative : 25 minutes**

### Objectif

Informer l'utilisateur de ce qui se passe pendant la récupération des données.

### Consignes

1. Créez un state `chargement`, initialisé à `true`.
2. Créez un state `erreur`, initialisé à `null`.
3. Adaptez la fonction de récupération avec `try/catch/finally`.
4. Affichez un message pendant le chargement.
5. Affichez un message explicite en cas d'erreur.
6. Affichez les cartes lorsque les données sont disponibles.
7. Affichez un message adapté si la liste récupérée est vide.

### Tester votre application

Testez au moins ces situations :

- **Chargement :** l'application indique que les données sont en cours de récupération.
- **Réussite :** les cartes apparaissent.
- **Erreur :** remplacez temporairement l'URL par une adresse incorrecte, puis restaurez-la.
- **Liste vide :** simulez une réponse contenant un tableau vide.

### Critère de réussite

L'utilisateur comprend toujours ce que fait l'application. Aucun écran vide inexpliqué ne doit apparaître.

**Question :** à quoi sert le bloc `finally` ?

---

## Exercice 5 — Rechercher un pays

**Durée indicative : 30 minutes**

### Objectif

Permettre à l'utilisateur de rechercher un pays par son nom.

### Consignes

1. Ajoutez un champ de recherche au-dessus de la grille.
2. Créez un state `recherche`.
3. Reliez la valeur du champ au state avec `value` et `onChange`.
4. Utilisez `.filter()` pour sélectionner les pays correspondant à la recherche.
5. Rendez la recherche insensible à la casse.
6. Affichez les cartes correspondant au filtre.
7. Affichez **« Aucun pays trouvé »** lorsqu'aucun nom ne correspond.

### Points d'attention

- Conservez le tableau original des pays dans le state.
- Ne modifiez pas directement ce tableau.
- Le filtrage doit se faire sur les données déjà chargées.
- **N'envoyez pas une nouvelle requête API à chaque frappe.**
Le filtrage s'effectue sur la propriété name, qui contient directement le nom du pays. Utilisez toLowerCase() pour rendre la recherche insensible aux majuscules et minuscules

### Critère de réussite

Les cartes affichées changent immédiatement lorsque l'utilisateur saisit ou efface du texte.

### Tests à effectuer

- Rechercher `France`.
- Rechercher un nom avec des majuscules.
- Saisir un texte ne correspondant à aucun pays.
- Effacer la recherche pour retrouver tous les pays.

---

## Défi bonus 6 — Filtrer par région

*Facultatif, pour les étudiants qui ont terminé les cinq exercices.*

### Objectif

Permettre de filtrer les pays par région géographique.

### Consignes

1. Ajoutez une liste déroulante.
2. Proposez une option permettant d'afficher toutes les régions.
3. Utilisez la propriété `region` de l'API.
4. Combinez le filtre par région avec la recherche textuelle.

### Critère de réussite

L'utilisateur peut rechercher un pays et sélectionner une région simultanément.

---

## Défi bonus 7 — Améliorer l'expérience utilisateur

*Facultatif, au choix.*

Choisissez une ou plusieurs améliorations :

- Trier les pays par ordre alphabétique.
- Afficher le nombre de résultats.
- Ajouter un bouton pour réinitialiser les filtres.
- Améliorer l'accessibilité du formulaire et des cartes.
- Conserver une largeur cohérente pour les cartes lorsqu'un seul pays correspond à la recherche.
Indice : observez la différence entre auto-fit et auto-fill dans une grille CSS.
### Critère de réussite

L'amélioration choisie fonctionne et ne perturbe pas les fonctionnalités déjà développées.

---

## Vérification finale

Avant de terminer, vérifiez que :

- [ ] L'application démarre sans erreur.
- [ ] Les données proviennent de REST Countries.
- [ ] Les noms et les drapeaux s'affichent correctement.
- [ ] Les capitales manquantes sont prises en charge.
- [ ] Les populations sont lisibles.
- [ ] Le chargement et les erreurs sont gérés.
- [ ] La recherche fonctionne.
- [ ] Le message « Aucun pays trouvé » apparaît lorsque nécessaire.
- [ ] L'affichage reste lisible sur un petit écran.
- [ ] La console ne contient pas d'erreur inexpliquée.

## Pour aller plus loin

Documentation utile :

- [React — useState](https://react.dev/reference/react/useState)
- [React — useEffect](https://react.dev/reference/react/useEffect)
- [MDN — Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- - [countries.dev — API des pays](https://countries.dev/countries)

## Travail attendu

À la fin du TP, vous devez disposer d'une application React fonctionnelle permettant de consulter et rechercher des pays.

**Les cinq premiers exercices constituent le travail principal. Les défis 6 et 7 sont facultatifs.**

Vous devez pouvoir expliquer les principales étapes de votre code : récupération des données, stockage dans le state, affichage des composants et filtrage.

### En cas d'indisponibilité de l'API

Si l'API `https://countries.dev/countries` est temporairement inaccessible, un fichier JSON local pourra être utilisé pour poursuivre le TP.

Ce fichier, nommé `pays-secours.json`, sera placé dans le dossier `public` du projet.

Pour l'utiliser, remplacez temporairement l'URL de l'API par :

```js
const API_URL = "/pays-secours.json";
```

La fonction `fetch()` reste identique : seule l'adresse de récupération des données change.

**Important :** utilisez en priorité l'API publique. Le fichier local constitue uniquement une solution de secours.