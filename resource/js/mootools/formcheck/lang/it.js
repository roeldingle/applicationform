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
	required : "campo obligatorio",
	alpha : "no caratteri speciali",
	alphanum : "alfanumerico",
	nodigit : "no numeri",
	digit : "numeri interi",
	digitmin : "caratteri minimi %0",
	digitltd : "minimo %0, massimo %1 caratteri",
	number : "numeri",
	email : "email valida",
	phone : "telefono valido",
	url : "indirizzo valido",
	
	confirm : "uguale a %0",
	differs : "diverso da %0",
	length_str: "The length is incorrect, it must be between %0 and %1",
	length_fix: "The length is incorrect, it must be exactly %0 characters",
	lengthmax : "massimo %0 caratteri",
	lengthmin : "minimo %0 caratteri",
	checkbox : "selezionare",
	radios : "selezionare un valore",
	select : "selezionare un valore"
}