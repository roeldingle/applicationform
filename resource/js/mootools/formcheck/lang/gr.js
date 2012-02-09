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
	required: 'Το πεδίο είναι υποχρεωτικό.',
	alpha: 'Το πεδίο δέχεται μόνο αλφαβητικούς χαρακτήρες.',
	alphanum: 'Το πεδίο δέχεται μόνο αλφαρηθμιτικούς χαρακτήρες.',
	nodigit: 'Δέν επιτρέπονται αριθμοί.',
	digit: 'Παρακαλώ πληκτρολογήστε ένα έγκυρο ψηφίο.',
	digitmin: 'Ο αριθμός γραμμάτων πρέπει να είναι τουλάχιστον %0',
	digitltd: 'Η τιμή πρέπει να είναι ανάμεσα στο %0 και στο %1',
	number: 'Παρακαλώ πληκτρολογήστε ένα έγκυρο αριθμό.',
	email: 'Παρακαλώ πληκτρολογήστε έγκυρη μορφή email: Π.χ. yourname@domain.com',
	phone: 'Παρακαλώ πληκτρολογήστε έναν έγκυρο αριθμό τηλεφώνου.',
	url: 'Παρακαλώ πληκτρολογήστε μία έγκυρη διεύθυνση: Π.χ. http://www.domain.com',
	
	confirm: 'Αυτό το πεδίο είναι διαφορετικό από το %0',
	differs: 'Η τιμή πρέπει να είναι διαφορετική από %0',
	length_str: 'Το μήκος είναι λάθος, πρέπει να είναι από %0 μέχρι %1',
	lengthmax: 'Το μήκος είναι λάθος, πρέπει να είναι το πολύ %0',
	lengthmin: 'Το μήκος είναι λάθος, πρέπει να είναι το ελάχιστο %0',
	checkbox: 'Παρακαλώ τσεκάρετε το κουτί',
	radios: 'Παρακαλώ επιλέξτε ένα από τα κουμπιά',
	select: 'Παρακαλώ επιλέξτε μία τιμή'
}