# Projeto de Monitoramento de Localizações Marítimas

## Descrição do Projeto

Este projeto é um protótipo que demonstra o conhecimento dos seguintes requisitos:

- Conhecimentos básicos em Python: incluindo variáveis, tipos de dados, estruturas de controle (if, elif, else, while,
  for);
- Manipulação de Listas e Strings: Capacidade de manipular listas e strings, incluindo operações como adição, remoção,
  concatenação e iteração sobre os elementos;
- Conhecimento em Funções: Habilidade para criar e utilizar funções, incluindo a definição de funções com parâmetros e
  retorno de valores.

## Configuração Inicial do Projeto

Para configurar o projeto inicialmente, siga os passos abaixo:

1. Clone o repositório do projeto.
2. Navegue até o diretório do projeto.

### Criação de um Ambiente Virtual

Para criar um ambiente virtual, você precisa ter o `venv` instalado. Se não estiver instalado, você pode instalá-lo
executando o seguinte comando no terminal:

```bash
python3 -m venv venv
```

Após criar o ambiente virtual, você precisa ativá-lo. Aqui está como você pode fazer isso:

- No Windows, execute o seguinte comando no terminal:

```bash
.\venv\Scripts\activate
```

- No macOS ou Linux, execute o seguinte comando no terminal:

```bash
source venv/bin/activate
```

### Instalação dos Pacotes

Depois de ativar o ambiente virtual, você pode instalar os pacotes necessários para o projeto a partir do
arquivo `requirements.txt`. Aqui está como você pode fazer isso:

```bash
pip install -r requirements.txt
```

Este comando instala todos os pacotes listados no arquivo `requirements.txt`.

### Execução do Projeto

Para executar o projeto, execute o arquivo `main.py` com o comando `uvicorn app.main:app`.

## Requisitos

- Python 3.8 ou superior

## Dependências

- FastAPI
- Pydantic

## Informações Adicionais

Este projeto foi desenvolvido como parte da Global Solution 2024 da FIAP. Ele em conjunto com o projeto de Front-End e o
projeto de Web Development formam nossa solução para o desafio.

## Alunos

- Abner de Paiva Barbosa – RM 558468
- Fernando Luiz Silva Antonio – RM 555201
- Thomas de Almeida Reichmann – RM 554812
