async function getPageText() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const [{ result }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.body.innerText.slice(0, 8000),
  });
  return result;
}

document.getElementById('go').addEventListener('click', async () => {
  const out = document.getElementById('out');
  out.textContent = 'reading page...';
  const { apiBase, apiKey } =
    await chrome.storage.sync.get(['apiBase', 'apiKey']);
  if (!apiKey) {
    out.textContent = 'set your API key in the options page first';
    return;
  }
  const text = await getPageText();
  out.textContent = 'summarizing...';
  const r = await fetch(apiBase + '/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + apiKey,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{
        role: 'user',
        content: 'Summarize in 5 bullets:\n\n' + text,
      }],
    }),
  });
  const data = await r.json();
  out.textContent = (data.choices && data.choices[0].message.content)
    || ('error: ' + JSON.stringify(data));
});
