$(document).ready(function(){ /* Inicializador do jquery, executando assim todo conteudo que tiver dentro dele*/
            $('#carrousel-imagens').slick({ /* Fazendo as imagens aparecer em forma de carrossel */
                autoplay: true /* Fazendo o carrosel passar sozinho */
            }); 

            $('.menu-hamburguer').click(function(){ /* Ao clicar no menu hamburguer teremos a ação */
                $('nav').slideToggle(); /* No slideToggle ele fara toda a ação de descer ou subir o menu */
            }) 

            $('#telefone').mask('(00) 00000-0000', {placeholder: '(00) 00000-0000'}) /* Usando o jQuery mask para dizer como que quero que fique meu campo de telefone, com placeholder posso exemplificar para o usuario como que quero o campo */

            $('form').validate({ /* Dentro do campo validate escrevemos as validações e o validate não trabalha com "id", somente com o nome do campo */
                rules:{ /* Regras de cada campo no formulario */
                    nome: {
                        required: true /* Dizendo que o nome é obrigatório */
                    }, /* Colocamos a virgula para separar cada regra de cada campo */
                    email: {
                        required: true,
                        email: true /* Fazendo o usuario digitar o email corretamento */
                    },
                    telefone: {
                        required: true
                    },
                    mensagem: {
                        required: true
                    },
                    veiculoInteresse: {
                        required: false
                    }
                },
                
                messages: { /* Digitando as mensagem que aparecem quando o formulário é invalido*/
                    nome: 'Por favor, insira o seu nome' /* Alterando a mensagem que aparece em baixo do campo "nome" quando o ele é invalido */
                },
                submitHandler: function(form){ /* Disparando a função "form" caso o formulario seja invalido quando clicado em "enviar" */
                    console.log(form)
                },
                invalidHandler: function(evento, validador){ /* Interceptando o clique no botão quando o formulario estiver invalido */
                    var camposIncorretos = validador.numberOfInvalids();/* O validador tem a função "numberOfInvalids()" retornando a quantidade de campos que estão incorretos*/
                    if(camposIncorretos){ /* Se o campo estiver incorreto ele irá executar o alert */
                        alert(`Existem ${camposIncorretos} campos incorretos`) /* No alert ele irá dizer quantos campos estão incorretos */
                    }else{

                    }
                } 
            })

            $('.lista-veiculos button').click(function(){ /* Após clicar no botão ele executara as funções dentro do "function" */
                var destino = $('#contato'); /* Aplicando o destino que terá após o clique no botão */

                /*parent: acessando o pai(li) do "lista-veiculos button" / find: procurando o elemento(h3) / text: queremos o texto do "h3"*/
                var nomeVeiculo = $(this).parent().find('h3').text() 

                $('#veiculo-interesse').val(nomeVeiculo) /* atribuindo um valor a tag input, passando a mensagem que está dentro da tag h3(Carro BMW) */

                $('html').animate({ /* Selecionando a tag HTML e usamos a função animate para ele ter a animação de descer a tela */
                    scrollTop: destino.offset().top /* Chamando a variavel destino dizendo destino é #contatos, "top" o quão distante o #contato esta do topo da pg, se     utilizamos "top" quer dizer que ela esta lá no final" */
                }, 1000) /* Duração da animação */
            })
        });