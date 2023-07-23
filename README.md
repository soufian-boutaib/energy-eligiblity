# energy-eligiblity

# Démonstration
![eligibility](https://github.com/soufian-boutaib/energy-eligiblity/assets/85968553/2df3df25-66ac-4682-bd0a-9042609a923e)

Une WebApp / formulaire qui permettrait à un futur client de pouvoir renseigner les 
informations nécessaires à l’examen de son projet et ensuite d’afficher une estimation des 
aides et de l’accompagnement possible.
Cette WebApp Angular présentera un parcours de 3 pages

La première : les informations personnelles suivantes devront être saisies par l’utilisateur:
• civilité
• Nom
• Prénom
• Email
• Téléphone
La seconde : les informations du projet : 
• Est-il propriétaire ou locataire
• Nombre de personnes dans le foyer
• Les revenus du foyer (entre 10k et 100k)
• La surface du bien (m2)
La dernière : Une page récapitulative => 
• Afficher le message suivant : Merci [[civilite]] [[nom]] [[prénom]]
• Si la personne n’est pas propriétaire, n’afficher qu’un message de non-éligibilité
• Si la personne est propriétaire :
o Calculer le coût du projet, qui sera calculé de la manière suivante :
§ Surface (m2) x 80 euros
o Calculer le montant de l’aide Effy (avec 2 décimales, arrondi au supérieur), qui 
sera calculé de la manière suivante :
§ (Coût du projet * 0.75) – (revenu / nbre de personnes du foyer) * 0.15
o Si ce montant est positif 
§ Afficher ce montant ainsi qu’un message de félicitations pour son 
éligibilité à notre programme d’aides et d’accompagnement
o Si ce moment n’est pas significatif 
§ Afficher un message de non-éligibilité
