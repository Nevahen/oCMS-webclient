var pages = {

    mainpage: {
        path: "index",
        title: "Index page of oCMS",
        content: `
        <h1>Welcome to oCMS!</h1>        
        `
    },
    about:{
        path: "about",
        title: "oCMS - About",
        content: "<h1>About</h1><p>oCMS is a simple Angular 5 and NodeJS based Content Management System, developed for learning purposes.</p>"
    },
    errorpage:{
        path: "404",
        title: "404 - Page not found",
        content: "<h1>404 - Didn't find that one!</h1><p>Oops, seems like we don't have what you are looking for..</p>"
    }


}

export{pages};