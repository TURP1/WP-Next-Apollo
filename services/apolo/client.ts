import { ApolloClient, InMemoryCache } from "@apollo/client";

const version = new Date().getTime().toString();

export const apolloClient = new ApolloClient({
	uri: "https://llmavalanche.smart-ui.pro/graphql",
	cache: new InMemoryCache(),
});


  
