const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([coords.longitude, coords.latitude]);
            },
            (e) => {
                console.log(e);
                reject();
            }
        )
    });
}

export default getUserLocation;