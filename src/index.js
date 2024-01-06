//███████╗██╗██████╗ ███████╗ █████╗ ██████╗ ██╗
//██╔════╝██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██║
//█████╗  ██║██████╔╝█████╗  ███████║██████╔╝██║
//██╔══╝  ██║██╔══██╗██╔══╝  ██╔══██║██╔═══╝ ██║
//██║     ██║██║  ██║███████╗██║  ██║██║     ██║
//╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
//fireAPI für NodeJS
//Stand: 05.01.2024
//Made by FlosTechnikwlt


'use strict';
const axios = require('axios');
const fireapiError = "[FIREAPI]: "

class fireApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        if(!apiKey) { return fireapiError + "No API-Key was given"}
    }


    list() {
        const apiKey = this.apiKey;

        async function listVM() {
            const response = await axios.get("https://live.fireapi.de/vm/list", {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        
        async function listHosts() {
            const response = await axios.get("https://live.fireapi.de/vm/list/hosts", {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        
        async function listOS() {
            const response = await axios.get("https://live.fireapi.de/vm/list/os", {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        
        async function listISO() {
            const response = await axios.get("https://live.fireapi.de/vm/list/iso", {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        return {
            listVM,
            listHosts,
            listOS,
            listISO,
        }
    }

    async DDOS(vmID) {
        
        async function getDDOSsettings() {
            const response = await axios.get(`https://live.fireapi.de/vm/${vmID}/ddos/`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        async function editDDOSsettings(layer4, layer7, ip_address) {
            if (!layer4 || !layer7 || !ip_address) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }

            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/ddos/`, {
                layer4,
                layer7,
                ip_address,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        return {
            getDDOSsettings,
            editDDOSsettings,
        }

    }


    async Backup(vmID) {

        async function getAllBackups() {
            const response = await axios.get(`https://live.fireapi.de/vm/${vmID}/backup/list/`, {
                headers: {
                    AUTHORIZATION: "Bearer " + apiKey, 
                },
            });
            return response.data;
        }


        async function createBackup() {
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/backup/create/`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function createBackupStatus() {

            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/backup/create/status`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function restoreBackup(backup_id) {
            if (!backup_id) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }

            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/backup/restore`, {
                backup_id,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function restoreBackupStatus(backup_id) {
            if (!backup_id) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }

            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/backup/restore/status`, {
                backup_id,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function deleteBackup(backup_id) {
            if (!backup_id) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }

            const response = await axios.delete(`https://live.fireapi.de/vm/${vmID}/backup/restore`, {
                backup_id,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        return {
            getAllBackups,
            createBackup,
            createBackupStatus,
            restoreBackup,
            restoreBackupStatus,
            deleteBackup,
        }
    }

    async ISO(vmID) {
        async function insertISO(iso) {
            if (!iso) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }

            const response = await axios.put(`https://live.fireapi.de/vm/${vmID}/iso`, {
                iso,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function removeISO() {
            const response = await axios.delete(`https://live.fireapi.de/vm/${vmID}/iso`, {
                headers: {
                    AUTHORIZATION: apiKey
                },
            });
            return response.data;
        }


        return {
            insertISO,
            removeISO,
        }
    }


    
    async VM() {
        const apiKey = this.apiKey;

        async function reinstall(vmID, os) {
            if(!os || !vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/reinstall`, {
                os,
            }, {
                headers: { AUTHORIZATION: apiKey },
            });
            return response.data;
        }

        async function createVM(cores, mem, disk, os, hostsystem, ips, backup_slots, network_speed) {
            if(!cores || !mem || !disk || !os || !hostsystem || !ips || !backup_slots || !network_speed ) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.put(`https://live.fireapi.de/vm/create`, {
                cores,
                mem,
                disk,
                os,
                hostsystem,
                ips,
                backup_slots,
                network_speed,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function reconfigureVM(vmID, cores, mem, disk, backup_slots, network_speed) {
            if(!vmID || !cores || !mem || !disk || !backup_slots || !network_speed ) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/change`, {
                cores,
                mem,
                disk,
                backup_slots,
                network_speed,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getVMconfig(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/vm/${vmID}/config`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }
        
        async function changeRDNS(vmID, domain, ip_address) {
            if(!vmID || !domain || !ip_address) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/rdns`, {
                domain,
                ip_address,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        async function noVNC(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/novnc`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        async function deleteVM(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.delete(`https://live.fireapi.de/vm/${vmID}/delete`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        async function VMstatus(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/vm/${vmID}/status`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        async function installStatus(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/vm/${vmID}/status/installation`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function resetPassword(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/password-reset`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function startVM(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/power`, {
                'mode': 'start',
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function stopVM(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/power`, {
                'mode': 'stop',
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function restartVM(vmID) {
            if(!vmID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/vm/${vmID}/power`, {
                'mode': 'restart',
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }




        return {
            reinstall,
            createVM,
            reconfigureVM,
            getVMconfig,
            changeRDNS,
            noVNC,
            deleteVM,
            VMstatus,
            installStatus,
            resetPassword,
            startVM,
            stopVM,
            restartVM,
        }
    }


    async Domain() {
        const apiKey = this.apiKey;

        async function addDNS(domain, type, name, data) {
            if(!domain || !type || !name || !data) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.put(`https://live.fireapi.de/domain/${domain}/dns/add`, {
                type,
                name,
                data,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getDNSentries(domain) {
            if(!domain) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/domain/${domain}/dns/`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function deleteDNSentrie(domain, record_id) {
            if(!domain || !record_id) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.delete(`https://live.fireapi.de/domain/${domain}/dns/remove`, {
                record_id,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function editDNSentrie(domain, record_id, type, name, data) {
            if(!domain || !record_id || !data) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/domain/${domain}/dns/edit`, {
                record_id,
                type,
                name,
                data,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function createHandle(gender, firstname, lastname, street, number, zipcode, city, region, countrycode, email) {
            if(!gender || !firstname || !lastname || !street || !number || !zipcode || !city || !region || !countrycode || !email) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.put(`https://live.fireapi.de/domain/handle/create`, {
                gender,
                firstname,
                lastname,
                street,
                number,
                zipcode,
                city,
                region,
                countrycode,
                email,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getHandle(handle) {
            if(!handle) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/domain/handle/${handle}/info`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        //Mögliche option: street, number, zipcode, city, region, countrycode, email
        //Nicht möglich sind: gender, firstname, lastname
        async function updateHandle(handle, option, data) {
            if(!handle || !option || !data) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/handle/${handle}/update`, {
                option: data,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getCountriecodes() {
            const response = await axios.get(`https://live.fireapi.de/domain/handle/countries`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getAllDomains() {
            const response = await axios.get(`https://live.fireapi.de/domain/list`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function registarDomain(domain, handle) {
            if(!domain || !handle) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/domain/register`, {
                domain,
                handle,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function transferDomain(domain, handle, authcode) {
            if(!domain || !handle || !authcode) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/domain/register`, {
                domain,
                handle,
                authcode,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function deleteDomain(domain) {
            if(!domain) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.delete(`https://live.fireapi.de/domain/${domain}/delete`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function undeleteDomain(domain) {
            if(!domain) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/domain/${domain}/undelete`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getAuthcode(domain) {
            if(!domain) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/domain/${domain}/authcode`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getDomainPricing() {
            const response = await axios.get(`https://live.fireapi.de/domain/pricings`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getDomainInfo(domain) {
            if(!domain) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/domain/${domain}/info`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function checkDomainAvailability(domain) {
            if(!domain) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/domain/${domain}/check`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function changeNameserver(domain, ns1, ns2, ns3, ns4, ns5) {
            if (!domain || !ns1 || !ns2) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const requestBody = {
                ns1,
                ns2
            };
            if (ns3) {
                requestBody.ns3 = ns3;
            }
            if (ns4) {
                requestBody.ns4 = ns4;
            }
            if (ns5) {
                requestBody.ns5 = ns5;
            }
            const response = await axios.post(`https://live.fireapi.de/domain/${domain}/nameserver`, requestBody, {
                headers: {
                    AUTHORIZATION: apiKey,
                },
            });
            return response.data;
        }



        return {
            addDNS,
            getDNSentries,
            deleteDNSentrie,
            editDNSentrie,
            createHandle,
            getHandle,
            updateHandle,
            getCountriecodes,
            getAllDomains,
            registarDomain,
            transferDomain,
            deleteDomain,
            undeleteDomain,
            getAuthcode,
            getDomainPricing,
            getDomainInfo,
            checkDomainAvailability,
            changeNameserver,
        }
    }

    async dedicated() {
        const apiKey = this.apiKey;

        async function getMarket() {
            const response = await axios.get(`https://live.fireapi.de/dedicated/available`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function checkAvailability(identifier) {
            if(!identifier) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/dedicated/available/${identifier}`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        //Wichtig: https://documenter.getpostman.com/view/18955936/2s93sgXWFL#8ca96ab8-1245-48b0-80d1-b002d1463849
        async function buyDedicatedServer(identifier, webhook, connect) {
            if (!identifier) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const requestBody = {};
            if (webhook) {
                requestBody.webhook = webhook;
            }
            if (connect) {
                requestBody.connect = connect;
            }
        
            const response = await axios.put(`https://live.fireapi.de/dedicated/${identifier}/purchase`, requestBody, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function showDedicatedInfo(identifier) {
            if(!identifier) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/dedicated/${identifier}/info`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function showAllDedicated() {
            const response = await axios.get(`https://live.fireapi.de/dedicated/list`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function deleteDedicated(identifier) {
            if(!identifier) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.delete(`https://live.fireapi.de/dedicated/${identifier}/delete`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function undeleteDedicated(identifier) {
            if(!identifier) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.post(`https://live.fireapi.de/dedicated/${identifier}/undelete`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        

        return {
            getMarket,
            checkAvailability,
            buyDedicatedServer,
            showDedicatedInfo,
            showAllDedicated,
            deleteDedicated,
            undeleteDedicated,
        }
    }



    async account() {
        const apiKey = this.apiKey;


        async function getAllRequests(offset) {
            const response = await axios.post(`https://live.fireapi.de/account/requests`, {
                offset,
            }, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        return {
            getAllRequests,
        }
    }



    async accounting() {
        const apiKey = this.apiKey;


        async function showAllInvoices() {
            const response = await axios.get(`https://live.fireapi.de/accounting/invoices`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getInvoiceDetails(invoiceID) {
            if(!invoiceID) { return console.error(fireapiError + "This request could not be sent to the fireAPI because not all details were given."); }
            const response = await axios.get(`https://live.fireapi.de/accounting/invoices/${invoiceID}`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getCurrentInvoiceStatus() {
            const response = await axios.get(`https://live.fireapi.de/accounting/invoices/current`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getPricings() {
            const response = await axios.get(`https://live.fireapi.de/accounting/pricings`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }

        async function getSales() {
            const response = await axios.get(`https://live.fireapi.de/accounting/sales`, {
                headers: {
                    //'Authorization': `Bearer ${apiKey}`,
                    'X-FIRE-APIKEY': apiKey,
                },
            });
            return response.data;
        }


        return {
            showAllInvoices,
            getInvoiceDetails,
            getCurrentInvoiceStatus,
            getPricings,
            getSales,
        }
    }
}

module.exports = fireApi;