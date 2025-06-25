let coin = 'bitcoin';
let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}`;
xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
        console.log('Response:', xhr.responseText);
        console.log(xhr);
        
    } else {
        console.error('Request failed with status:', xhr.status);
    }
}

xhr.send();
