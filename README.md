# Simulação de Banco em JavaScript

Este projeto é uma aplicação em JavaScript que simula o funcionamento de um banco, permitindo operações como depósitos, transferências e empréstimos em uma conta bancária. O projeto é composto por várias classes que representam diferentes aspectos do banco e das contas dos usuários.

## Estrutura do Projeto

### Classes

1. **Deposit**
   - **Atributos**:
     - `valor`: Valor do depósito.
     - `dataCriacao`: Data em que o depósito foi criado.

2. **Transfer**
   - **Atributos**:
     - `usuarioEnviou`: Usuário que enviou a transferência.
     - `usuarioRecebeu`: Usuário que recebeu a transferência.
     - `valor`: Valor da transferência.
     - `dataCriacao`: Data em que a transferência foi criada.

3. **Loan**
   - **Atributos**:
     - `valor`: Valor do empréstimo.
     - `dataCriacao`: Data em que o empréstimo foi criado.
     - `parcelas`: Parcelas do empréstimo (instâncias de `Installment`).
   - **Atributos Estáticos Privados**:
     - `taxaJuros`: Taxa de juros do empréstimo.
   - **Métodos**:
     - `getterEstático`: Para ler a taxa de juros.
     - `setterEstático`: Para definir uma nova taxa de juros a partir de uma porcentagem.

4. **Installment**
   - **Atributos**:
     - `valor`: Valor da parcela.
     - `numero`: Número da parcela.
     - `situacao`: Situação da parcela (paga ou pendente).

5. **Account**
   - **Atributos**:
     - `saldo`: Saldo da conta (privado e somente leitura).
     - `deposits`: Array de depósitos realizados.
     - `loans`: Array de empréstimos.
     - `transfers`: Array de transferências.
     - `dono`: Dono da conta.
   - **Métodos**:
     - `fazerDeposito(valor)`: Adiciona um depósito ao saldo e salva a instância de `Deposit`.
     - `fazerEmprestimo(valor, parcelas)`: Adiciona um empréstimo ao saldo e salva a instância de `Loan`.
     - `fazerTransferencia(valor, usuarioDestinatario)`: Realiza uma transferência e ajusta o saldo conforme necessário.

6. **User**
   - **Atributos**:
     - `nome`: Nome completo do usuário.
     - `email`: Email do usuário.
     - `conta`: Conta bancária do usuário.

7. **App**
   - **Atributos Estáticos Privados**:
     - `usuarios`: Lista dos usuários do aplicativo.
   - **Métodos Estáticos**:
     - `criarUsuario(nome, email)`: Cria um novo usuário. O email deve ser único.
     - `encontrarUsuario(email)`: Encontra um usuário a partir do email.
     - `realizarDeposito(email, valor)`: Realiza um depósito na conta do usuário.
     - `realizarTransferencia(emailOrigem, emailDestino, valor)`: Realiza uma transferência entre usuários.
     - `realizarEmprestimo(email, valor, parcelas)`: Realiza um empréstimo para o usuário.
     - `alterarTaxaEmprestimos(novaTaxa)`: Altera a taxa de juros dos empréstimos.

## Instruções para Início

## estrutura do projeto
### bank-simulation/
│
├── src/
│   ├── Deposit.js
│   ├── Transfer.js
│   ├── Loan.js
│   ├── Installment.js
│   ├── Account.js
│   ├── User.js
│   └── App.js
│
├── index.js
├── README.md
└── package.json




