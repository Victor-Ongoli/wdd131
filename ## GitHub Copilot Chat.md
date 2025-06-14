## GitHub Copilot Chat

- Extension Version: 0.27.2 (prod)
- VS Code: vscode/1.100.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: timed out after 10 seconds
- DNS ipv6 Lookup: Error (2065 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (4 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: timed out after 10 seconds
- Node.js fetch: Error (126 ms): TypeError: fetch failed
    at node:internal/deps/undici/undici:13502:13
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at qP._fetch (c:\Users\Victor\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:792:53087)
    at c:\Users\Victor\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:823:134
    at Wb.h (file:///c:/Users/Victor/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:119:41516)
  Error: getaddrinfo EAI_AGAIN api.github.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26)
- Helix fetch: Error (119 ms): FetchError: getaddrinfo EAI_AGAIN api.github.com
    at Egt (c:\Users\Victor\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:304:29579)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at kxr (c:\Users\Victor\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:304:31605)
    at eS.fetch (c:\Users\Victor\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:793:2495)
    at c:\Users\Victor\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:823:134
    at Wb.h (file:///c:/Users/Victor/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:119:41516)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: timed out after 10 seconds
- DNS ipv6 Lookup: 