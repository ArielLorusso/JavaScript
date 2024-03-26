VIDEO 1:
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=1

# INSTALL
###  MongoDB installation manuals:
https://www.mongodb.com/docs/manual/installation/
+   Windows: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
+   MacOS:   https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
+   Linux:   https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

###  MongoDB Shell (mongosh) installation manuals:

https://www.mongodb.com/docs/mongodb-shell/install/


>   MongoD : Demon Server
    MongoSH : Shell
    MongoDB-Compass : GUI Grafical User Interfave
    VS-Code Extension : MongoDB for VS Code


# CONNECT

1)    Click on MongoDB VS-Extension : Connections + icon
      Advanced Connection Settings -> Open form
```
New connection :  General
        General   SSL/TLS  SSHTunnel Advanced
    Connection Type : Standalone
        Standalone   Replica Set   SRV Record
    Hostname :  localhost
    Port :         27017
    Authentication : None
        None  Username/Password   SCRAM-SHA-256   LDAP    X.509
```
# LAUNCH SHELL

` After ricgt click -> Launch MongoDB Shell we see :`

```sh
    Current Mongosh Log ID: 64cf024000b581382908b1f8
    Connecting to:          mongodb://localhost:27017/?readPreference=primary&appname=mongodb-vscode+1.1.0&ssl=false&directConnection=true&serverSelectionTimeoutMS=2000
    Using MongoDB:          6.0.8
    Using Mongosh:          1.10.3
    test>
```

Where :
*    `test`      is the selected database
*    `>`         is whare we put commands

# DOCUMANTATION / MANUAL

https://www.mongodb.com/docs/manual/introduction