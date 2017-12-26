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
			backButton = document.getElementById('back'),
			bookLinksButton = document.getElementById('book-links'),
			resultDiv = document.getElementById('result'),
			spinnerDiv = document.getElementById('spinner'),
			actionsDiv = document.getElementById('actions'),
			resultSpan = document.getElementById('result-text'),
			sendLink = document.getElementById('send'),
			inputFields = Array.from(form.querySelectorAll('input[type=text]')),
			showSpinner = function () {
				resultDiv.style.display = 'none';
				spinnerDiv.style.display = 'block';
				actionsDiv.style.display = 'none';
			},
			showResult = function () {
				const text = inputFields.map(t => t.value).join(' '),
					outcome = estimate(text),
					emailBody = `Hi,

We now have a realistic estimate for this story:

As a ${queryData.user},
In order to ${queryData.objective}
I want ${queryData.task}

Check out the estimate here: ${window.location.href}

`;
				resultSpan.innerHTML = outcome;
				spinnerDiv.style.display = 'none';
				resultDiv.style.display = 'block';
				actionsDiv.style.display = 'none';
				sendLink.setAttribute('href', 'mailto:?subject='
					+ encodeURIComponent('user story estimate')
					+ '&body=' + encodeURIComponent(emailBody));
				newEstimateButton.focus();
			},
			showForm = function () {
				actionsDiv.style.display = 'block';
				spinnerDiv.style.display = 'none';
				resultDiv.style.display = 'none';
			},
			activateForm = function (e) {
				showForm();
				inputFields[0].focus();
				e.preventDefault();
			},
			initFields = function () {
				inputFields.forEach(field => {
					if (queryData[field.name]) {
						field.value = queryData[field.name];
					}
					field.addEventListener('change', showForm);
				});
			},
			formFilled = function () {
				return !inputFields.find(t => !t.value);
			};
		newEstimateButton.addEventListener('click', activateForm);
		backButton.addEventListener('click', e => {
			bookLinksDiv.style.display = 'none';
			mainDiv.style.display = 'block';
			activateForm(e);
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

document.addEventListener('DOMContentLoaded', init);


