const checkWord = require('check-word');
const words = checkWord('en');

const getBtnElement = async (name)=>{
  return await $(`~btn:${name}`);
}

const getTxtElement = async (name)=>{
    return await $(`~txt:${name}`);
}

const getTxtInputElement = async (name)=>{
    return await $(`~txtInput:${name}`);
}

describe('Wallet Bridge Tests', () => {
    it('calls the GenerateMnemonic bridge', async()=>{
        let btn = await getBtnElement('Create');
        await btn.click();
        let txtComponent = await getTxtElement('Mnemonic');
        let txt = await txtComponent.getText();
        // the bridge returns the mnemonic
        const mnemonics = txt.split(" ");
        expect(mnemonics.length).toEqual(12);
        mnemonics.forEach(element => {
            expect(words.check(element)).toEqual(true);
        });
    });

    it('calls the CreateWallet bridge', async()=>{
        await getBtnElement('CreateWallet')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        expect(txtComponent.error).toBeUndefined();
    });

    it('calls the CreateAddress bridge', async()=>{
        await getBtnElement('CreateAddress')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toBeDefined();
    });

    it('calls the GetBalanceInfo bridge', async()=>{
        await getBtnElement('GetBalanceInfo')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toBeDefined();
    });

    it('calls the ExportWalletWithMnemonic bridge', async()=>{
        await getBtnElement('exportClicked')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        const mnemonics = txt.split(" ");
        expect(mnemonics.length).toEqual(12);
        mnemonics.forEach(element => {
            expect(words.check(element)).toEqual(true);
        });
    });

    it('calls the ChangePassword bridge', async()=>{
        await getBtnElement('ChangePassword')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toEqual('success');
    });

    it('calls the GetMultiSignPubKeyWithMnemonic bridge', async()=>{
        await getBtnElement('GetMultiSignPubKeyWithMnemonic')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toBeDefined();
    });

    it('calls the GetPublicKey bridge', async()=>{
        await getBtnElement('GetPublicKey')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toBeDefined();
    });

    it('calls the GetSupportedChains bridge', async()=>{
        await getBtnElement('GetSupportedChains')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toEqual('"[ELA, IdChain]"');
    });

    it('calls the IsAddressValid bridge', async()=>{
        await getBtnElement('IsAddressValid')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        expect(txt).toEqual('True');
    });
});

// describe('Import Wallet', () => {
//     afterEach()
//     it('calls the ImportWalletWithMnemonic bridge', async()=>{
//         await getBtnElement('Import')
//         .then((elem) => elem.click())
//         await getTxtInputElement('Mnemonic')
//         .then((elem) => elem.setValue('cry mechanic bean they discover vendor couple adapt walk room edit dinner'))
//         await getBtnElement('ImportWallet')
//         .then((elem) => elem.click())
//         let txtComponent = await getTxtElement('Result');
//         expect(txtComponent.error).toBeUndefined();
//     });
// });