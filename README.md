[![POWERED BY FIREAPI](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDguNTkzODExMDM1MTU2MjUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMDguNTkzODExMDM1MTU2MjUgMzUiPjxyZWN0IHdpZHRoPSIxMjEuMjgxMjg4MTQ2OTcyNjYiIGhlaWdodD0iMzUiIGZpbGw9IiNmZjllMGMiLz48cmVjdCB4PSIxMjEuMjgxMjg4MTQ2OTcyNjYiIHdpZHRoPSI4Ny4zMTI1MjI4ODgxODM2IiBoZWlnaHQ9IjM1IiBmaWxsPSIjZmY1MjAwIi8+PHRleHQgeD0iNjAuNjQwNjQ0MDczNDg2MzMiIHk9IjE3LjUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSInUm9ib3RvJywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIyIj5QT1dFUkVEIEJZPC90ZXh0Pjx0ZXh0IHg9IjE2NC45Mzc1NDk1OTEwNjQ0NSIgeT0iMTcuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjkwMCIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIyIj5GSVJFQVBJPC90ZXh0Pjwvc3ZnPg==)](https://forthebadge.com)

# fireapi-24fire


Die FireAPI-24Fire erleichtert die Interaktion mit der FireAPI in Node.js, was die Entwicklung effizienter gestaltet.


## Features

- 🔗 Kommunikation über SSL
- 🏃 Schnelle interaktion
- ➡️ Direkte Anfragen ohne Middelware
- ℹ️ Verwalte VM, Domains, Dedicated Server, Account und Accounting


## Optimierungen & Feedback

Welche Optimierungen hast du in deinem Code vorgenommen? Z.B. Refactoring, Performance-Verbesserungen

Wenn du Feedback hast, wenden dich an mich unter support@flostechnikwelt.de



## Wie wird es installiert?

Um die FireAPI-24Fire in deinem Projekt zu installieren, führe bitte den folgenden Befehl aus

```bash
  npm install fire-24fire
```


## Empfehlenswert

 - [Offizielle API Dokumentation](https://documenter.getpostman.com/view/18955936/2s93sgXWFL)
 - [Reseller werden](https://24fire.de/reselling/)
 - [Discord](https://discord.gg/24fire)

## Wie verwende ich fireapi-24fire?


### Einen fireApi Client erstellen

```javascript
  const fireApi = require("fireapi-24fire")
  const apiKey = 'DEIN_API_SCHLÜSSEL';
  const myFireApi = new fireApi(apiKey);
```



### VM -> List

#### -> Zeige alle VMs an

```javascript
  myFireApi.list().listVM().then(data => {
    console.log('Liste der VMs:', data);
  }).catch(error => {
    console.error('Fehler beim Abfragen der VMs:', error);
  });
```

#### -> Zeige alle Hostsysteme an

```javascript
  myFireApi.list().listHosts().then(data => {
    console.log('Liste der Hosts:', data);
  }).catch(error => {
    console.error('Fehler beim Abfragen der Hosts:', error);
  });

```

#### -> Zeige alle Betriebsysteme an (OS) an

```javascript
  myFireApi.list().listOS().then(data => {
    console.log('Liste der Betriebssysteme:', data);
  }).catch(error => {
    console.error('Fehler beim Abfragen der Betriebssysteme:', error);
  });
```

#### -> Zeige alle ISOs an

```javascript
  myFireApi.list().listISO().then(data => {
    console.log('Liste der ISOs:', data);
  }).catch(error => {
    console.error('Fehler beim Abfragen der ISOs:', error);
  });

```

### VM -> DDoS

#### -> Zeige alle DDoS Einstellungen an

```javascript
  myFireApi.DDOS(vmID).getDDOSsettings().then(data => {
    console.log('DDoS Einstellungen:', data);
  }).catch(error => {
    console.error('Fehler beim Abfragen der DDoS Einstellungen:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |


#### -> Bearbeite die DDoS Einstellungen

```javascript
  myFireApi.DDOS(vmID).editDDOSsettings('layer4', 'layer7', 'ip_adress').then(data => {
    console.log('Antwort von der fireApi:', data);
  }).catch(error => {
    console.error('Fehler beim bearbeiten der DDoS Werten: ', error);
  });
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `layer4`      | `string` | **Benötigt**.  Mögliche Werte: dynamic, permanent |
| `layer7`      | `string` | **Benötigt**. Mögliche Werte: on, off |
| `ip_adress`      | `string` | **Benötigt**. Die IP auf welche die änderungen angewendet werden |






### VM -> Backup
#### -> Zeige alle Backup an

```javascript
  myFireApi.Backup(vmID).getAllBackups().then(backups => {
    console.log('All Backups:', backups);
  }).catch(error => {
    console.error('Error:', error);
  });

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> Ein Backup von einer VM erstellen

```javascript
  myFireApi.Backup(vmID).createBackup().then(response => {
    console.log('Backup Created:', response);
  }).catch(error => {
    console.error('Error:', error);
  });

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> Status beim erstellen einens Backups
##### Wie weit ist der erstellungsprozess

```javascript
  myFireApi.Backup(vmID).createBackupStatus().then(response => {
    console.log('Backup Creation Status:', response);
  }).catch(error => {
    console.error('Error:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> Ein Backup auf den Server widerherstellen

```javascript
  myFireApi.Backup(vmID).restoreBackup(backupId).then(response => {
    console.log('Backup Restored:', response);
  }).catch(error => {
    console.error('Error:', error);
  });


```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `backupId`      | `string` | **Benötigt**.  Die ID des Backups welches Wiederhergestellt werden soll |



#### -> Den Wiederherstellungsprozess Status aprufen
##### Wie weit ist die Wiederherstellung

```javascript
  myFireApi.Backup(vmID).restoreBackupStatus(backupId).then(response => {
    console.log('Restore Status:', response);
  }).catch(error => {
    console.error('Error:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `backupId`      | `string` | **Benötigt**.  Die ID des Backups welches Wiederhergestellt wird |




#### -> Ein erstelltes Backup löschen

```javascript
  myFireApi.Backup(vmID).deleteBackup(backupId).then(response => {
    console.log('Backup Deleted:', response);
  }).catch(error => {
    console.error('Error:', error);
  });

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `backupId`      | `string` | **Benötigt**.  Die ID des Backups welches Wiederhergestellt wird |



### VM -> ISO


#### -> Eine ISO in die VM einlegen

```javascript
  myFireApi.ISO(vmID).insertISO(ISOid).then(response => {
    console.log('ISO wurde eingelegt:', response)
  }).catch(error => { 
    console.error('Error beim versuch ISO einzulegen:', error)
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `ISOid`      | `string` | **Benötigt**.  Die ID der einzulegenen ISO-Datei (Kann durch den Befehl in "VM -> List -> Zeige alle VMs an" angezeigt werden.)  |



#### -> Eine ISO in die VM aus der VM entfernen

```javascript
  myFireApi.ISO(vmID).removeISO().then(removeResponse => {
   console.log('ISO Removed:', removeResponse)
  }).catch(removeError => { 
   console.error('Error removing ISO:', removeError)
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



### VM



#### -> Eine VM neuistallieren

```javascript
  myFireApi.VM().reinstall(vmID, OS).then(response => {
    console.log('Reinstall response:', response);
  }).catch(error => {
    console.error('Error reinstalling VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `OS`      | `string` | **Benötigt**.  Kann durch den Befehl in "VM -> List -> Zeige alle Betriebsysteme an (OS) an" abgerufen werden. |



#### -> Eine neue VM erstellen

```javascript
  myFireApi.VM().createVM(cores, mem, disk, os, hostsystem, ips, backup_slots, network_speed).then(response => {
    console.log('Create VM response:', response);
  }).catch(error => {
    console.error('Error creating VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cores`      | `string` | **Benötigt**.  Die Anzahl der V-Cores|
| `mem`      | `string` | **Benötigt**.  Die Größe des ARbeitsspeicher (in MB) |
| `disk`      | `string` | **Benötigt**.  Die Größe der Festplatte (in GB) |
| `os`      | `string` | **Benötigt**.  Kann durch den Befehl in "VM -> List -> Zeige alle Betriebsysteme an (OS) an" abgerufen werden. |
| `hostsystem`      | `string` | **Benötigt**.  Kann durch den Befehl in "VM -> List -> Zeige alle Hostsysteme" abgerufen werden. |
| `ips`      | `string` | **Benötigt**.  Anzahl der Benötigten IP-Adressen (Minimum: 1) |
| `backup_slots`      | `string` | **Benötigt**.  Anzahl der erstellbaren Backups (Minimum: 2) |
| `network_speed`      | `string` | **Benötigt**.  Die Geschwindigkeit des Netzwerkes (Minimum: 1000mb/s) |



#### -> VM Konfiguartion anpassen

```javascript
  myFireApi.VM().reconfigureVM(vmID, cores, mem, disk, backup_slots, network_speed).then(response => {
    console.log('Antwort beim Rekonfigurieren der VM:', response);
  }).catch(error => {
    console.error('Fehler beim Rekonfigurieren der VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `cores`      | `string` | **Benötigt**.  Die Anzahl der V-Cores|
| `mem`      | `string` | **Benötigt**.  Die Größe des ARbeitsspeicher (in MB) |
| `disk`      | `string` | **Benötigt**.  Die Größe der Festplatte (in GB, kann nicht verkleinert werden) |
| `backup_slots`      | `string` | **Benötigt**.  Anzahl der erstellbaren Backups (Minimum: 2) |
| `network_speed`      | `string` | **Benötigt**.  Die Geschwindigkeit des Netzwerkes (Minimum: 1000mb/s) |


#### -> VM Konfiguartion anzeigen

```javascript
  myFireApi.VM().getVMconfig(vmID).then(config => {
    console.log('VM-Konfiguration:', config);
  }).catch(error => {
    console.error('Fehler beim Abrufen der VM-Konfiguration:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> Den RDNS-Eintrag verändern

```javascript
  myFireApi.VM().changeRDNS(vmID, domain, ip_adress).then(response => {
    console.log('Antwort beim Ändern des RDNS für die VM:', response);
  }).catch(error => {
    console.error('Fehler beim Ändern des RDNS für die VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |
| `domain`      | `string` | **Benötigt**.  Die Domain welche den RDNS eintag stehen soll |
| `ip_adress`      | `string` | **Benötigt**.  Die IP Adresse für welche die änderung gelten soll |



#### -> Einen noVNC-Konsolen Link erstellen

```javascript
  myFireApi.VM().noVNC(vmID).then(response => {
        console.log('noVNC Link:', response);
  }).catch(error => {
        console.error('Error calling noVNC:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> VM Löschen / Kündigen

```javascript
  myFireApi.VM().deleteVM(vmID).then(response => {
    console.log('Antwort beim Löschen der VM:', response);
  }).catch(error => {
    console.error('Fehler beim Löschen der VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |




#### -> VM Status Abrufen

```javascript
  myFireApi.VM().VMstatus(vmID).then(status => {
    console.log('VM-Status:', status);
  }).catch(error => {
    console.error('Fehler beim Abrufen des VM-Status:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> Den aktuellen Installationsstatus abrufen

```javascript
  myFireApi.VM().installStatus(vmID).then(installStatus => {
    console.log('Installationsstatus:', installStatus);
  }).catch(error => {
    console.error('Fehler beim Abrufen des Installationsstatus:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |



#### -> Das Passwort der VM zurücksetzten
##### Dies ist nur möglich wenn das Betreibsystem OS ist und nicht mit einer ISO erstellt wurde. 

```javascript
  myFireApi.VM().resetPassword(vmID).then(response => {
    console.log('Antwort beim Zurücksetzen des Passworts für die VM:', response);
  }).catch(error => {
    console.error('Fehler beim Zurücksetzen des Passworts für die VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |


#### -> VM Starten

```javascript
  myFireApi.VM().startVM(vmID).then(response => {
    console.log('Antwort beim Starten der VM:', response);
  }).catch(error => {
    console.error('Fehler beim Starten der VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |


#### -> VM Stoppen

```javascript
  myFireApi.VM().stopVM(vmID).then(response => {
    console.log('Antwort beim Stoppen der VM:', response);
  }).catch(error => {
    console.error('Fehler beim Stoppen der VM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |


#### -> VM Neustarten

```javascript
  myFireApi.VM().restartVM(vmID).then(response => {
        console.log('restartVM response:', response);
  }).catch(error => {
        console.error('Error calling restartVM:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vmID`      | `string` | **Benötigt**.  Die ID der Virtuellen-Maschiene |




### Domain -> DNS


#### -> Einen DNS-Eintrag erstellen

```javascript
  myFireApi.Domain().addDNS(domain, type, name, data).then(response => {
        console.log('DNS-Eintrag hinzugefügt:', response);
  }).catch(error => {
        console.error('Fehler beim Hinzufügen des DNS-Eintrags:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche diese änderung betrifft |
| `type`      | `string` | **Benötigt**.  Der DNS-TYPE welcher erstellt werden soll |
| `name`      | `string` | **Benötigt**.  Der Name von dem DNS-Eintrag |
| `data`      | `string` | **Benötigt**.  Der Inhalt des neuen DNS-Eintrag |

##### Mögliche DNS-Eintrag Typen sind: A, AAAA, CNAME, ALIAS, MX, SRV, TXT, CAA, PTR, NS, TLSA, DS, DNSKEY, HTTP_REDIRECT, HTTP_FRAME


#### -> Abrufen von DNS-Einträgen

```javascript
  myFireApi.Domain().getDNSentries(domain).then(entries => {
        console.log('DNS-Einträge:', entries);
  }).catch(error => {
        console.error('Fehler beim Abrufen der DNS-Einträge:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche diese änderung betrifft |


#### -> Einen DNS-Eintrag löschen

```javascript
  myFireApi.Domain().deleteDNSentrie(domain, recordId).then(response => {
        console.log('DNS-Eintrag gelöscht:', response);
  }).catch(error => {
        console.error('Fehler beim Löschen des DNS-Eintrags:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche diese änderung betrifft |
| `recordId`      | `string` | **Benötigt**.  Die ID von dem Eintrag welchen du entfernen möchtest (Abrufbar mit Domain -> DNS -> Abrufen von DNS-Einträgen) |


#### -> Einen DNS-Eintrag bearbeiten

```javascript
myFireApi.Domain().editDNSentrie(domain, recordId, type, name, data)
    .then(response => {
        console.log('DNS-Eintrag bearbeitet:', response);
    })
    .catch(error => {
        console.error('Fehler beim Bearbeiten des DNS-Eintrags:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche diese änderung betrifft |
| `recordId`      | `string` | **Benötigt**.  Die ID von dem Eintrag welchen du entfernen möchtest (Abrufbar mit Domain -> DNS -> Abrufen von DNS-Einträgen) |
| `type`      | `string` | **Benötigt**.  Der DNS-TYPE welcher erstellt werden soll |
| `name`      | `string` | **Benötigt**.  Der Name von dem DNS-Eintrag |
| `data`      | `string` | **Benötigt**.  Der Inhalt des neuen DNS-Eintrag |

##### Anmerkung: Änderung wird bald kommen




### Domain -> Handle


#### -> Einen Handle erstellen

```javascript
myFireApi.Domain().createHandle(gender, firstname, lastname, street, number, zipcode, city, region, countrycode, email)
    .then(response => {
        console.log('Handle erstellt:', response);
    })
    .catch(error => {
        console.error('Fehler beim Erstellen des Handles:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gender`      | `string` | **Benötigt**. Geschlecht (NUR: MALE oder FEMALE) |
| `firstname`      | `string` | **Benötigt**.  Vorname |
| `lastname`      | `string` | **Benötigt**.  Nachname |
| `street`      | `string` | **Benötigt**.  Straße |
| `number`      | `string` | **Benötigt**.  Nummer |
| `zipcode`      | `string` | **Benötigt**.  Postleitzahl |
| `city`      | `string` | **Benötigt**.  Stadt |
| `region`      | `string` | **Benötigt**.  Bundesland |
| `countrycode`      | `string` | **Benötigt**.  Kann mit "Domain -> Handle -> Countriecode abrufen" abgerufen werden |
| `email`      | `string` | **Benötigt**.  E-Mail Adresse  |



#### -> Handle Abrufen

```javascript
myFireApi.Domain().getHandle(handle).then(handleInfo => {
    console.log('Handle-Informationen abgerufen:', handleInfo);
  }).catch(error => {
    console.error('Fehler beim Abrufen der Handle-Informationen:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `handle`      | `string` | **Benötigt**.  Die Handle ID von dem gesuchten Account/Handle |


#### -> Handle bearbeiten

```javascript
  myFireApi.Domain().updateHandle(handle, option, data).then(response => {
    console.log('Handle aktualisiert:', response);
  }).catch(error => {
    console.error('Fehler beim Aktualisieren des Handles:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `handle`      | `string` | **Benötigt**.  Die Handle ID von dem gesuchten Account/Handle |
| `option`      | `string` | **Benötigt**.  Die Option welche Verändert werden soll |
| `data`      | `string` | **Benötigt**.  Der neune Inhalt der Option |

##### Es kann nur einer per Anfrage verändert werden! (Wird bald geändert)
##### Mögliche option: street, number, zipcode, city, region, countrycode, email
##### Nicht möglich sind: gender, firstname, lastname



#### -> Countriecodes Abrufen

```javascript
  myFireApi.Domain().getCountriecodes().then(countryCodes => {
    console.log('Ländercodes abgerufen:', countryCodes);
  }).catch(error => {
    console.error('Fehler beim Abrufen der Ländercodes:', error);
  });
```


### Domain


#### -> Alle Domains abrufen

```javascript
  myFireApi.Domain().getAllDomains().then(domains => {
      console.log('Alle Domains abgerufen:', domains);
  }).catch(error => {
      console.error('Fehler beim Abrufen aller Domains:', error);
  });
```



#### -> Eine Domain regestrieren

```javascript
  myFireApi.Domain().registarDomain(domain, handle).then(response => {
        console.log('Domain registriert:', response);
  }).catch(error => {
        console.error('Fehler beim Registrieren der Domain:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche regestriert werden soll |
| `handle`      | `string` | **Benötigt**.  Die Handle ID von dem gesuchten Account/Handle |



#### -> Eine Domain übertragen via Authcode

```javascript
  myFireApi.Domain().transferDomain(domain, handle, authcode).then(response => {
    console.log('Domain übertragen:', response);
  }).catch(error => {
    console.error('Fehler beim Übertragen der Domain:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche üertragen werden soll |
| `handle`      | `string` | **Benötigt**.  Die Handle ID von dem gesuchten Account/Handle |
| `authcode`      | `string` | **Benötigt**.  Gebe den Authcode an um die Übertragung zu genemigen |



#### -> Eine Domain Löschen / Kündigen

```javascript
  myFireApi.Domain().deleteDomain(domain).then(response => {
    console.log('Domain gelöscht:', response);
  }).catch(error => {
    console.error('Fehler beim Löschen der Domain:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche gelöscht werden soll |



#### -> Eine Domain Löschung zurückziehen

```javascript
  myFireApi.Domain().undeleteDomain(domain).then(response => {
    console.log('Domain wiederhergestellt:', response);
  }).catch(error => {
    console.error('Fehler beim Wiederherstellen der Domain:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain welche wiederhergestellt werden soll |



#### -> Einen Authcode für eine Domain anfordern

```javascript
  myFireApi.Domain().getAuthcode(domain).then(authcode => {
    console.log('Authcode abgerufen:', authcode);
  }).catch(error => {
    console.error('Fehler beim Abrufen des Authcodes:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain für welche der Authcode angefordert werden soll |



#### -> Die Preise für Domains anfordern

```javascript
  myFireApi.Domain().getDomainPricing().then(pricing => {
    console.log('Domain-Preisgestaltung abgerufen:', pricing);
  }).catch(error => {
    console.error('Fehler beim Abrufen der Domain-Preisgestaltung:', error);
  });
```



#### -> Genauere Informationen zu einer Domain Abrufen

```javascript
  myFireApi.Domain().getDomainInfo(domain).then(domainInfo => {
    console.log('Domain-Informationen abgerufen:', domainInfo);
  }).catch(error => {
    console.error('Fehler beim Abrufen der Domain-Informationen:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain über welche genauere Informationen abgerufen werden soll |



#### -> Domain Verfügbarkeitscheck ausführen

```javascript
  myFireApi.Domain().checkDomainAvailability(domain).then(availability => {
    console.log('Verfügbarkeit der Domain überprüft:', availability);
  }).catch(error => {
    console.error('Fehler beim Überprüfen der Verfügbarkeit der Domain:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain überprüft werden soll (Ob diese noch Verfügbar ist). |




#### -> Nameserver für eine Domain ändern

```javascript
  myFireApi.Domain().changeNameserver(domain, ns1, ns2, ns3, ns4, ns5).then(response => {
        console.log('Nameserver geändert:', response);
  }).catch(error => {
    console.error('Fehler beim Ändern der Nameserver:', error);
  });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `domain`      | `string` | **Benötigt**.  Die Domain über welche genauere Informationen abgerufen werden soll |
| `ns1`      | `string` | **Benötigt**.  Erster Nameserver, dieser muss mit dem zweiten verändert werden. |
| `ns2`      | `string` | **Benötigt**.  Erster Nameserver, dieser muss mit dem zweiten verändert werden. |
| `ns3`      | `string` | **Optional**.  Die Nameserver 3, 4 und 5 müssen nicht immer angegeben werden. |
| `ns4`      | `string` | **Optional**.  Die Nameserver 3, 4 und 5 müssen nicht immer angegeben werden. |
| `ns5`      | `string` | **Optional**.  Die Nameserver 3, 4 und 5 müssen nicht immer angegeben werden. |





###  Dedicated


####  -> Den Marktplatz abrufen

```javascript
    myFireApi.dedicated().getMarket().then(marketData => {
        console.log('Market Data:', marketData);
    }).catch(error => {
        console.error('Error fetching market data:', error);
    });
```



#### -> Verfügabrkeit überprüfen

```javascript
    myFireApi.dedicated().checkAvailability(identifier).then(availabilityData => {
        console.log('Availability Data:', availabilityData);
    }).catch(error => {
        console.error('Error checking availability:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Benötigt**.  Die ID vom Server welcher auf Verfügbarkeitsstand geprüft werden soll ("Kann durch Dedicated -> Den Marktplatz abrufen" abgerufen werden). |




#### -> Einen Dedicated Server Kaufen

```javascript
    myFireApi.dedicated().buyDedicatedServer(identifier, webhook, connect).then(response => {
        console.log('Buy Dedicated Server Response:', response);
    }).catch(error => {
        console.error('Error buying dedicated server:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Benötigt**.  Die ID vom Server welcher gekauft werden soll.  |
| `webhook`      | `string` | **Optional**.  Wenn Server erstellt ist wird an diesen Webhook eine Nachricht gesendet |
| `connect`      | `string` | **Optional**.  Ein bereits erstelleten Account verknüpfen -> [Dedi Kaufen](https://documenter.getpostman.com/view/18955936/2s93sgXWFL#8ca96ab8-1245-48b0-80d1-b002d1463849) |

##### Mehr Informationen finden sie auf der API Dokumentationsseite von 24fire: [Dedi Kaufen](https://documenter.getpostman.com/view/18955936/2s93sgXWFL#8ca96ab8-1245-48b0-80d1-b002d1463849)



#### -> Genauere Informationen zu einem Dedi anzeigen

```javascript
    myFireApi.dedicated().showDedicatedInfo(identifier).then(dedicatedInfo => {
        console.log('Dedicated Info:', dedicatedInfo);
    }).catch(error => {
        console.error('Error fetching dedicated info:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Benötigt**.  Die ID vom Dedi welcher überprüft werden soll |



#### -> Dedicated-Server im Besitz anzeigen lassen

```javascript
    myFireApi.dedicated().showAllDedicated().then(allDedicatedInfo => {
        console.log('All Dedicated Info:', allDedicatedInfo);
    }).catch(error => {
        console.error('Error fetching all dedicated info:', error);
    });
```



#### -> Einen Dedicated-Server löschen / Kündigen

```javascript
    myFireApi.dedicated().deleteDedicated(identifier).then(deleteResponse => {
        console.log('Delete Dedicated Response:', deleteResponse);
    }).catch(error => {
        console.error('Error deleting dedicated server:', error);
    });

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Benötigt**.  Die ID vom Dedi welcher gelöscht bzw. gekündigt werden soll |



#### -> Eine Dedicated-Server löschung / Kündigung zurückziehen

```javascript
    myFireApi.dedicated().undeleteDedicated(identifier).then(undeleteResponse => {
    console.log('Undelete Dedicated Response:', undeleteResponse);
    }).catch(error => {
        console.error('Error undeleting dedicated server:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Benötigt**.  Die ID vom Dedi bei welchem die die löschung nzw. kündigung zurückgezogen werden soll|





### Account



#### -> Alle Anfragen anzeigen

```javascript
    myFireApi.account().getAllRequests(offset).then(requests => {
        console.log('All requests:', requests);
    }).catch(error => {
        console.error('Error fetching requests:', error);
    });
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `offset`      | `string` | **Benötigt**.  In APIs steht "Offset" für den Startpunkt in einem Datensatz, ab dem Informationen abgerufen werden. Es ermöglicht die schrittweise Abfrage von Daten in Teilmengen. |



### Accounting


#### -> Alle Rechnungen anzeigen lassen

```javascript
    myFireApi.accounting().showAllInvoices().then(invoices => {
        console.log('Alle Rechnungen:', invoices);
    }).catch(error => {
        console.error('Fehler beim Abrufen aller Rechnungen:', error);
    });
```



#### -> Genaue Informationen zu einer Rechnung anrufen

```javascript
    myFireApi.accounting().getInvoiceDetails(InvoiceID).then(invoiceDetails => {
        console.log('Details für Rechnung mit ID ' + InvoiceID + ':', invoiceDetails);
    }).catch(error => {
        console.error('Fehler beim Abrufen von Rechnungsdetails:', error);
    });

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `InvoiceID`      | `string` | **Benötigt**.  Die ID von der Rechnung über die genauere Informationen angezeigt werden sollen (Kann durch "Accounting -> Alle Rechnungen anzeigen lassen" angezeigt werden lassen) |




#### -> Aktuellen Rechnungsstand anzeigen

```javascript
    myFireApi.accounting().getCurrentInvoiceStatus().then(currentStatus => {
        console.log('Aktueller Rechnungsstatus:', currentStatus);
    }).catch(error => {
        console.error('Fehler beim Abrufen des aktuellen Rechnungsstatus:', error);
    });
```




#### -> Aktuelle Preise anzeigen

```javascript
    myFireApi.accounting().getPricings().then(pricings => {
        console.log('Pricings:', pricings);
    }).catch(error => {
        console.error('Fehler beim Abrufen der Pricings:', error);
    });
```




#### -> Aktuelle Rabbataktionen anzeigen lassen

```javascript
    myFireApi.accounting().getSales().then(sales => {
        console.log('Verkäufe:', sales);
    }).catch(error => {
        console.error('Fehler beim Abrufen von Verkäufen:', error);
    });
```













## Authors

- [@flostechnikwelt](https://github.flostechnikwelt.de)

