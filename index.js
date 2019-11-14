//All mistakes from the img
var mistakes = [
        { 'x': 145, 'y': 130 }, // Biene, Punkt, Flügel        
        { 'x': 166, 'y': 213 }, // Biene, Linie, unter Bein        
        { 'x': 277, 'y': 67 } // Stern      
    ];

$("#main_game_field").append(
	"<img class='.play_img' src='assets/origin.png' usemap='#map' />" + 
	"<map name='map'></map>"
	);

mistakes.forEach(element => $("map").append(
	"<area class='mistake_area' shape='circle' "+
	"coords='" + element['x'] + "," + element['y'] + "," + 15 + "' " +
	"href='#' />" ));
	

$(".mistake_area").on("click", function(e){
    e.preventDefault();

	console.log("click");	
});


