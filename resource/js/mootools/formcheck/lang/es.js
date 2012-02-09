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
	required: "Este campo es requerido.",
	alpha: "Este campo s&oacute;lo acepta letras.",
	alphanum: "Este campo s&oacute;lo acepta caracteres alfanum&eacute;ricos.",
	nodigit: "No se aceptan d&iacute;gitos.",
	digit: "Por favor, introduzca un entero v&aacute;lido.",
	digitmin: "El n&uacute;mero debe ser por lo menos %0",
	digitltd: "El valor debe estar entre %0 y %1",
	number: "Por favor, introduzca un n&uacute;mero v&aacute;lido.",
	email: "Por favor, introduzca un correo v&aacute;lido: <br /><span>Ej: sunom...@dominio.com</span>",
	image: "Este campo debe contener una im&aacute;gen v&aacute;lida", 
	phone: "Por favor, introduzca un tel&eacute;fono v&aacute;lido.", 
	url: "Por favor, introduzca una URL v&aacute;lida: <br /><span>Ej: http://www.dominio.com</span>", 
	
	confirm: "Este campo difiere de %0", 
	differs: "Este campo debe ser distinto de %0", 
	length_str: "La longitud es incorrecta, debe estar entre %0 y %1", 
	length_fix: "La longitud es incorrecta, debe ser de exactamente %0 caracteres", 
	lengthmax: "La longitud es incorrecta, debe tener como m&aacute;ximo %0", 
	lengthmin: "La longitud es incorrecta, debe contener como m&iacute;nimo %0",
	words_min: "Este campo debe contener como m&iacute;nimo %0 palabras, actualmente contiene %1", 
	words_max: "Este campo debe contener como m&aacute;ximo %0 palabras, actualmente contiene %1", 
	words_range: "Este campo debe contener entre %0 y %1 palabras, actualmente contiene %2",
	checkbox: "Por favor, marque una casilla",
	checkboxes_group : 'Favor marcar al menos %0 casilla(s)',
	radios: "Por favor, seleccione un valor", 
	select: "Por favor, seleccione un valor"
}