<p align="center">
<img src="./src/assets/logo.svg" />
</p>

<br />

<img src="https://user-images.githubusercontent.com/37598129/109435927-b5df6200-79fb-11eb-8a59-29c968ee4ca9.gif" width="100%" />

<br />

<p align="center">GitHub Finder is an application to find users from GitHub. This application displays user informations, your location in map and repositories that user starred</p>

<div style="display: flex; align-items: center; justify-content: center; width: 100%;">

<div style="margin-right: 10px">

[![Linkedin Badge](https://img.shields.io/badge/-MoesioMarcelino-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/moesiomarcelino/)](https://www.linkedin.com/in/moesiomarcelino/)

</div>
<div style="margin-right: 10px">

[![Gmail Badge](https://img.shields.io/badge/-moesiomarcelino1@gmail.com-6633cc?style=flat-square&logo=Gmail&logoColor=white&link=mailto:moesiomarcelino@gmail.com)](mailto:moesiomarcelino1@gmail.com)

</div>
<div>

[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-6633cc?logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send/?phone=5588997129443&text=Ol%C3%A1%2C+Mo%C3%A9sio%21+&app_absent=0)](https://api.whatsapp.com/send/?phone=5588997129443&text=Ol%C3%A1%2C+Mo%C3%A9sio%21+&app_absent=0)
</div>
</div>

## Cloning repository
- [x] You need have a [github](https://github.com/git-guides/install-git) installed in you computer.
- [x] After it, clone this repository
  ```js
    git clone https://github.com/MoesioMarcelino/GitHub-Finder
  ```

## Configuring enviroment
### Running app with Mapbox layer
- [x] You need a key from [mapbox](https://google.com)
- [x] After you get the key and cloning the repository, you should go to in the root folder this project and create the file **.env** with the enviroment variable:
    ```js
      REACT_APP_MAPBOX_TOKEN=YOUR_TOKEN_HERE
    ```
- [x] You will find an **.env.example** file as a template for the file to be created
- [x] Ensure that the application is restarted, if you have already started

### Running app with layer default from leaflet
- [x] If you do not want to perform the step-by-step above, navigate to the file: 
  ```js
  /src/components/CardBio/index.tsx
  ```
- [x] Uncomment the contents of line 151 and comment the contents of line 152 to line 154. The file will look like this:
  ```js
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {/* <TileLayer
    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
  /> */}
  ```

## Installing dependencies
- [x] You will need a node installed your computuder
- [x] You will need a package management ([npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install))
- [x] Run:
```js
  yarn 
  // or npm install
``` 

## Running project
```js
  yarn start
  // or npm start
```

## Running Tests Coverage
- [x] Run:
```js
  yarn test:coverage
  // or npm test:coverage
```
- [x] In the root folder, a **coverage** folder will be generated.
- [x] Navigate to the folder
- [x] Enter the **lcov-report** folder and run the **index.html** file.
- [x] A screen like this will appear:
  <img src="https://user-images.githubusercontent.com/37598129/109436711-94807500-79ff-11eb-83cd-5f904fde0f99.png" width="100%" />

## User histories
- [x] The user will be able to search for a Github user using the nickname
- [x] The user will be able to search for a Github user using the nickname
- [x] The user will be able to navigate inside the searched profile
- [x] The user will be able to enjoy a repository
- [x] The user will be able to view the location of the user's city that was searched for
- [x] If the user does not have a defined city, display Brazil as the default location
- [x] The user will not be able to search without filling in the nickname field
- [x] The system will return a notification for a user not found
- [x] The system will always return a welcome notification when making the first access
- [x] The system will return a loading notification when the user performs a search
- [x] The system will return a success notification when it finds a user
- [x] The data fetched and likes data will be stored in localStorage
- [x] The user can click on the marker that will display a pop-up with the name of the searched user and his / her location

## Prototype
You can access the prototype [here](https://www.figma.com/file/zSpyfjqhteDcYBsfHxdjoh/GitHub-Finder?node-id=0:1)

  
## Contributing / Sugestions
All sugestions and contributions are welcome! In this case, contact me through the links below

## Networking
- [Portfolio](https://moesiomarcelino.dev)
- [GitHub](https://github.com/MoesioMarcelino)
- [Linkedin](https://br.linkedin.com/in/mo%C3%A9sio-marcelino-2348a5152)
- [Instagram](https://www.instagram.com/moesiomarcelino/)
- [Whatsapp](https://wa.me/5588997129443?text=Ol%C3%A1,%20Mo%C3%A9sio!%20)