import axios from "axios";

export const BASE_URL = "https://llmavalanche.smart-ui.pro";


export const getFetchData = async () => {
  const timestamp = new Date().getTime();
  try {
    const response = await fetch(`${BASE_URL}/wp-json/wp/v2/pages?per_page=1&order=asc&orderby=date&timestamp=${timestamp}`, { cache: 'force-cache' });
    
    return response.json();
  } catch (e) {
    console.log(e, "Something was wrong with the getting fetch...");
  }
};

export const getClientData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/wp-json/wp/v2/pages?per_page=1&order=asc&orderby=date`, { cache: 'no-store' });

    return response.json();
  } catch (e) {
    console.log(e, "Something was wrong with the getting fetch...");
  }
};
