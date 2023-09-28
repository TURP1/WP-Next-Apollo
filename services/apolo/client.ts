import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: "https://llmavalanche.smart-ui.pro/graphql",
	cache: new InMemoryCache(),
});

