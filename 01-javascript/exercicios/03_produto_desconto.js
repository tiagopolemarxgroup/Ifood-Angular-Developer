let valorProduto = 100;
let desconto = 15;
let condicaoPagamento = "acima 2 vezes";
let total;
if(condicaoPagamento === "avista"){
    total = valorProduto - ((valorProduto * desconto) / 100);
}else if(condicaoPagamento  === "pix"){
    total = valorProduto - ((valorProduto * desconto) / 100); 
}else if(condicaoPagamento === "2 vezes"){
    total = valorProduto;
}else{
    total = valorProduto + ((valorProduto * desconto) / 100);
}

console.log("Total: " + total)