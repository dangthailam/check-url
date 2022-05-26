import urlExist from 'url-exist';
import async from 'async';

const urls = [
    "http://google.com",
    "http://re0-100sportandfitness.co.uk",
    "http://0-100sportandfitness.com",
    "http://0-12m.com",
    "http://0-6.no",
    "http://0-60customs.com",
    "http://0-60motorsports.com",
    "http://0-c.co",
    "http://00-161.co.uk",
    "http://014lesalon.com",
    "http://00electech.com",
    "http://00hcovidtests.com",
    "http://00lestephanies.com",
    "http://00lvlshop.com",
    "http://00oljp.com",
    "http://00scooters.co.uk",
    "http://00studios.co.uk",
    "http://01-11brand.com",
    "http://0100clothing.com",
    "http://0100jewelry.com",
    "http://0106plus.com",
    "http://011235813.fr",
    "http://0115records.co.uk",
    "http://0115records.com",
    "http://012store.com.br",
    "http://0000art.com",
    "http://000100.shop",
    "http://00058.top"
];



async.map(urls, async function checkUrl(url) {
    return await urlExist(url);
}, (err, results) => {
    if(err) throw err;
    console.log(results);
})
