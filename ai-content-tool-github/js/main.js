
async function generate() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.innerHTML = "Generating...";

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Give me 5 viral content ideas for " + input }]
    })
  });

  const data = await res.json();
  const text = data.choices?.[0]?.message?.content || "Error.";
  output.innerHTML = "<pre>" + text + "</pre>";
}
