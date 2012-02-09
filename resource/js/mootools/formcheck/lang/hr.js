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
	required: "Ovo polje je obavezno.",
	alpha: "Ovo polje prima samo slova.",
	alphanum: "Ovo polje prima samo slova i brojeve.",
	nodigit: "Brojevi su nedozvoljeni.",
	digit: "Unesite cjelobrojnu vrijednost.",
	digitmin: "Ovaj broj mora biti najmanje %0",
	digitltd: "Ova vrijednost mora biti između %0 i %1.",
	number: "Unesite broj.",
	email: "Unesite ispravan email.",
	image : 'Odaberite sliku',
	phone: "Unesite ispravan broj telefona.",
	url: "Unesite ispravan url: <br /><span>Napr. http://www.domain.com</span>",
	
	confirm: "Ova vrijednost mora biti ista kao %0.",
	differs: "Ova vrijednost mora biti različita od %0.",
	length_str: "Duljuna mora biti između %0 i %1.",
	length_fix: "Duljuna mora biti točno %0 znakova.",
	lengthmax: "Duljuna mora biti najviše %0 znakova.",
	lengthmin: "Duljuna mora biti najmanje %0 znakova.",
	words_min : "Unesite %0 riječi, trenutno uneseno: %1 riječi",
	words_range : "Broj riječi mora biti od %0 do %1, trenutno uneseno: %2 riječi",
	words_max : "Broj riječi mora biti maksimalno %0, trenutno uneseno: %1 riječi",
	checkbox: "Odaberite.",
	radios: "Odaberite.",
	select: "Odaberite vrijednost.",
	checkboxes_group : 'Označite najmanje %0',
	select_multiple : "Odaberite barem jednu vrijednost"
}