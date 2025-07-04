require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '22395064497',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'off',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'off',
    AUTO_LIKE: process.env.AUTO_LIKE === 'off',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUwzaUtNdVpTd3JPWjd3V1N6ZzlJR1k2K3QxUk44ZXJjYXJ6Q3lYVEVIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXBvTTM4cjlVbjZmeDFGZFdPeXUxdmFVWWpvcnRuWmduc2pJcTVkSkxIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUHFSWmpJQllxTEJTK1ZyejhsL3FKNXJZNFQ0RWFmSkNpaENkQ0xBaDBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Q3ZFZHBrZE43dENVNHFCWVVIaGpPMFZnOUhNNkxsUHZ0a3FnMXhGQlNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBK3ZtL3l6d0Ywcm0wL0xGcWZCOElXR3dGdDVZVDhFSGZOR1ZsdXVOVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNzblpGTnZ1QU9HY29ua3krZTRkMStVMCsvYmJyei9La2RXL3I5VmJaSFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlqb1JvSTBITklPV0dReHN5L3dDWkp2Y0ZFMDE2MTJHYVZETmlpbytuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm5OcWdnazdyUWlHR1B5dTAyV0dNVmg0Ulhvd0YweklMVXhURUVuby9nQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4zdmJxVlpkL3pXTldpb2NHbk1ONVVPTUNIRktmVUM2QnNiOXVkL1BxUkxsMVQ4RVUwWDIvZG1wcXBOeFk4cHRwSUR2ZS9XQnhtTnNuYnZjM2lRVkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJqbVFzakMzTGZ1eTRwRUl0eU0rK3FsWHZHUFhBM3FUY2lSOVZvOVBZQklZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMzk1MDY0NDk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMEQwQTIwNzBFQTZCRTkxQkMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk5MjQ4NTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyMzk1MDY0NDk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBOTIyMkUzMzUxODY1OUZGQkZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk5MjQ4NjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhMM0YxWjdRIiwibWUiOnsiaWQiOiIyMjM5NTA2NDQ5Nzo4MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3MjU0NTkwNzQ5NDkyNzo4MkBsaWQiLCJuYW1lIjoi8J2ch/Cdm7zwnZyG8J2chPCdnIDwnZyIX/Cdm7/wnZyA8J2ciOODgyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnEzZ0pBTEVNTDN0c0lHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL0JCWDlRTzJITElyV01sS0dvcjhNT1Irb281Tlp5QmlvY1kxaEt3R0pUZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic2V5T2h2c3REcldOWU13ak1XZXZlTnZDUmsrQ0RVd2s5R2RmeEpPcGxKK0xyZWF1S0p1bTkxSUkrNUtUdFVhSzFTZ3hCSlJ6WEl1a01xdEo2aEp6Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkN6TFk0THFnSU9rZkhjUnR5Q3IxeHZZZnc5eXVqbHBIekNyTjRVVkFrVG9qaUY1dGhIME5NcHFwUG54em5xcFBPV0FZMUwzTlVZMzlLa1piNXRLQ0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIzOTUwNjQ0OTc6ODJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZndRVi9VRHRoeXlLMWpKU2hxSy9ERGtmcUtPVFdjZ1lxSEdOWVNzQmlVNCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk5MjQ4MTUsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGRtIn0=',
    timezone: 'Africa/Mali',
    USER_LID: process.env.YOUR_LID || 27254590749492782,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'paused'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'paused'),

    mapPresence
};
