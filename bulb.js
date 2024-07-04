
$('#btn').on('click', function() {
    // alert("hi");
    console.log("Button clicked"); 
    // $('#btn').css('background-color', 'rgb(4, 79, 17)');
    $('#btn').toggleClass('background').slideUp(500).slideDown(500);
    $('#bulb-b , #bulb-f').toggleClass('bulbon');
        

    

});


