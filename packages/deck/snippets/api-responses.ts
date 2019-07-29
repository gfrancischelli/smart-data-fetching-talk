async function loadTalks() {
  const talks = await get("/talks");
  // [{ id: "1", event: "2", speaker: "3", ... }]

  const events = await Promise.all(
    talks.map(talk => get(`/events/${talk.event}`))
  );

  const speakers = await Promise.all(
    talks.map(talk => get(`/speakers/${talk.speaker}`))
  );

  return { talks, events, speakers };
}
