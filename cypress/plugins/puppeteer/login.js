// const puppeteer = require('puppeteer');
// // let config = {
// //     lauchOptions: {
// //         headless:false

// //     }
// // }
// // puppeteer.launch(config.lauchOptions).then(async browser => {
// //     const page = await browser.newPage();
// //     await page.goto('https://hrz-stage-ea.pagerinc.com/')
// // });

// exports.login = async function(options) {
//     return await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {

//         const page = await browser.newPage();
//         await page.setViewport({ width: 1200, height:800});
//         const loginUrl = 'https://hrz-stage-ea.pagerinc.com/';
//         await page.goto(options.loginUrl);
//         await page.waitForSelector('button');
//         await page.click('button');
//         const username = 'robots@pager.com';
//         const username_field = '#i0116';
//         await page.waitForSelector(username_field);
//         await page.type(username_field, options.username);
//         const password =  'dQH$14doRdEK';
//         await page.waitForSelector('#i0118', options.password);
//         const signInButton = '#idSIButton9';
//         await page.waitForSelector(signInButton);
//         await page.click(signInButton);
//         const sideNavigationBar = '#root > section > aside.ant-layout-sider.ant-layout-sider-dark.primary-nav'
//         await page.waitForSelector(sideNavigationBar);



//         const lsd = await getLocalStorageData({ page, options: { postLoginSelector: SideNavigation}});
//         await browser.close();
//         return { lsd };
//     })
// };

// async function getLocalStorageData({ page, options} = {}) {

//     await page.waitForSelector(options.postLoginSelector);

//     const localStorageData = await page.evaluate(() => {
//         const json = [];
//         for ( let i=0; i<localStorage.length; i++) {
//             const key = localStorage.key(i);
//             const value = localStorage.getItem(key);
//             json.push({key, value});
//         }
//         return json;

//     });
//     return localStorageData;
// }