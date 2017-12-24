/*global require */
const estimate = require('../src/estimate'),
	init = function () {
		'use strict';
		const form = document.getElementById('story-form'),
			resultDiv = document.getElementById('result'),
			spinnerDiv = document.getElementById('spinner'),
			resultSpan = document.getElementById('result-text'),
			showSpinner = function () {
				resultDiv.style.display = 'none';
				spinnerDiv.style.display = 'block';
			},
			showResult = function () {
				const text = Array.from(form.querySelectorAll('input[type=text]')).map(t => t.value).join(' ');
				resultSpan.innerHTML = estimate(text);
				spinnerDiv.style.display = 'none';
				resultDiv.style.display = 'block';
			};
		form.addEventListener('submit',	(event) => {
			showSpinner();

			setTimeout(showResult, Math.random() * 1500 + 500);
			event.preventDefault();
		});
		document.querySelector('input[type=text]').focus();
		document.querySelector('body').classList.toggle('nojs');
	};

window.addEventListener('load', init);


