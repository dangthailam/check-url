import urlExist from 'url-exist';
import async from 'async';

const urls = [
    "re0-100sportandfitness.co.uk",
    "0-100sportandfitness.com",
    "0-12m.com",
    "0-6.no",
    "0-60customs.com",
    "0-60motorsports.com",
    "0-c.co",
    "00-161.co.uk",
    "014lesalon.com",
    "00electech.com",
    "00hcovidtests.com",
    "00lestephanies.com",
    "00lvlshop.com",
    "00oljp.com",
    "00scooters.co.uk",
    "00studios.co.uk",
    "01-11brand.com",
    "0100clothing.com",
    "0100jewelry.com",
    "0106plus.com",
    "011235813.fr",
    "0115records.co.uk",
    "0115records.com",
    "012store.com.br",
    "0000art.com",
    "000100.shop",
    "00058.top",
];



async.map(urls, async function checkUrl(url) {
    return await urlExist(url);
}, (err, results) => {
    if(err) throw err;
    console.log(results);
})
