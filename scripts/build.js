const fs = require('fs')
const path = require('path')

let readme = fs.readFileSync(path.resolve(__dirname, '../README.md'), 'utf8'),
    readmeCn = fs.readFileSync(path.resolve(__dirname, '../README-CN.md'), 'utf8'),
    dappsMd = `| Logo       | Title   | Description | Preview | Link   | categoriy | Google Analytics Tag |\n| :--------: | :-----: | :----:      | :----:  | :----: | :----:    | :----:               |\n`,
    partnersMd = `| Logo        | Title   | Description | Link   | Type   | Google Analytics Tag |\n| :--------:  | :-----: | :----:      | :----: | :----: | :----:               |\n`,
    homePartnersMd = `| Logo       | Link    | Google Analytics Tag |\n| :--------: | :-----: | :----:               |\n`

// DApps page
const dapps = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dapps/index.json'), 'utf8'))
dapps.map((dapp) => {
    dappsMd += `| <img src="https://raw.githubusercontent.com/longhuicode/eospark-cooperation/master/dapps/img/${dapp.logo}" /> | ${dapp.title} | ${dapp.description} | <img src="${path.resolve(__dirname, '../dapps/img')}/${dapp.preview}" /> | ${dapp.link} | ${dapp.categoriy} | ${dapp.gaTag} | \n`
})
dappsMd = `<!-- dapp_list_start -->\n${dappsMd}\n<!-- dapp_list_end -->`
readme = readme.replace(/<!-- dapp_list_start -->[\s\S]*<!-- dapp_list_end -->/, dappsMd)
readmeCn = readmeCn.replace(/<!-- dapp_list_start -->[\s\S]*<!-- dapp_list_end -->/, dappsMd)

// Partners page
const partners = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../partners/index.json'), 'utf8'))
partners.map((partner) => {
    partner.children.map((item) => {
        partnersMd += `| <img src="https://raw.githubusercontent.com/longhuicode/eospark-cooperation/master/partners/img/${item.logo}" /> | ${item.title} | ${item.description} | ${item.link} | ${partner.type} | ${item.gaTag} | \n`
    })
})
partnersMd = `<!-- partner_list_start -->\n${partnersMd}\n<!-- partner_list_end -->`
readme = readme.replace(/<!-- partner_list_start -->[\s\S]*<!-- partner_list_end -->/, partnersMd)
readmeCn = readmeCn.replace(/<!-- partner_list_start -->[\s\S]*<!-- partner_list_end -->/, partnersMd)

// Home Partners page
const homePartners = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../home-partners/index.json'), 'utf8'))
homePartners.map((partners) => {
    partners.map((partner) => {
        homePartnersMd += `| <img src="https://raw.githubusercontent.com/longhuicode/eospark-cooperation/master/home-partners/img/${partner.logo}" /> | ${partner.link} | ${partner.gaTag} | \n`
    })
})
homePartnersMd = `<!-- home_partner_list_start -->\n${homePartnersMd}\n<!-- home_partner_list_end -->`
readme = readme.replace(/<!-- home_partner_list_start -->[\s\S]*<!-- home_partner_list_end -->/, homePartnersMd)
readmeCn = readmeCn.replace(/<!-- home_partner_list_start -->[\s\S]*<!-- home_partner_list_end -->/, homePartnersMd)

fs.writeFileSync(path.resolve(__dirname, '../README.md'), readme, 'utf8')
fs.writeFileSync(path.resolve(__dirname, '../README-CN.md'), readmeCn, 'utf8')
