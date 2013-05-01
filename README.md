# SEWM/ST Chess App

Students project for [TU-Graz][tug]

## General Information

client: sencha touch as mobile client

server: sinatra for web services

bdd: cucumber with selenium

tdd: sencha unit-tests and ruby minitests

## Features

* Validate moves client- and server-side

## Server Setup

    $ bundle install
    $ rake db:create_indexes[production]

## Server API

Authenticate by sending valid username and key parameter

Game positions are stored using the [FEN][fen] notation

The possible game status can be found at the ruby-chess library [documentation][rchess]

    /user [post]
      generate a new guest user
      response: { username:string, key:string }

    /user [put]
      rename a user
      request: username:string
      response: { username:string }

    /game [post] !authenticated
      start a new game
      request: name:string (optional)
      response: { game: { _id:string, black:string, white:string, fen:string } }

    /games [get] !authenticate
      games list of authenticated user
      response: { [ game, game, ... ] }

    /game/join/:game_id [post] !authenticate
      join a waiting game

    /move/:game_id/:move [post] !authenticate
      move a piece
      response: { valid:true|false, status:string, fen:string }

## Development

    bundle exec rake features:client # run client behaviour test
    bundle exec rake features:server # run server behaviour test
    bundle exec rake test # run server unit-test
    bundle exec rake notes # see implementation notes


[tug]: http://portal.tugraz.at/ "tu-graz"
[fen]: http://en.wikipedia.org/wiki/Board_representation_(chess)#Forsyth-Edwards_Notation_.28FEN.29 "fen notation"
[rchess]: http://www.rubydoc.info/github/pioz/chess/index "ruby pioz/chess"

