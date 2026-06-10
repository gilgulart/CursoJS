exports.paginaInicial = (req, res) => {
  res.send(`<form action='/'method = 'POST'>
        Nome do cliente: <input type = 'text' name = 'nome'></input>
        <button>Olá mundo</button>
    </form>`);
};

exports.trataPost = (req, res) => {
    res.send('opaa')
}