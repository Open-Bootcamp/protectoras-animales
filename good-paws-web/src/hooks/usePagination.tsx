import { useMemo, useState, useEffect } from "react";

const usePagination = <T extends any>(data: T[], volume: number) => {
    /** All pages in total. */
    const totalPages = useMemo(() => Math.floor(data.length / volume), [volume, data.length ]);
    
    const [page, setPage] = useState(0);

    const randomData = data.sort(() => Math.random() - Math.random()).slice(0, volume);
    
    /** Data representing one single page. */
    const slicedData = useMemo(() => data.slice(page * volume, page * volume + volume), [volume, page] );
  
    return { data: slicedData, page, totalPages, setPage, randomData };
};

export default usePagination;