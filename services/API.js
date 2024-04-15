const API = {
    url: "/data/menu.json",
    fetchMenu: async () => {
        return await fetch(API.url)
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    },
};

export default API;
