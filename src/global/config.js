export const api_domain =  'http://app.special/';
export const login_url = api_domain + 'oauth/token';
export const user_url = api_domain + 'api/user';

//urls for items
export const add_item_url = api_domain + 'api/create-item';
export const get_all_items_url = api_domain + 'api/get-all-items';

export   const get_header  = function () {
    const token_date = JSON.parse(window.localStorage.getItem('auth_user'));
    const headers = {
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' +  token_date.access_token,
    };
    return headers
};