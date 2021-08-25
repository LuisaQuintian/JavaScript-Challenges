function songDecoder(song) {

    let musica = song.replace(/WUB/g, " ").replace(/( )+/g, " ").trim()

    console.log(musica)
}

songDecoder("AWUBWUBWUBBWUBWUBWUBC")