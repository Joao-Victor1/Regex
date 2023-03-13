import chalk from "chalk";
import fs from "fs";

function trataErro(erro){
    // if(erro.code == "ENOENT"){
    //     console.log(chalk.red("Erro Enoent"))
    // }
    throw new Error(chalk.red(erro.code, "Não há arquivo no caminho."));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
        console.log(chalk.blue(texto));
    }catch(erro){
        trataErro(erro);
    }
}

// function pegaArquivo(caminhoDoArquivo){
//     fs.promises
//     .readFile(caminhoDoArquivo, 'utf-8')
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo){
//     fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }


pegaArquivo('./Arquivos/texto.2md');


