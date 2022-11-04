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
