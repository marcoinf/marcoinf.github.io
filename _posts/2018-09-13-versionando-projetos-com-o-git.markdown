---
layout: post
title: "Versionando projetos com o Git"
date:   2018-09-13 16:10:00 -0400
categories: git
---
# Configurando o Git
Antes de iniciar o uso do Git faça as seguintes configurações:
{% highlight bash %}
git config --global user.name "Nome Completo"
git config --global user.email "nome.sobrenome@gmail.com"
{% endhighlight %}

# Crie seu repositório no Git Hub
Crie uma conta ou realize login no site do [Git Hub](https://github.com). Agora crie um novo repositório.

# Clonar um repositório
Para criar um clone do seu repositório utilize o comando, substituindo pelo endereço do seu repositório:
{% highlight bash %}
git clone https://github.com/marcoaugustoandrade/curso-de-git.git
{% endhighlight %}

# Fluxo de trabalho
Há 3 locais dentro do seu repositório nomeados da seguinte forma:
1) **Working directory**: contém os arquivos do repositório
2) **Index**: área temporária
3) **Head**: aponta para o último commit

# Verificando o status do repositório
Sempre é possível, e necessário, verificar o status do repostiório com o seguinte comando:
{% highlight bash %}
git status
{% endhighlight %}

# Propondo mudanças
Para adicionar algum arquivo ao `index`, ou seja, propor mudanças, utilize o comando:
{% highlight bash %}
git add nome-do-arquivo
{% endhighlight %}

Alternativamente utilize o comando a seguir para colocar todos os arquivos do projeto no index:
{% highlight bash %}
git add .
{% endhighlight %}

# Confirmando as mudanças
Para de fato gravar as mudanças, ou seja, realizar os commits, utilize o comando:
{% highlight bash %}
git commit -m "Comentários sobre o as alterações"
{% endhighlight %}
Assim, os arquivos foram para o head.

# Enviando as alterações para o servidor
Caso queira enviar as mudanças para o repositório remoto utilize o comando:
{% highlight bash %}
git push -u origin master
{% endhighlight %}

# Ignorando arquivos e pastas
Caso queira ignorar arquivos ou pastas, para que os mesmos não façam parte do repositório controlado pelo Git, basta editar o arquivo `.gitignore`, identificando-os.

# Atualizando os repositórios
Imagine a seguinte situação: você começou um projeto na escola e enviou os commits para o seu repositório remoto. Em casa fez o clone do repositório e realizou mais alguns commits e enviou para o repositório remoto. Agora o seu repositório na escola está desatualizado em relação ao repositório remoto. Para atualiza-lo utilize o seguinte comando:
{% highlight bash %}
git pull
{% endhighlight %}

# Criando um repositório local
Você também pode criar um repositório local, ou seja, sem vínculos com o reposiório que clonou do Git Hub com o seguinte comando:
{% highlight bash %}
git init
{% endhighlight %}
O funcionamento é o mesmo, com exceção que você não irá enviar para um repositório remoto.

# Adicionando um repositório remoto
Se após criar um repositório local for necessário anexa-lo a um repositório remoto, utilize o seguinte comando:
{% highlight bash %}
git remote add origin https://github.com/marcoaugustoandrade/curso-de-git.git
{% endhighlight %}
Agora você pode fazer `git` push e enviar os commits para o repostiório remoto.

# Criando um novo branch
Ao desenvolver uma nova funcionalidade da aplicação é comum que crie-se uma nova ramificação (branch), implementar e testar, para somente ao final mesclar (merge) como o código que está na branch master, evitando-se assim, que as alterações na branch criada quebrem a branch master. A branch é criada com uma cópia de tudo que está armazenado na branch master.
Para criar uma branch utilize o comando:
{% highlight bash %}
git branch funcionalidade_x
{% endhighlight %}

# Alternando entre os branchs
Para mudar de branch utilize o comando:
{% highlight bash %}
git checkout funcionalidade_x
git status
{% endhighlight %}

# Listando as branchs do projeto
Para listar as branchs do projeto utilize o seguinte comando:
{% highlight bash %}
git branch
{% endhighlight %}

# Enviando a branch para o repositório remoto
Para enviar os commits da branch criada para o repositório remoto utilize o seguinte comando:
{% highlight bash %}
git push -u origin funcionalidade_x
{% endhighlight %}

# Mesclando branchs
Geralmente, ao final do desenvolvimento de uma funcionalidade que está contida em uma branch é necessário mesclar com a branch master. Para isso, primeiro retorne para a branch master, e em seguida utilize o comando:
{% highlight bash %}
git checkout master
git merge funcionalidade_x
{% endhighlight %}
Assim, o conteúdo da branch `funcionalidade_x` será mesclado a branch `master`.

# Removendo branchs
Você pode remover as branchs que foram mescladas ou são descartáveis, voltando a branch master, e em seguida utilizando os seguintes comandos:
{% highlight bash %}
git checkout master
git branch -d funcionalidade_x
{% endhighlight %}












