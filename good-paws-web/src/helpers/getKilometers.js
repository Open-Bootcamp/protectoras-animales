const getKilometers = (lat1, lon1, lat2, lon2) => {
    const rad = x => x * Math.PI / 180;
    const R = 6378.137; //Radio de la tierra en km
    const dLat = rad( lat2 - lat1 );
    const dLong = rad( lon2 - lon1 );
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return d.toFixed(3); //Retorna tres decimales
}

export default getKilometers;