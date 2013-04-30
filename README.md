# SEWM/ST Chess App

Students project for [TU-Graz][1]

## General Information

client: sencha touch as mobile client

server: sinatra for web services

bdd: cucumber with selenium

tdd: sencha unit-tests and ruby minitests

## Setup

    $ bundle install
    $ rake db:create_indexes[production]

## User-Stories

BDD Client:

* Registration (priority 3)
* Login (priority 3)
* Guest-Login (priority 2, really needed?)
* Choose Session (priority 1)
* Create Game (priority 1)
* Connect to Game (priority 1)
* Configure Game (priority 2)
* Do valid move (priority 2)
* Do invalid move (priority 2)

BDD Server:

* Do invalid move (priority 2)
* Do valid move (priority 2)
* Registration (priority 3)
* Login (priority 3)
* List Sessions (priority 1)
* Create Session (priority 1)

## Other Information

* Games should be choosen short (1 week) or long (3 weeks)
* Validate moves client- and server-side
* Store game position with [FEN][2] notation
* Notify if a move was made


[1]: http://portal.tugraz.at/
[2]: http://en.wikipedia.org/wiki/Board_representation_(chess)#Forsyth-Edwards_Notation_.28FEN.29

