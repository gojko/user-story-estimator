# User Story Estimation as a Service

Check out the live version at [userstoryestimation.net](https://userstoryestimation.net/)

This service assigns a fictional estimate to a user story, based on the set of random sentences, mostly meaning 'never' in different places around the world. It is deterministic, so the same story always gets the same estimate, making it useful to send to other people as a link.

To add new estimate to the list of possible sentences, change [sentences.json](src/sentences.json) and submit a pull request.

To build a local copy of the web site, use `npm run build`.


