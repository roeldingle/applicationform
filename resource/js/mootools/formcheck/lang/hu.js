/*
---
script: formcheck.js

description:     A MooTools class that allows you to perform different tests on forms to validate them before submission.

authors:
  - fyrye (http://torntech.com)
  - weepaki
  - floor.ch (http://mootools.floor.ch)
  
copyright: Copyright (c) 2010-2011 

license:
  - MIT License

requires:
  core/1.2.4: '*'
  more/1.2.4.4:
      - Fx.Scroll

provides:
  - FormCheck
...
*/
formcheckLanguage = {
	required: "Ezt a mezőt kötelező kitölteni.",
	alpha: "Ebben a mezőben csak betűk engedélyezettek.",
	alphanum: "Ebben a mezőben csak számok engedélyezettek.",
	nodigit: "Számok beírása nem lehetséges.",
	digit: "Csak számok beírása lehetséges.",
	digitmin: "A legkisebb lehetséges szám a(z) %0.",
	digitltd: "Az értéknek %0 és %1 között kell lennie!",
	number: "Kérjük, adjon meg egy érvényes számot.",
	email: "Kérjük, adjon meg egy érvényes E-mail címet.",
	image : "A mezőnek érvényes fájlnevet kell tartalmaznia.",
	phone: "Kérjük, adjon meg egy érvényes telefonszámot.",
	url: "Kérjük, adjon meg egy érvényes internet címet.",
	
	confirm: "A mező eltér a(z) %0 értéktől.",
	differs: "Az értéknek a(z) %0 képest eltérőnek kell lennie.",
	length_str: "Az érték nem helyes, a hossznak %0 és %1 között kell lennie.",
	length_fix: "Az érték nem helyes, a hossznak pontosan %0 karakternek kell lennie.",
	lengthmax: "Az érték nem helyes, a karakterek maximális száma %0.",
	lengthmin: "Az érték nem helyes, a karakterek minimális száma %0.",
	words_min : "A minimálisan küldendő szavak száma %0, jelenleg: %1 szó van",
	words_range : "A mezőnek %0-%1 szót kell tartalmaznia, jelenleg: %2 szó van",
	words_max : "A maximálisan küldhető szavak száma %0, jelenleg: %1 szó van",
	checkbox: "Kérjük aktiválja.",
	radios: "Kérjük, válasszon ki egy értéket.",
	select: "Kérjük, válasszon ki egy értéket."
}