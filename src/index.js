const puppeteer = require('puppeteer');

async function buscaMoedas(){
    const browser = await puppeteer.launch({ headless: false});
    const moedaBase = 'dolar';
    const moedaComparacao = 'real';
    const url = `https://www.google.com/search?safe=active&sxsrf=ALeKk003JaOcRejVFkuHFrXClnnjFqACvA%3A1610474927862&ei=r-X9X_aANIXI5OUPlsaGiA8&q=${moedaBase}+para+${moedaComparacao}&oq=${moedaBase}+para+${moedaComparacao}&gs_lcp=CgZwc3ktYWIQAzIMCAAQsQMQChBGEIICMgQIABAKMgUIABDLATIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjoECAAQRzoECCMQJzoECAAQQzoCCAA6BwgAELEDEApQ6GpY9XhglnpoAHADeACAAfUCiAGlEZIBBTItNy4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwi2lPrP_pbuAhUFJLkGHRajAfEQ4dUDCA0&uact=5`
    const page = await browser.newPage();
    await page.goto(url);
    // await page.screenshot({path: 'example.png'});
    const resultado = await page.evaluate(()=>{
        return{
           moedaFinal: document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value,
           moedainicial: document.querySelector('.ZEB7Fb.vk_gy.vk_sh.Hg3mWc').value
        } 
    });

    console.log("Dólar >>> "+resultado.moedaFinal + "Real >>"+ resultado.moedainicial )
    // await browser.close();
}

buscaMoedas();