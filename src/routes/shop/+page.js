import { PUBLIC_API_URL } from '$env/static/public';


export const load = async ({fetch}) => {
    const response = await fetch(PUBLIC_API_URL + 'products/?fields=id,name,slug,image,price,available');
    const json = await response.json();
    return {
        products: json,
    };
}