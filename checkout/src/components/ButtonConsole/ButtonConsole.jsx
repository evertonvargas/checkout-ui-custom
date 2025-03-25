import React from 'react';  // Adicione isso no topo do seu arquivo
import { useQuery } from '@apollo/client';
import { GET_CONTENT } from "../../graphql/queries/getContent.tsx";

export function ButtonConsole() {
    const { data, loading, error } = useQuery(GET_CONTENT, {
        fetchPolicy: 'no-cache', // Garante que sempre faça a requisição, não usando cache
    });

    if (loading) {
        return <div>Loading...</div>;
      }
      
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    const handleClick = () => {
        if (loading) {
            console.log("Loading...");
        } else if (error) {
            console.error("Error:", error.message);
        } else {
            console.log("Query Data:", data);
        }
    };

    return (
        <button
            className="button-style"
            onClick={handleClick}
        >
            Imprimir no console
        </button>
    );
}
