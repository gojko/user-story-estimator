/*global require */
const queryString = require('query-string'),
	estimate = require('../src/estimate'),
	init = function () {
		'use strict';
		const queryData = queryString.parse(location.search),
			form = document.getElementById('story-form'),
			mainDiv = document.getElementById('main'),
			bookLinksDiv = document.getElementById('books'),
			newEstimateButton = document.getElementById('new-estimate'),
			bookLinksButton = document.getElementById('book-links'),
			resultDiv = document.getElementById('result'),
			spinnerDiv = document.getElementById('spinner'),
			actionsDiv = document.getElementById('actions'),
			resultSpan = document.getElementById('result-text'),
			inputFields = Array.from(form.querySelectorAll('input[type=text]')),
			showSpinner = function () {
				resultDiv.style.display = 'none';
				spinnerDiv.style.display = 'block';
				actionsDiv.style.display = 'none';
			},
			showResult = function () {
				const text = inputFields.map(t => t.value).join(' ');
				resultSpan.innerHTML = estimate(text);
				spinnerDiv.style.display = 'none';
				resultDiv.style.display = 'block';
				actionsDiv.style.display = 'none';
				newEstimateButton.focus();
			},
			initFields = function () {
				inputFields.forEach(field => {
					if (queryData[field.name]) {
						field.value = queryData[field.name];
					}
				});
			},
			formFilled = function () {
				return !inputFields.find(t => !t.value);
			};
		newEstimateButton.addEventListener('click', e => {
			actionsDiv.style.display = 'block';
			spinnerDiv.style.display = 'none';
			resultDiv.style.display = 'none';
			inputFields[0].focus();
			e.preventDefault();
		});
		bookLinksButton.addEventListener('click', e => {
			bookLinksDiv.style.display = 'block';
			mainDiv.style.display = 'none';
			e.preventDefault();
		});
		initFields();
		document.querySelector('body').classList.toggle('nojs');
		if (formFilled()) {
			showSpinner();
			setTimeout(showResult, Math.random() * 1500 + 500);
		}
	};

window.addEventListener('load', init);


