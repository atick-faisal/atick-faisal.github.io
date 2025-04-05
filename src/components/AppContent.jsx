import {useQuery} from "@tanstack/react-query";
import {getDemoData} from "../api/demoApi.js";

export default function AppContent() {
    const demoQuery = useQuery({
        queryKey: "demoData",
        queryFn: getDemoData,
    });

    if (demoQuery.isLoading) {
        return <p>Loading...</p>;
    }
    if (demoQuery.isError) {
        return <p className="text-red-400">Error: {demoQuery.error.message}</p>;
    }
    return (
        <>
            <p>{demoQuery.data.title}</p>
            <img src={demoQuery.data.img} alt={demoQuery.data.alt}/>
        </>
    );
}
