const input = document.querySelector('#cep');
let cep = '01001000';
const submitBtn = document.getElementById('submitBtn');

const logradouro = document.querySelector('#logr');
const bairro = document.querySelector('#bair');
const localidade = document.querySelector('#loca');
const uf = document.querySelector('#uf');

function atribuirCampos(data) {
	logradouro.value = data.logradouro;
	bairro.value = data.bairro;
	localidade.value = data.localidade;
	uf.value = data.uf;
}

const fetchAPI = (cep) => {
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			atribuirCampos(data);
		});
};

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	cep = input.value;
	fetchAPI(cep);
});
