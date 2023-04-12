import { PUBLIC_API_URL } from '$env/static/public';
import { formatPrice } from '$lib/utils.js';

export const load = async ({fetch, params}) => {
    const response = await fetch(`${PUBLIC_API_URL}products/${params.slug}`);
    const json = await response.json();
    json.formatedPrice = formatPrice(json.price);
    return {
        product: json
    };
}