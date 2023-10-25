import { getFetchData } from "services/analytics/query";
import { apolloClient } from "services/apolo/client";
import { WP_HOME_PAGE } from "services/apolo/queries";


export const homeStaticProps = async () => {

	let dataFromGraph: any = null;
	let dataFromFetch: any = null;

	try {
		dataFromFetch = await getFetchData();

		dataFromGraph = await apolloClient.query({
			query: WP_HOME_PAGE,
		});	
	} catch (e) {
		console.log(e, "Something was wrong with the getting query");
	}

	return {
		props: {
			dataFromGraph: dataFromGraph.data.pages.nodes,
			dataFromFetch,
		},
	};
};
