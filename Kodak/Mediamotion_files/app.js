$(document).ready(function () {
    /*var isNavbarOpened = false;

    // Fixed navigation
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            if (!isNavbarOpened) {
                $('.navbar').addClass('fixednav');
                isNavbarOpened = true;
            }
        } else {
            if (isNavbarOpened) {
                $('.navbar').removeClass('fixednav');
                isNavbarOpened = false;
            }
        }
    });

    if ($(window).scrollTop() > 500 && !isNavbarOpened) {
        $('.navbar').addClass('fixednav');
    }*/


	// NEWSLETTER
    $('#form_newsletter').on('submit', function (e) {
        e.preventDefault();

        var $this = $(this);
        var formError = "";

        if ($('.nom_newsletter').val() != '' && $('.email_newsletter').val() != '') {
            // Envoi de la requète HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'),
                type: $this.attr('method'),
                data: $this.serialize(),
                dataType: "json",
                success: function (data) {
                	if(data.error == 0){
                    	// Cache le formulaire
                    	$('#form_newsletter').hide();
                    
                    	// Reset des input
                    	$('.nom_newsletter').val('');
                    	$('.email_newsletter').val('');
                    
                    	// Affiche le message de succès
                    	$('#success_message p').text(data.message);
                    	$('#success_message').fadeIn(300);
                    }else{
                    	sendError(data.message);
                    }
                },
                error: function (error) {
                    sendError('Une erreur réseau ou serveur est survenue. Veuillez rafraîchir la page et réessayer.');
                }
            });
        } else {
            sendError('Merci de renseigner les informations demandées.');
        }

        return false;
    });
    
    // CONTACT
    $('#form_contact').on('submit', function (e) {
        e.preventDefault();

        var $this = $(this);
        var formError = "";

        if ($('.nom_contact').val() != '' && $('.email_contact').val() != '' && $('.prenom_contact').val() != '' && $('.objet_contact').val() != '' && $('.message_contact').val() != '') {
            if($('.message_contact').val().length >= 20){
				// Envoi de la requète HTTP en mode asynchrone
				$.ajax({
					url: $this.attr('action'),
					type: $this.attr('method'),
					data: $this.serialize(),
					dataType: "json",
					success: function (data) {
						if(data.error == 0){
							// Cache le formulaire
							$('#form_contact').hide();
							$('#contact h2').hide();
					
							// Reset des input
							$('.nom_contact').val('');
							$('.email_contact').val('');
							$('.prenom_contact').val('');
							$('.telephone_contact').val('');
							$('.objet_contact').val('');
							$('.message_contact').val('');
							
							$('#success_message_contact').fadeIn(400);
						}else{
							sendError(data.message);
						}
					},
					error: function (error) {
						sendError('Une erreur réseau ou serveur est survenue. Veuillez rafraîchir la page et réessayer.');
					}
				});
			}else{
				sendError('Le message doit contenir au moins 20 caractères.');
			}
        } else {
            sendError('Merci de renseigner les informations demandées.');
        }

        return false;
    });
    
    
    // Fonction qui affiche le message d'erreur
    function sendError(msg){
        $('#error_message').text(msg);
        $('.modal').modal('show');
    }


});
