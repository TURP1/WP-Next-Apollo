import axios from "axios";

const BASE_URL = "https://llmavalanche.smart-ui.pro";

export const getAxiosData = async () => {
  try {
    const response = await axios(`${BASE_URL}/wp-json/wp/v2/pages?per_page=1&order=asc&orderby=date`);

    return response.data;
  } catch (e) {
    console.log("Something was wrong with the getting axios...");
  }
};


