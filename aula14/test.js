try { 
    console.log(naoExisto);
} catch (error){
    console.log('naoExisto, não existe');
}

function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error("x e y precisam ser números");
        
    };

    return x + y;
}

try{
    console.log(sum(1,2));
    console.log(sum("1",2));
} catch(err){
    console.log("Alguma coisa mais amigável pro usuário");
    
}

try{
    // executado quando não há erros
    console.log("abri um arquivo");
    console.log('manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');
} catch(e){
// executado quando há erros
    console.log('tratando o erro');
} finally{
// sempre executado
    console.log('finallly: eu sempre sou executado');
    
}
