# User Story Estimation as a Service

Check out the live version at [userstoryestimation.net](https://userstoryestimation.net/)

This service assigns a fictional estimate to a user story, based on the set of random sentences, mostly meaning 'never' in different places around the world. It is deterministic, so the same story always gets the same estimate, making it useful to send to other people as a link.

To add new estimate to the list of possible sentences, change [sentences.json](src/sentences.json) and submit a pull request.

To build a local copy of the web site, use `npm run build`.

## Using as a NPM module

You can integrate the story estimator into your own code as an NPM module. Install it from NPM using

```bash
npm install story-estimator
```

Then just require it and pass a bit of text to estimate:

```bash
$ node
> estimate = require('story-estimator')
[Function: estimate]
> estimate('As a trader I want to trade because I want to trade')
'on the 12th of Nevermber'
```
