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
	required: "Campo Obrigatório.",
	alpha: "Apenas caractéres alfabéticos são aceites.",
	alphanum: "Apenas caractéres Alfa-numericos aceites.",
	nodigit: "Digitos não são aceites.",
	digit: "Por favor insira um valor inteiro.",
	digitmin: "O valor tem de ser maior que %0",
	digitltd: "O valor tem de ser entre %0 e %1",
	number: "Introduza um numero valido.",
	email: "Introduza um email valido: <br /><span>p.e. n...@dominio.pt</span>",
	phone: "Introduza um telefone valido.",
	url: "Introduza um URL valido: <br /><span>p.e. http://www.dominio.com</span>",
	
	confirm: "Este campo é diferente de %0",
	differs: "Este campo tem de ser diferente de %0",
	length_str: "Tamanho incorrecto, tem de ser entre %0 e %1",
	length_fix: "Tamanho incorrecto, tem de ser exactamente %0 caractéres",
	lengthmax: "Tamanho incorrecto, tem de ser no máximo %0",
	lengthmin: "Tamanho incorrecto, tem de ser no mínimo %0",
	checkbox: "Confirme a opção",
	radios: "Seleccione uma opção",
	select: "Seleccione um valor"
}