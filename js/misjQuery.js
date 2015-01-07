        function inicializar(){

                //Al cargar el sitio aparece el contenido de novedades.
                $('#Novedades').removeClass('desaparecer');
                $('#Novedades').animate({
                    opacity:0,
                    left:'-8%'},200);
                $('#Novedades').animate({
                    opacity:1,
                    left:'0%'},200);


                //Cuando se pulsa un elemento del menu
                $('.MenuItem').click(function(){
                    
                    $('.Medida').animate({
                       opacity: 0,
                       left:'-8%'},200);
                    //Aprovechando que la caja a mostrar tiene el mismo nombre 
                    //pero sin CLick que su boton recupero el ID del boton que 
                    //sería por ejemplo: "NovedadesClick"
                    //Y le añado la almohadilla
                    var idBoxSelected = '#'+$(this).attr('id');  
                    //Luego le quito Click, quedandome en idBoxSelected "Novedades".
                    var idBoxSelected = idBoxSelected.replace("Click","");
                    
                    //Quito la clase active a todos los botones, y oculto todos los div
                    $('.MenuItem').each(function(){
                          var idBox = '#'+$(this).attr('id');    
                          var idBox = idBox.replace("Click","");
                          $(this).removeClass('active');
                          $(idBox).addClass('desaparecer');
                    });

                    //Por ultimo, muestro activo el boton que pulsé
                    $(this).addClass('active');
                    //Y des-oculto el div correspondiente
                    $(idBoxSelected).removeClass('desaparecer');
                    var efect=$(idBoxSelected).removeClass('desaparecer');
                    $(efect).animate({
                        opacity: 1,
                        left:'0%'},200);
                    $('#MostrarVermas').addClass('desaparecer');
                });
                
        };
        
            $(document).ready(inicializar); 

/***************boton vermas home*************************/
            $(document).ready(botonVermas);

            function botonVermas(){
                    $('#SubContent1').click(masNovedades);
                    $('#SubContent2').click(masNovedades2);
                    $('#SubContent3').click(masNovedades3);

                    $('.MenuItem').click(verteotravez);
                    $('.ButtonRegresar').click(inicio);

                    function masNovedades(){
                        $('#Novedades').addClass('desaparecer');
                        $('#MostrarVermas').removeClass('desaparecer');
                        var animado = $('#MostrarVermas').removeClass('desaparecer');
                        $(animado).animate({
                        opacity: 1,
                        left:'0%'},200);
                        $('.MenuItem').removeClass('active');
                        return false
                    }

                    function masNovedades2(){
                        $('#Novedades').addClass('desaparecer');
                        $('.MenuItem').removeClass('active');
                        $('#MostrarVermas2').removeClass('desaparecer');
                        var animado = $('#MostrarVermas2').removeClass('desaparecer');
                        $(animado).animate({
                        opacity: 1,
                        left:'0%'},200);
                        return false
                    }

                    function masNovedades3(){
                        $('#Novedades').addClass('desaparecer');
                        $('.MenuItem').removeClass('active');
                        $('#MostrarVermas3').removeClass('desaparecer');
                        var animado = $('#MostrarVermas3').removeClass('desaparecer');
                        $(animado).animate({
                        opacity: 1,
                        left:'0%'},200);
                        return false
                    }

                    function verteotravez(){
                        $('#MostrarVermas').addClass('desaparecer');
                        $('#MostrarVermas2').addClass('desaparecer');
                        $('#MostrarVermas3').addClass('desaparecer');

                    }

                    function inicio(){
                        verteotravez();
                        $('#Novedades').animate({
                            opacity:0,
                            left:'-8%'},200);
                        
                        $('#Novedades').removeClass('desaparecer');

                        $('#Novedades').animate({
                            opacity:1,
                            left:'0%'},200);
                        return false
                    }

            }
/*********Seccion Asociados*************/
            function asociados(){
                $('#eventoAsocia').hide();
                $('#eventos').click(aparecer);


                function aparecer(){
                    $('#afiliacionAsocia').hide();
                    $('#eventoAsocia').show(function(){
                        $('#eventos').addClass('selecactive');
                        $('#afiliacion').removeClass('selecactive');

                    });

                    $('#afiliacion').click(desapar);

                    function desapar(){
                        $('#afiliacionAsocia').show(function(){
                            $('#afiliacion').addClass('selecactive');
                            $('#eventos').removeClass('selecactive');
                        });
                        $('#eventoAsocia').hide();
                    }
                    
                    // $('#eventoAsocia').removeClass('desaparecer');
                }
                

            }

            $(document).ready(asociados);

            //Funcion encargada de abrir y mostrar la seccion eventos anteriores

            function eventos(){
                $('.ContentItem-eventos').hide();
                $('.EventosAnteriores').click(AbrirEventosAnt);
                $(".ItemEventos").click(abrirPdf);
                $('.SubItem-event li a').click(stop);

                function AbrirEventosAnt(){
                    $('.ContentItem-eventos').toggle();

                }

                function abrirPdf(){
                $(".SubitemActivado").children().eq(1).hide();
                $(".SubitemActivado").removeClass("SubitemActivado");
                $(this).children().eq(1).fadeIn();
                $(this).addClass("SubitemActivado");
                }

                function stop(){
                    return false;
                }
            }

            $(document).ready(eventos);


       
        

       
        