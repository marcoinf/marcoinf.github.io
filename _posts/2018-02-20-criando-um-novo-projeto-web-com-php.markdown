---
layout: post
title: "Criando um novo projeto web com PHP"
date:   2018-02-20 13:41:00 -0400
categories: php
---
1) Abra o [Git Hub](http://github.com) e crie um novo repositório denominado `app_escolar`.

2) No Cmder entre na pasta 'projetos' e clone o projeto que acabou de criar no Git Hub:
git clone git@github.com:marcoaugustoandrade/app_escolar.git

3) Abra a pasta `projetos/app_escolar` no PhpStorm.

4) Crie as pastas `App\Model`, `App\DAO`, `views` e `database`

5) Crie um arquivo na raiz do projeto denominado 'composer.json' e coloque o seguinte conteúdo:
{
  "autoload": {
    "psr-4": {
      "App\\": "App/"
    }
  },
  "require": {
    "twbs/bootstrap" : "4.0.0"
  }
}

6) No Cmder rode o comando `composer install` para instalar as dependências e gerar o autoload.
Observer que será criada uma pasta 'vendor', contendo o Bootstrap (versão 4.0.0) e os autoloads das classes.
