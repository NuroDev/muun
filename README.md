<div align="center">

<a href="muun.space">
    <img alt="Muun" src="https://github.com/muunapp/muun/blob/master/build/muun-icon.png?raw=true" width="128px" />
</a>

<h1> Muun </h1>
<p> 🐦 Live Twitter Dashboard 🐦 </p>

[![License](https://img.shields.io/badge/license-mit-blue.svg?longCache=true&style=for-the-badge)](http://www.gnu.org/licenses/) [![StandardJS](https://img.shields.io/badge/code--style-standard-f4df48.svg?longCache=true&style=for-the-badge)](https://standardjs.com/) [![gitmoji](https://img.shields.io/badge/gitmoji-%20%F0%9F%98%9C%20%F0%9F%98%8D-FFDD67.svg?longCache=true&style=for-the-badge)](https://gitmoji.carloscuesta.me/)

<p> 💙 Inspired by <a href='http://tweetdeck.com'> Tweetdeck </a> 💙 </p>

<img src="https://github.com/muunapp/muun/blob/master/Screenshot-light.png?raw=true" />

<img src="https://github.com/muunapp/muun/blob/master/Screenshot-dark.png?raw=true" />

</div>

## Installation:
All builds and downloads are available [here](https://github.com/muunapp/muun/releases) in the repo releases section.

## Development

Installation:
```
$ git clone https://github.com/muunapp/muun.git
$ cd muun
```
### Setting up credentials.json
There is no central authentication server yet so each development environment will need it's own Twitter Application for testing integration.
1. Navigate to https://apps.twitter.com/
2. Click "Create New App"
3. A naming convention of [DEV] Muun - YourTwitterUsername is recommended for name, description can be whatever you want and the website should link to your personal fork on GitHub. You don't need to configure callback URL
4. Click on the app you have just created and navigate to "Keys and Access Tokens"
5. Within "Application Settings" modify Access Levels to "Read, Write and Access direct messages" and save changes
6. Within that "Keys and Access Tokens" page click "Create my access token"
7. Copy `credentials.example.json` to `credentials.json` within the `src/resources` folder
8. Fill in the `credentials.json` with:
    * Consumer Key (API Key) -> `consumerPublic`
    * Consumer Secret (API Secret) -> `consumerSecret`
    * Access Token -> `accessPublic`
    * Access Token Secret -> `accessSecret`

Running:
```
$ npm start
```

Packaging:
```
$ npm run package
```
