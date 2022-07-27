const baseUrl = 'https://parseapi.back4app.com/classes';

export const getAll = () => {
    return fetch(`${baseUrl}/Post`)
        .then(res => res.json())
};
