import { useState, useEffect, createContext } from "react";

export const CenterContext = createContext();

export default function CenterProvider({ children }) {
  const initFilters = { centerName: "", radius: "100" };
  const [filters, setFilters] = useState(initFilters);
  const [data, setData] = useState([]);
  const [userLocation, setUserLocation] = useState([0, 0]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}centers/filterBy?centerName=${filters.centerName}&radius=${filters.radius}&coordinates=${userLocation}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(process.env.NEXT_PUBLIC_HOST);
        const data = await res.json();
        setData(data.results);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [filters]);

  return (
    <CenterContext.Provider
      value={{ data, userLocation, filters, handleChange }}
    >
      {children}
    </CenterContext.Provider>
  );
}
