// nothing persistent: the popup drives the flow
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['apiBase'], (d) => {
    if (!d.apiBase) {
      chrome.storage.sync.set({ apiBase: 'https://api.openai.com/v1' });
    }
  });
});
