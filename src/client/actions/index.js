import axios from 'axios';
// import data from '../../../index';

export async function fetchProducts() {
  // Here you can load the products using axios with specific url or importing from your local storage.
  const items = await axios(`https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`);
  return items.data.groups;
  // return data.groups;
}

export const FETCH_ITEMS = 'fetch_items';