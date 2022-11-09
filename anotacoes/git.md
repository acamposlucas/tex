# Aulas Git e Github

Para inicialiar um repositório, utilizamos o comando `git init`.

Para adicionar os arquivos do diretório (pasta) ao repositório (git) utilizamos
o comando `git add .`. Esse comando adiciona **todos** os arquivos da pasta,
podemos usar também `git add nome_do_arquivo` para adicionar apenas um.

O comando `git add` prepara o repositório para um **commit**. Portanto, para
salvar o estado de um projeto utilizamos em seguida o comando:
`git commit -m "mensagem"`.

O comando `git status` serve para mostrar os arquivos não monitorados no
repositório, isto é, que ainda não foram adicionados para futuro commit.

O comando `git log` mostra o histórico de commits do repositório.

## git reset

HEAD > commit index > Stage Working Tree > diretório

reset:

--hard: desfaz o commit, volta ao estado em que estava o repositório antes do
commit desfeito.

--mixed: desfaz o commit, desfaz o stage

--soft: desfaz o commit, stage é mantido e o diretório físico fica inalterado.
