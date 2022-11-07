import { should } from "chai"

describe('file upload',()=>{
    it.skip('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        //cy.get('#filesToUpload').attachFile('Ekran görüntüsü 2022-05-11 231719.jpg')

        //veya
        const path1='Ekran görüntüsü 2022-05-11 231719.jpg'
        cy.get('#filesToUpload').attachFile(path1)

        cy.get('#fileList > li').should('include.text','Ekran görüntüsü 2022-05-11 231719.jpg')
        cy.contains('Ekran görüntüsü 2022-05-11 231719.jpg').should('be.visible')

    })
    it.skip('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='Ekran görüntüsü 2022-05-11 231719.jpg'
        const path2='WhatsApp Image 2022-05-13 at 21.19.54.jpeg'
        cy.get('#filesToUpload').attachFile(path1).wait(300)
        .attachFile(path2)

    })
    it.skip('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Ekran görüntüsü 2022-05-11 231719.jpg', 'WhatsApp Image 2022-05-13 at 21.19.54.jpeg'])
        //list olarak gonderince butun dosyalar ayni anda yuklendi
        /*
        const path1='Ekran görüntüsü 2022-05-11 231719.jpg'
        const path2='WhatsApp Image 2022-05-13 at 21.19.54.jpeg'
        cy.get('#filesToUpload').attachFile(path1).wait(300)
        .attachFile(path2)
        */

    })
    it('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='Ekran görüntüsü 2022-05-11 231719.jpg'
        
        cy.get('#filesToUpload').attachFile({filePath:path1,fileName:'tolles bild'})
        cy.contains('tolles bild',should('be.visible'))
       
       

    })
})