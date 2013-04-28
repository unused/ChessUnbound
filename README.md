# SEWM/ST Chess App

## General Information

client: sencha touch

server: sinatra

bdd: cucumber with selenium

## Setup

    $ bundle install

## User-Stories

BDD Client:

* Registration (Prio 3)
* Login (Prio 3)
* Guest-Login (Prio 2, really needed?)
* Choose Session (Prio 1)
* Create Game (Prio 1)
* Connect to Game (Prio 1)
* Configure Game (Prio 2)
* Do valid move (Prio 2)
* Do invalid move (Prio 2)

BDD Server:

* Do invalid move (Prio 2)
* Do valid move (Prio 2)
* Registration (Prio 3)
* Login (Prio 3)
* List Sessions (Prio 1)
* Create Session (Prio 1)

## Other Information

* Games should be choosen short (1 week) or long (3 weeks)
* Validate moves client- and server-side
* Store game position with [FEN][1] notation
* Notify if a move was made


[1]: http://en.wikipedia.org/wiki/Board_representation_(chess)#Forsyth-Edwards_Notation_.28FEN.29


