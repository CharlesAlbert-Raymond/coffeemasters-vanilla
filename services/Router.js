const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        });
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false);
        });

        // Check the initial URL, prevent redirection to home on every URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            window.history.pushState({ route }, "", route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your order";
                break;
            default:
                if (route.startsWith("/product/")) {
                    pageElement = document.createElement("h1");
                    pageElement.textContent = "Product";
                    const paramId = route.substring(route.lastIndexOf("/") + 1);
                    pageElement.dataset.id = paramId;
                }
        }
        if (pageElement) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(pageElement);
            window.scrollTo(0, 0);
        } else {
            document.querySelector("main").innerHTML = "Oups, 404!";
        }
    },
};

export default Router;
