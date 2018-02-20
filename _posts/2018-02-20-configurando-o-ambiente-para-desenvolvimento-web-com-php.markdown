---
layout: post
title: "Configurando o ambiente para desenvolvimento web com PHP"
date:   2018-02-20 13:39:00 -0400
categories: php
---
## Instalando o Cmder
Baixar o [Cmder](http://cmder.net/)<br>
Obs.: baixar a versão Full. O Cmder, na versão Full, já vem com o Git instalado.<br>

# Instalar e configuar o PHP
Baixar o [PHP](http://php.net/downloads.php):
* Descompactar na pasta "C:\php".
* Colocar no PATH do Sistema Operacional.
* Editar o arquivo "C:\php\php.ini" e remover o ponto-e-vírgula da linha `extension=php_pdo_mysql.dll`.

# Instalar o Composer
Baixar e instalar o [Composer](https://getcomposer.org/download/)

# Instalar o MySQL
Baixar e instalar o [MySQL Server](https://dev.mysql.com/downloads/mysql/). Colocar a pasta `"C:\Program Files (x86)\MySQL\MySQL Server 5.7\bin\"` no PATH do Sistema Operacional.

# Instalar o PhpStorm
Baixar e instalar o [PhpStorm](https://www.jetbrains.com/phpstorm/).

# Realizando os testes
Abra o Cmder e digite os seguintes comandos:
* php --version
* composer --version
* git --version
* mysql -u root -p
