var mistakes = [
        { 'x': 145, 'y': 130 }, // Biene, Punkt, Flügel        
        { 'x': 166, 'y': 213 }, // Biene, Linie, unter Bein        
        { 'x': 277, 'y': 67 } // Stern      
    ];
	
// Füge zwei Felder, wo Bilder gespeichert werden
$("#main_game_field").append("<div class='div_with_img' id ='div_origin_img'></div>");
$("#main_game_field").append("<div class='div_with_img' id ='div_clone_img'></div>");

// Füge zwei Bilder in die Felder hinzu, definiere Maps
$("#div_origin_img").append(
	"<img class='.play_img' id='img_orig' src='assets/origin.png' usemap='#map_origin' >" + 
	"<map name='map_origin'></map>"
	);
$("#div_clone_img").append(
	"<img class='play_img' src='assets/clone.png' usemap='#map_clone' />" + 
	"<map name='map_clone'></map>"
	);
	

// Koordinaten müssen skalierbar sein
mistakes.forEach(element => $("map").append(
	"<area class='mistake_area' shape='circle' "+
	"coords='" + (element['x'] * 400 / 558 )+ "," + (element['y'] * 500 / 656 )+ "," + 15 + "' " +
	"href='#' />" ));
	

$(".mistake_area").on("click", function(e){
    e.preventDefault();

	console.log("click");	
});