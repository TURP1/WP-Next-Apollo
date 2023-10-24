import { getAxiosData } from "services/analytics/query";
import { apolloClient } from "services/apolo/client";
import { WP_HOME_PAGE } from "services/apolo/queries";



export const homeStaticProps = async () => {

	let dataFromAxios: any = null;
	let dataFromGraph: any = null;
	let dataFromFetch: any = null;
	let error = false;
	let errorText:any = null;

	try {
		dataFromAxios = await getAxiosData();
		// console.log("dataFromAxios", dataFromAxios);

		dataFromFetch = await getAxiosData();
		// console.log("dataFromAxios", dataFromAxios);

		dataFromGraph = await apolloClient.query({
			query: WP_HOME_PAGE,
		});
		// console.log("dataFromGraph", dataFromGraph.data.pages.nodes);		

	} catch (e) {
		error = true
		errorText = JSON.stringify(e);
	}
	return {
		props: {
			dataFromGraph: dataFromGraph.data.pages.nodes,
			dataFromAxios,
			dataFromFetch,
			error,
			errorText
		},
	};
};
