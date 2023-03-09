$(document).ready(function() {
	var animeList = $('#anime-list');
	for(var i = 0; i < anime.length; i++) {
		var animeItem = $('<div>').addClass('anime-item');
		var animeName = $('<h2>').text(anime[i].name);
		var animeGenre = $('<p>').text('Genre: ' + anime[i].genre);
		var animeEpisodes = $('<p>').text('Episodes: ' + anime[i].episodes);
		var animeRating = $('<p>').text('Rating: ' + anime[i].rating);
		animeItem.append(animeName, animeGenre, animeEpisodes, animeRating);
		animeList.append(animeItem);
	}
});
