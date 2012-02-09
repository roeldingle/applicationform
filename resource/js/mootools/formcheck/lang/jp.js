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
	required: "必須項目です",
	alpha: "アルファベットを入力してください。",
	alphanum: "アルファベットと数字を入力してください。",
	nodigit: "桁の数字は使用できません。",
	digit: "有効な数字を入力してください。",
	digitmin: "数字は少なくとも%0で入力してください。",
	digitltd: "数字は%0と%1の間で入力してください。",
	number: "有効な数字を入力してください。",
	email: "有効なE-mailアドレスを入力してください。",
	phone: "有効な電話番号を入力してください。",
	url: "有効なURLを入力してください<br /><span>例 http://www.domain.com</span>",
	
	confirm: "これは%0と異なります",
	differs: "これは%0と異なるものを入力してください。",
	length_str: "長さが有効ではありません。%0と%1の間で入力してください。",
	length_fix: "長さが有効ではありません。 %0文字を入力してください。",
	lengthmax: "長さが有効ではありません。最大%0で入力してください。",
	lengthmin: "長さが有効ではありません。最小%0で入力してください。",
	checkbox: "ボックスを確認してください。",
	radios: "項目を選択してください。",
	select: "項目を選択してください。"
}