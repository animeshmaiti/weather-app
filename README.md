## Lets Start with install dependencies
### copy my package.json file and paste it in your project folder then run this command :
```bash
npm install
```
### dependencies are :
```bash
react-accessible-accordion
react-select-async-paginate
```
### then run the project with this command :
```bash
npm run start
```
### create a react environment variable file (.env) in your project folder root directory

```env
REACT_APP_GEO_API_KEY="your rapid api key"
REACT_APP_WEATHER_API_KEY="your openweather api key"
```
### you can get your api key from here :
### [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/) you need to create an account and subscribe GeoDB Cities then below you will get code snippets in code snippets you will get your api key called "x-rapidapi-key".
### [OpenWeather](https://home.openweathermap.org/api_keys) you need to create an account and subscribe free plan in OpenWeather then you will get your api key in your profile.
<br/>

## Deploy React App in GitHub Pages [Guide](https://create-react-app.dev/docs/deployment/#github-pages) 
### In this link other deployments also available.  
### first install gh-pages package
```bash
npm install --save gh-pages
```
### Step 1: Add homepage to package.json
```json
  "homepage": "https://myusername.github.io/my-app",
```
### Step 2: Add following scripts in your package.json
```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  }
```
### Step 3: Deploy the site by running npm run deploy
```bash
npm run deploy
```
### Step 4: For a project page, ensure your project’s settings use gh-pages
<br/>

### Note: When you use .env file you need to restart your server to get the changes. And name of the variable should be start with "REACT_APP_" and all in capital letters. 

