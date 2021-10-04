const Dropbox = require('dropbox').Dropbox
const fs = require('fs')
const prompt = require('prompt')

prompt.start()
prompt.get({
    properties: {
        accessUrl: 'Por favor a url'
    },
}, (error, result) => {
    var dbx = new Dropbox({ accessToken: 'seu token' });
    dbx.sharingGetSharedLinkFile({ url: result.accessUrl })
        .then((data) => {
            fs.writeFile(data['result']['name'], data['result']['fileBinary'], { encoding: 'binary' }, (err) => {
                if (err) {
                    console.log('Erro')
                    throw err;
                }
                console.log(`O ${data['result']['name']} foi savo com sucesso!!.`);
            });
        }).catch((err) => {
            throw err
        })
})

