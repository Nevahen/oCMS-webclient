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
        content: "&copy; Nevahen"
    },
    errorpage:{
        path: "404",
        title: "404 - Page not found",
        content: "<div class='col-md-12'><h1>404 - Didn't find that one!</h1><p>Oops, seems like we don't have what you are looking for..</p></div>"
    }


}

export{pages};