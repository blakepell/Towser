# A telnet client for the browser using signalR #

Signet is an application to allow access to telnet services from the browser. An telnet client runs on an IIS web server, and a terminal emulator runs in the browser. These two components communicate using signalR.

### Set up ###

Configure the telnet client by editing web.config:

* `server`: Telnet server
* `port`: Telnet port, usually 23
* `encoding`: Character encoding used by the telnet server - a list of encoding names is available at http://msdn.microsoft.com/en-us/library/system.text.encoding(v=vs.110).aspx
* `termtype`: Terminal emulation type (always VT100)

### Terminal emulator ###

The VT100 terminal emulation is by Frank Bi, and was taken from https://code.google.com/p/sshconsole/
