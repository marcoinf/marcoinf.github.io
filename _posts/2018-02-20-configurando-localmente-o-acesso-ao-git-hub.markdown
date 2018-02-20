---
layout: post
title: "Configurando localmente o acesso ao Git Hub"
date:   2018-02-20 13:40:00 -0400
categories: php
---
## Conta no Git Hub
Caso tenha uma conta no Git Hub faça login em https://github.com/login. Senão crie uma conta em: https://github.com/join?source=header-home

## Configurar localmente o Git
Abra o Cmder e digite os seguintes comandos:
git config --global user.name "Nome Completo"
git config --global user.email "nome.sobrenome@gmail.com"

## Gerar chave RSA
Ainda no Cmder digite:
ssh-keygen -t rsa -b 4096 -C "nome.sobrenome@gmail.com"

## Inserir no Git Hub
Abra o arquivo 'c:\Users\marco\.ssh\id_rsa.pub', copie o seu conteúdo e insera em Settings > SSH and GPG Keys > New SSH Key
