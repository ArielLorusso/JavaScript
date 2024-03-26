https://downloadlynet.ir/2022/17/64588/01/mern-stack-course-mongodb-express-react-and-nodejs
https://github.com/john-smilga/mern-jobify-v2


## VIDEO_1
    ██ VS-CODE APPS
        ES7+REACT/Redux
        AUTO RENAME TAG
        PRETTIER
    ██ VS_CODE SETTINGS:
    {▒▒EMET
        "emmet.includeLanguages": {
            "javascript": "javascriptreact"
        },
        "emmet.triggerExpansionOnTab": true,
        ▒▒ PRETTIER
        "prettier.singleQuote": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        ▒▒ REACT
        "reactSnippets.settings.importReactOnTop": false    }

## VIDEO_2  why VITE ?

## VIDEO_3  VITE install
    NODE + NPM
    VITE 
    https://vitejs.dev/guide/
    npm create vite@latest client -- --template react

## VIDEO_4 VITE folders
    INSTALL DEPENDENCIES
    cd client
    npm install
    npm run dev
        VITE v4.4.9  ready in 478 ms
        ➜  Local:   http://localhost:5173/
        ➜  Network: use --host to expose
        ➜  press h to show help

## VIDEO_5 REMOVE boilerplate
    DELETE App.css & EMPTY index.css
    index.css : rafc ...create component with snipet extension
                export default App;

##  VIDEO_6 Obtain Assets
    https://github.com/john-smilga/mern-jobify-v2  DOWNLOAD main.zip
    from : main/client/src/assets/ and replace our assets project folder
    read the assets/README.md

##  VIDEO_7 GLOBAL CSS STYLE
    COPY src/assets/index.css PASTE in  src/index.css
    GLOVAL STYLES video: https://www.youtube.com/watch?v=UDdyGNlQK5w
    
##  VIDEO_8 TITLE & FAVICON
    index.html : <title>Jobify</title>
    CHANGE favicon.ico from /assets to /public
    index.html : <link href="/favicon.ico" />   https://www.favicon.io


##  VIDEO_9 LIBRARIES
    npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10