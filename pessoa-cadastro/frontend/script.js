document.getElementById('pessoa-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    console.log('Formulário enviado');

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    try {
        const response = await fetch('http://localhost:5501/api/pessoa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, cpf, telefone }),
        });

        if (response.ok) {
            alert('Pessoa cadastrada com sucesso!');
        } else {
            alert('Erro ao cadastrar pessoa.');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
