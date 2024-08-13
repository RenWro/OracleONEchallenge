# OracleONEchallenge

## Descrição
Este é o desafio da turma 6 do Oracle ONE cujo objetivo é criptografar mensagens do usuário de modo a ser possível descriptografá-las posteriormente.


> Funciona apenas com letras minúsculas (o programa irá transformar letras maiúsculas em minúsculas) e sem acentuação ou caracteres especiais (serão ignorados).

## 🔎 Como funciona?
1. Insira o texto na esquerda;
2. Selecione criptografar ou descriptografar;
3. A mensagem será mostrada à direita.
> Opcional: Utilize o botão copiar para acessar a mensagem rapidamente.


## Regras de Criptografia
As "chaves" de criptografia que utilizaremos são:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

## Requisitos de projeto
- Deve funcionar apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

### Exemplos
- "gato" => "gaitober"
- "gaitober" => "gato"

## Funcionalidades
- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado.
- A pessoa usuária deve poder escolher entre as duas opções.
- O resultado deve ser exibido na tela.

## Extras
- Um botão que copie o texto criptografado/descriptografado para a área de transferência, ou seja, que tenha a mesma funcionalidade do Ctrl+C ou da opção "copiar" do menu dos aplicativos.
