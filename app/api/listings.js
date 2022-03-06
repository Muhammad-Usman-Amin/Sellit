import apiClient from './client';

const endpoint = './listings';

const getListings = () => apiClient.get(endpoint);
// const getListings = (a, b, c ) => apiClient.get(endpoint);

const addListing = (listing, onUploadProgress) => {
    // content-type
    // application/json     json object
    //multipart/form-data   images/large files etc

    const data = new FormData(); //axios or apisauce will automatically set content-type to multipart/form-data
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, index) =>
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        })
    );

    if (listing.location)
        data.append('location', JSON.stringify(listing.location));

    return apiClient.post(endpoint, data, {
        onUploadProgress: (progress) =>
            onUploadProgress(progress.loaded / progress.total),
    });

}

export default {
    addListing,
    getListings,
};