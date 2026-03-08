# 💳 PayPal Balance Changer

Extensão que permite alterar o saldo exibido no site do PayPal para um valor personalizado.

## ✨ Funcionalidades

- Altera o valor do saldo exibido na interface do PayPal
- Interface simples para inserir o valor desejado
- Mantém o valor alterado mesmo com navegação no site
- Não interfere com outras funcionalidades do PayPal

## 📦 Instalação

1. Baixe os arquivos da extensão
2. Abra o Google Chrome e acesse `chrome://extensions/`
3. Ative o **Modo do desenvolvedor** (canto superior direito)
4. Clique em **Carregar sem compactação**
5. Selecione a pasta onde salvou os arquivos da extensão

## 🚀 Como Usar

1. Acesse o site do PayPal
2. Clique no ícone da extensão na barra do Chrome
3. Digite o valor desejado (ex: `1.250,00`)
4. Clique em **Aplicar**
5. A página recarrega automaticamente e o saldo exibido será alterado

## 📁 Arquivos da Extensão

| Arquivo | Descrição |
|---|---|
| `manifest.json` | Configuração da extensão (Manifest V3) |
| `content.js` | Script que injeta no PayPal e altera o saldo |
| `popup.html` | Interface do popup para inserir o valor |
| `popup.js` | Lógica do popup (salva valor e recarrega página) |
| `icon.png` | Ícone da extensão |

## 🔧 Como Funciona

A extensão utiliza um `MutationObserver` para detectar quando o PayPal renderiza o elemento do saldo e o substitui pelo valor personalizado. O observer é cirúrgico e afeta apenas o elemento do saldo, sem interferir com outras interações do site.

## 🔐 Permissões

- `storage`: Para salvar o valor personalizado
- `activeTab`: Para recarregar a aba após aplicar o valor
- `scripting`: Para injetar o content script
- `host_permissions`: Para funcionar em páginas do PayPal

## 🌍 Compatibilidade

- Qualquer site do PayPal (paypal.com)

## ⚠️ Notas

- A alteração é apenas visual e não afeta o saldo real da conta
- O valor é salvo localmente no navegador
- A extensão funciona mesmo com navegação dentro do PayPal

## 🛠️ Desenvolvimento

Para modificar a extensão:

1. Edite os arquivos desejados
2. Recarregue a extensão em `chrome://extensions/`
3. Teste as alterações no site do PayPal

## 📜 Licença

Este projeto é open-source e pode ser usado, modificado e distribuído livremente sob os termos da licença MIT.
