const fs = require('fs');
const path = require('path');
var servers = {};

var profile=
        {
            "Working Directory" : "\/Users",
            "Prompt Before Closing 2" : 0,
            "Selected Text Color" : {
                "Green Component" : 0,
                "Blue Component" : 0,
                "Red Component" : 0
            },
            "Rows" : 25,
            "Ansi 11 Color" : {
                "Green Component" : 1,
                "Blue Component" : 0.3333333432674408,
                "Red Component" : 1
            },
            "Use Italic Font" : true,
            "Foreground Color" : {
                "Green Component" : 0.73333334922790527,
                "Blue Component" : 0.73333334922790527,
                "Red Component" : 0.73333334922790527
            },
            "Right Option Key Sends" : 0,
            "Character Encoding" : 4,
            "Selection Color" : {
                "Green Component" : 0.8353000283241272,
                "Blue Component" : 1,
                "Red Component" : 0.70980000495910645
            },
            "Triggers" : [

            ],
            "Blend" : 0.30000001192092896,
            "Mouse Reporting" : true,
            "Ansi 4 Color" : {
                "Green Component" : 0,
                "Blue Component" : 0.73333334922790527,
                "Red Component" : 0
            },
            "Non-ASCII Anti Aliased" : true,
            "Sync Title" : false,
            "Disable Window Resizing" : true,
            "Close Sessions On End" : true,
            "Jobs to Ignore" : [
                "rlogin",
                "ssh",
                "slogin",
                "telnet"
            ],
            "Scrollback With Status Bar" : false,
            "Scrollback Lines" : 1000,
            "Scrollback in Alternate Screen" : true,
            "Hide After Opening" : false,
            "Flashing Bell" : false,
            "BM Growl" : true,
            "Ansi 3 Color" : {
                "Green Component" : 0.73333334922790527,
                "Blue Component" : 0,
                "Red Component" : 0.73333334922790527
            },
            "Shortcut" : "",
            "Background Image Location" : "",
            "Bold Color" : {
                "Green Component" : 1,
                "Blue Component" : 1,
                "Red Component" : 1
            },
            "Unlimited Scrollback" : false,
            "Custom Command" : "Yes",
            "Smart Selection Rules" : [
                {
                    "notes" : "Word bounded by whitespace",
                    "regex" : "\\S+",
                    "precision" : "low"
                },
                {
                    "notes" : "C++ namespace::identifier",
                    "regex" : "([a-zA-Z0-9_]+::)+[a-zA-Z0-9_]+",
                    "precision" : "normal"
                },
                {
                    "notes" : "Paths",
                    "regex" : "\\~?\/?([[:letter:][:number:]._-]+\/+)+[[:letter:][:number:]._-]+\/?",
                    "precision" : "normal"
                },
                {
                    "notes" : "Quoted string",
                    "regex" : "@?\"(?:[^\"\\\\]|\\\\.)*\"",
                    "precision" : "normal"
                },
                {
                    "notes" : "Java\/Python include paths",
                    "regex" : "([[:letter:][:number:]._]+\\.)+[[:letter:][:number:]._]+",
                    "precision" : "normal"
                },
                {
                    "notes" : "mailto URL",
                    "regex" : "\\bmailto:([a-z0-9A-Z_]+@)?([a-zA-Z0-9\\-]+\\.)*[a-zA-Z0-9\\-]+\\b",
                    "precision" : "normal"
                },
                {
                    "notes" : "Obj-C selector",
                    "regex" : "@selector\\([^)]+\\)",
                    "precision" : "high"
                },
                {
                    "notes" : "email address",
                    "regex" : "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\\b",
                    "precision" : "high"
                },
                {
                    "notes" : "HTTP URL",
                    "regex" : "https?:\/\/([a-z0-9A-Z]+(:[a-zA-Z0-9]+)?@)?[a-z0-9A-Z]+(\\.[a-z0-9A-Z]+)*((:[0-9]+)?)(\/[a-zA-Z0-9;\/\\.\\-_+%~?&@=#\\(\\)]*)?",
                    "precision" : "very_high"
                },
                {
                    "notes" : "SSH URL",
                    "regex" : "\\bssh:([a-z0-9A-Z_]+@)?([a-zA-Z0-9\\-]+\\.)*[a-zA-Z0-9\\-]+\\b",
                    "precision" : "very_high"
                },
                {
                    "notes" : "Telnet URL",
                    "regex" : "\\btelnet:([a-z0-9A-Z_]+@)?([a-zA-Z0-9\\-]+\\.)*[a-zA-Z0-9\\-]+\\b",
                    "precision" : "very_high"
                }
            ],
            "Keyboard Map" : {
                "0xf700-0x260000" : {
                    "Text" : "[1;6A",
                    "Action" : 10
                },
                "0x37-0x40000" : {
                    "Text" : "0x1f",
                    "Action" : 11
                },
                "0x32-0x40000" : {
                    "Text" : "0x00",
                    "Action" : 11
                },
                "0xf709-0x20000" : {
                    "Text" : "[17;2~",
                    "Action" : 10
                },
                "0xf70c-0x20000" : {
                    "Text" : "[20;2~",
                    "Action" : 10
                },
                "0xf729-0x20000" : {
                    "Text" : "[1;2H",
                    "Action" : 10
                },
                "0xf72b-0x40000" : {
                    "Text" : "[1;5F",
                    "Action" : 10
                },
                "0xf705-0x20000" : {
                    "Text" : "[1;2Q",
                    "Action" : 10
                },
                "0xf703-0x260000" : {
                    "Text" : "[1;6C",
                    "Action" : 10
                },
                "0xf700-0x220000" : {
                    "Text" : "[1;2A",
                    "Action" : 10
                },
                "0xf701-0x280000" : {
                    "Text" : "0x1b 0x1b 0x5b 0x42",
                    "Action" : 11
                },
                "0x38-0x40000" : {
                    "Text" : "0x7f",
                    "Action" : 11
                },
                "0x33-0x40000" : {
                    "Text" : "0x1b",
                    "Action" : 11
                },
                "0xf703-0x220000" : {
                    "Text" : "[1;2C",
                    "Action" : 10
                },
                "0xf701-0x240000" : {
                    "Text" : "[1;5B",
                    "Action" : 10
                },
                "0xf70d-0x20000" : {
                    "Text" : "[21;2~",
                    "Action" : 10
                },
                "0xf702-0x260000" : {
                    "Text" : "[1;6D",
                    "Action" : 10
                },
                "0xf729-0x40000" : {
                    "Text" : "[1;5H",
                    "Action" : 10
                },
                "0xf706-0x20000" : {
                    "Text" : "[1;2R",
                    "Action" : 10
                },
                "0x34-0x40000" : {
                    "Text" : "0x1c",
                    "Action" : 11
                },
                "0xf700-0x280000" : {
                    "Text" : "0x1b 0x1b 0x5b 0x41",
                    "Action" : 11
                },
                "0x2d-0x40000" : {
                    "Text" : "0x1f",
                    "Action" : 11
                },
                "0xf70e-0x20000" : {
                    "Text" : "[23;2~",
                    "Action" : 10
                },
                "0xf702-0x220000" : {
                    "Text" : "[1;2D",
                    "Action" : 10
                },
                "0xf703-0x280000" : {
                    "Text" : "0x1b 0x1b 0x5b 0x43",
                    "Action" : 11
                },
                "0xf700-0x240000" : {
                    "Text" : "[1;5A",
                    "Action" : 10
                },
                "0xf707-0x20000" : {
                    "Text" : "[1;2S",
                    "Action" : 10
                },
                "0xf70a-0x20000" : {
                    "Text" : "[18;2~",
                    "Action" : 10
                },
                "0x35-0x40000" : {
                    "Text" : "0x1d",
                    "Action" : 11
                },
                "0xf70f-0x20000" : {
                    "Text" : "[24;2~",
                    "Action" : 10
                },
                "0xf703-0x240000" : {
                    "Text" : "[1;5C",
                    "Action" : 10
                },
                "0xf701-0x260000" : {
                    "Text" : "[1;6B",
                    "Action" : 10
                },
                "0xf702-0x280000" : {
                    "Text" : "0x1b 0x1b 0x5b 0x44",
                    "Action" : 11
                },
                "0xf72b-0x20000" : {
                    "Text" : "[1;2F",
                    "Action" : 10
                },
                "0x36-0x40000" : {
                    "Text" : "0x1e",
                    "Action" : 11
                },
                "0xf708-0x20000" : {
                    "Text" : "[15;2~",
                    "Action" : 10
                },
                "0xf701-0x220000" : {
                    "Text" : "[1;2B",
                    "Action" : 10
                },
                "0xf70b-0x20000" : {
                    "Text" : "[19;2~",
                    "Action" : 10
                },
                "0xf702-0x240000" : {
                    "Text" : "[1;5D",
                    "Action" : 10
                },
                "0xf704-0x20000" : {
                    "Text" : "[1;2P",
                    "Action" : 10
                }
            },
            "Log Directory" : "",
            "Use Canonical Parser" : false,
            "Ansi 14 Color" : {
                "Green Component" : 1,
                "Blue Component" : 1,
                "Red Component" : 0.3333333432674408
            },
            "Ansi 2 Color" : {
                "Green Component" : 0.73333334922790527,
                "Blue Component" : 0,
                "Red Component" : 0
            },
            "Background Image Is Tiled" : false,
            "Send Code When Idle" : false,
            "ASCII Anti Aliased" : true,
            "Tags" : [

            ],
            "Ansi 9 Color" : {
                "Green Component" : 0.3333333432674408,
                "Blue Component" : 0.3333333432674408,
                "Red Component" : 1
            },
            "Use Bold Font" : true,
            "Silence Bell" : false,
            "Ansi 12 Color" : {
                "Green Component" : 0.3333333432674408,
                "Blue Component" : 1,
                "Red Component" : 0.3333333432674408
            },
            "Window Type" : 0,
            "Allow Title Reporting" : false,
            "Use Bright Bold" : true,
            "Has Hotkey" : false,
            "Cursor Text Color" : {
                "Green Component" : 1,
                "Blue Component" : 1,
                "Red Component" : 1
            },
            "Default Bookmark" : "No",
            "Cursor Color" : {
                "Green Component" : 0.73333334922790527,
                "Blue Component" : 0.73333334922790527,
                "Red Component" : 0.73333334922790527
            },
            "Disable Smcup Rmcup" : false,
            "Name" : "Blaise Web Staging",
            "Blinking Cursor" : false,
            "Guid" : "16BD0E54-BA32-4C11-9BA0-9EF3E2BBD69A",
            "Ansi 1 Color" : {
                "Green Component" : 0,
                "Blue Component" : 0,
                "Red Component" : 0.73333334922790527
            },
            "Idle Code" : 0,
            "Ansi 10 Color" : {
                "Green Component" : 1,
                "Blue Component" : 0.3333333432674408,
                "Red Component" : 0.3333333432674408
            },
            "Ansi 8 Color" : {
                "Green Component" : 0.3333333432674408,
                "Blue Component" : 0.3333333432674408,
                "Red Component" : 0.3333333432674408
            },
            "Automatically Log" : false,
            "Smart Cursor Color" : true,
            "Semantic History" : {
                "editor" : "com.sublimetext.3",
                "action" : "best editor",
                "text" : ""
            },
            "Ambiguous Double Width" : false,
            "Blur Radius" : 2,
            "Ansi 0 Color" : {
                "Green Component" : 0,
                "Blue Component" : 0,
                "Red Component" : 0
            },
            "Cursor Type" : 2,
            "Blur" : false,
            "Normal Font" : "Monaco 12",
            "Vertical Spacing" : 1,
            "Disable Printing" : false,
            "Ansi 7 Color" : {
                "Green Component" : 0.73333334922790527,
                "Blue Component" : 0.73333334922790527,
                "Red Component" : 0.73333334922790527
            },
            "Command" : "",
            "Terminal Type" : "xterm-256color",
            "Horizontal Spacing" : 1,
            "Option Key Sends" : 0,
            "Blink Allowed" : false,
            "Minimum Contrast" : 0,
            "Ansi 15 Color" : {
                "Green Component" : 1,
                "Blue Component" : 1,
                "Red Component" : 1
            },
            "Ansi 6 Color" : {
                "Green Component" : 0.73333334922790527,
                "Blue Component" : 0.73333334922790527,
                "Red Component" : 0
            },
            "Transparency" : 0,
            "Initial Text" : "",
            "Background Color" : {
                "Red Component" : 0.25659391283988953,
                "Color Space" : "Calibrated",
                "Blue Component" : 0.0023893180768936872,
                "Alpha Component" : 1,
                "Green Component" : 0
            },
            "Screen" : -1,
            "Bound Hosts" : [

            ],
            "Non Ascii Font" : "Monaco 12",
            "Ansi 13 Color" : {
                "Green Component" : 0.3333333432674408,
                "Blue Component" : 1,
                "Red Component" : 1
            },
            "Columns" : 80,
            "Visual Bell" : true,
            "Custom Directory" : "No",
            "Ansi 5 Color" : {
                "Green Component" : 0,
                "Blue Component" : 0.73333334922790527,
                "Red Component" : 0.73333334922790527
            },
            "Set Local Environment Vars" : true
        };


var profiles = {
    "Profiles": []
}


async function main() {
    let command = '';
    let name = '';
    const myArgs = process.argv.slice(2);

    if (!myArgs[0]) {
        console.log('Specify input servers file in json format as the first command line parameter');
    }

    let servers = JSON.parse(fs.readFileSync(myArgs[0], 'utf8'));

    await Promise.all(servers.map(async (server) => {
        command = server.command;
        name = server.name;
        let new_profile = {};
        Object.assign(new_profile, profile);
        new_profile.Name = server.name;
        new_profile.Command = server.command;
        profiles.Profiles.push(new_profile);
    }));


    if (!myArgs[1]) {
      console.log('Specify output file as command line parameter');
    } else {
        fs.writeFile(myArgs[1], JSON.stringify(profiles), function (err) {
            if (err) {
                console.log(err);
            }
        });
    }

}

(async function() {
    await main();
})();






