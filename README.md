A simple utility to create a json file ready for import to iTerm2 (https://iterm2.com)

Usage:

run npm install inside this utility folder as always.


1. Create a .json file with your servers names and ssh commands (etc. servers.json) :

[
  {
    "name": "Server A",
    "command": "ssh -i /Users/admin/id_rsa root@127.0.0.1 -p 22"
  },
  {
      "name": "Server B",
      "command": "ssh -i /Users/admin/id_rsa root@localhost -p 22"
    }
]


2. Specify the this input file and an output file as command line arguments like :

node iterm2profiles servers.json output.json


There you go. You can now use the output.json in "Other Actions.../Import JSON profiles.." of your iTerm2 "Profiles/EditProfiles" option

