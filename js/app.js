document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro enviado com sucesso!');
    this.reset();
});