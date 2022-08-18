import { useMemo, useState } from "react";

const usePagination = <T extends any>(data: T[], volume: number) => {
    /** All pages in total. */
    const totalPages = useMemo(() => Math.ceil(data.length / volume), [volume, data.length ]);
    
    const [page, setPage] = useState(0);
    
    /** Data representing one single page. */
    const slicedData = useMemo(() => data.slice(page * volume, page * volume + volume), [volume, page] );
  
    return { data: slicedData, page, totalPages, setPage };
};

export default usePagination;