import React from 'react';  // Adicione isso no topo do seu arquivo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ButtonConsole } from './ButtonConsole.jsx'; // Ajuste o caminho conforme necessário

const client = new ApolloClient({
  uri: '/_v/private/graphql/v1', // Substitua pela URL correta da sua loja
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ButtonConsole />
    </ApolloProvider>
  );
}

export default App;
